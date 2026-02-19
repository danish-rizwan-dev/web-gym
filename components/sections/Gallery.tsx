"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Maximize2 } from "lucide-react";

const vaultItems = [
  { 
    id: 0, 
    type: "image",
    url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200", 
    size: "md:col-span-2 md:row-span-2", 
  },
  { 
    id: 1, 
    type: "video_trigger", 
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800",
    size: "md:col-span-1 md:row-span-1", // Made smaller as requested
  },
  { 
    id: 2, 
    type: "image",
    url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800", 
    size: "md:col-span-1 md:row-span-1", 
  },
  { 
    id: 3, 
    type: "image",
    url: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200", 
    size: "md:col-span-2 md:row-span-1", 
  },
];

export default function Gallery() {
  const [activeItem, setActiveItem] = useState<typeof vaultItems[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-[#050505] px-6 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-6xl md:text-8xl font-black text-zinc-900 dark:text-white italic uppercase tracking-tighter leading-none">
            THE <span className="text-red-600">Gallery</span>
          </h2>
        </div>

        {/* Bento Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[700px]">
          {vaultItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`${item.size} relative rounded-[2.5rem] overflow-hidden group border border-zinc-200 dark:border-white/5 bg-zinc-900`}
            >
              <img 
                src={item.url} 
                className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
                alt="Vault Content" 
              />

              {item.type === "video_trigger" ? (
                /* TRANSLUCENT VIDEO TRIGGER */
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 group-hover:bg-black/0 transition-colors"
                  onClick={() => setActiveItem(item)}
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-2xl transition-all"
                  >
                    <Play size={28} fill="currentColor" className="ml-1" />
                  </motion.div>
                </div>
              ) : (
                /* IMAGE TRIGGER WITH BOTTOM-RIGHT MAXIMIZE */
                <div className="absolute inset-0 flex items-end justify-end p-8 pointer-events-none">
                  <button 
                    onClick={() => setActiveItem(item)}
                    className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 pointer-events-auto hover:bg-red-600 hover:border-red-600"
                  >
                    <Maximize2 size={22} />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setActiveItem(null)} 
              className="absolute top-8 right-8 text-white/50 hover:text-red-600 transition-colors z-[210] p-2"
            >
              <X size={40} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_0_80px_rgba(238,0,0,0.25)]"
            >
              {activeItem.type === "video_trigger" ? (
                <div className="aspect-video bg-black">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    allow="autoplay; encrypted-media" 
                    allowFullScreen
                  />
                </div>
              ) : (
                <img src={activeItem.url} className="w-full h-auto max-h-[85vh] object-contain bg-zinc-900" alt="Expanded Vault" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}