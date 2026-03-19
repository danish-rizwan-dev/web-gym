"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

const totalImages = 19;

// This logic organizes images into "Columns" for the two-row effect
const generateBentoGroups = () => {
  const groups = [];
  for (let i = 1; i <= totalImages; i++) {
    // Every 3rd column will be a "Large" single-image column
    if (i % 3 === 0) {
      groups.push({
        id: `group-${i}`,
        type: "large",
        images: [`/GymPics/1 (${i}).jpeg`],
      });
    } else {
      // Other columns stack two images vertically
      if (i + 1 <= totalImages) {
        groups.push({
          id: `group-${i}`,
          type: "stacked",
          images: [`/GymPics/1 (${i}).jpeg`, `/GymPics/1 (${i + 1}).jpeg`],
        });
        i++; // Skip next because we used it in the stack
      } else {
        groups.push({
          id: `group-${i}`,
          type: "large",
          images: [`/GymPics/1 (${i}).jpeg`],
        });
      }
    }
  }
  return groups;
};

const bentoGroups = generateBentoGroups();

export default function Gallery() {
  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scrolls by one full view-width for that "page turn" feel
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="vault" className="py-24 bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <span className="w-12 h-[2px] bg-red-600"></span>
               <span className="text-red-600 font-black uppercase tracking-[0.3em] text-xs">Visual Intel</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-zinc-900 dark:text-white italic uppercase tracking-tighter leading-none">
              THE <span className="text-red-600">VAULT</span>
            </h2>
          </div>
          
          {/* Slider Controls */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="p-4 rounded-full border border-zinc-200 dark:border-white/10 hover:bg-red-600 hover:text-white transition-all active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="p-4 rounded-full border border-zinc-200 dark:border-white/10 hover:bg-red-600 hover:text-white transition-all active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal Collage Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {bentoGroups.map((group) => (
            <div 
              key={group.id} 
              className={`flex-shrink-0 snap-start ${group.type === 'large' ? 'w-[450px]' : 'w-[300px]'} h-[600px] flex flex-col gap-4`}
            >
              {group.images.map((imgUrl, idx) => (
                <motion.div
                  key={idx}
                  className={`relative rounded-[2rem] overflow-hidden group bg-zinc-900 border border-white/5 ${group.type === 'large' ? 'h-full' : 'h-1/2'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src={imgUrl} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    alt="Gym" 
                  />
                  
                  {/* Overlay Trigger */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      onClick={() => setActiveUrl(imgUrl)}
                      className="p-4 bg-red-600 text-white rounded-full scale-50 group-hover:scale-100 transition-transform duration-500 shadow-xl"
                    >
                      <Maximize2 size={24} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeUrl && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setActiveUrl(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-red-600 transition-colors">
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={activeUrl} 
              className="max-w-full max-h-[90vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}