"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Instagram, Trophy, Star } from "lucide-react";

const coaches = [
  { 
    name: "Jubair Khan", 
    role: "Owner & Transformation Specialist", 
    img: "/Zubair.jpeg", 
    awards: "Elite Coach",
    ig: "https://www.instagram.com/jubair_khan_fitfor"
  },
  { 
    name: "Shahid Khan", 
    role: "Owner & Strength Specialist", 
    img: "/shahid.jpeg", 
    awards: "Pro Athlete",
    ig: "https://www.instagram.com/khanofdelhi"
  },
  { 
    name: "Asif Khan", 
    role: "Owner & Fitness Consultant", 
    img: "/asif.jpeg", 
    awards: "Master Trainer",
    ig: "https://www.instagram.com/liger_8889" // Update with actual IG
  }
];

export default function Trainers() {
  const containerRef = useRef(null);
  
  return (
    <section id="trainers" ref={containerRef} className="py-20 md:py-32 bg-[#fcfcfc] dark:bg-[#050505] relative overflow-hidden transition-colors duration-700">
      
      {/* Ambient Glowing Background */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-red-600/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Background Decorative Text */}
      <div className="absolute top-10 md:top-20 right-[-2%] text-[20vw] md:text-[15vw] font-black text-black/[0.02] dark:text-white/[0.02] uppercase italic leading-none pointer-events-none select-none">
        MASTER
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-red-600" />
              <span className="text-red-600 font-bold uppercase tracking-widest text-xs md:text-sm">
                The Leadership
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-zinc-950 dark:text-white italic uppercase tracking-tighter leading-[0.9]">
              ELITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">COACHES</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 mt-6 max-w-sm uppercase tracking-widest text-[10px] md:text-xs font-bold leading-relaxed">
              Founded and led by Delhi's premier athletes. Our owners bring over a decade of professional experience to your fitness journey.
            </p>
          </motion.div>
          
          <div className="hidden md:block h-px flex-1 bg-zinc-200 dark:bg-white/10 mx-4 lg:mx-10 mb-6" />
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {coaches.map((coach, i) => (
            <TrainerCard key={coach.name} coach={coach} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainerCard({ coach, index }: { coach: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group relative h-[450px] sm:h-[500px] lg:h-[580px] w-full will-change-transform"
    >
      <div className="relative h-full w-full rounded-3xl overflow-hidden bg-zinc-200 dark:bg-zinc-900 shadow-xl">
        
        {/* Full Color Image with Hover Zoom */}
        <img 
          src={coach.img} 
          alt={coach.name} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500" />
        <div className="absolute inset-0 border border-white/10 rounded-3xl group-hover:border-red-600/50 transition-colors duration-500" />

        <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
          
          <div className="flex items-center gap-2 mb-2">
            <Trophy size={14} className="text-red-500" />
            <span className="text-red-500 font-black text-[10px] uppercase tracking-[0.2em]">
              {coach.awards}
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic leading-none mb-2">
            {coach.name}
          </h3>
          <p className="text-zinc-200 text-xs md:text-sm font-bold uppercase tracking-tighter mb-6 md:mb-8">
            {coach.role}
          </p>

          <a 
            href={coach.ig} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 w-fit"
          >
            <button className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg hover:bg-white hover:text-red-600 transition-colors">
              <Instagram size={20} />
            </button>
            <div className="flex items-center gap-1 text-white hover:text-red-500 transition-colors font-black text-[10px] md:text-xs uppercase italic tracking-wider">
              <Star size={12} fill="currentColor" /> View Instagram
            </div>
          </a>

        </div>
      </div>
      
      {/* Red Glow on Hover */}
      <div className="absolute -inset-2 bg-red-600/0 group-hover:bg-red-600/10 blur-2xl rounded-3xl transition-all duration-500 -z-10" />
    </motion.div>
  );
}
