"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Instagram, Trophy, Star } from "lucide-react";

const coaches = [
  { 
    name: "Vikram Singh", 
    role: "Strength Specialist", 
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600",
    awards: "10+ Years Exp"
  },
  { 
    name: "Sarah Khan", 
    role: "Yoga & Mobility", 
    img: "https://images.unsplash.com/photo-1518611012118-296072bb58c4?auto=format&fit=crop&q=80&w=600",
    awards: "Gold Medalist"
  },
  { 
    name: "Arjun Dev", 
    role: "Bodybuilding Pro", 
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?auto=format&fit=crop&q=80&w=600",
    awards: "IFBB Pro"
  },
];

export default function Trainers() {
  const containerRef = useRef(null);
  
  return (
    <section id="trainers" ref={containerRef} className="py-32 bg-white dark:bg-[#050505] relative overflow-hidden transition-colors duration-500">
      {/* Background Decorative Text - Theme Adaptive */}
      <div className="absolute top-20 right-[-5%] text-[15vw] font-black text-zinc-900/[0.03] dark:text-white/[0.03] uppercase italic leading-none pointer-events-none select-none">
        MASTER
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black text-zinc-900 dark:text-white italic uppercase tracking-tighter leading-none">
              ELITE <span className="text-red-600">COACHES</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 mt-4 max-w-md uppercase tracking-widest text-xs font-bold">
              Learn from the best athletes in Delhi. Our coaches are certified professionals with a track record of transformation.
            </p>
          </motion.div>
          
          <div className="hidden md:block h-px flex-1 bg-zinc-200 dark:bg-white/10 mx-10 mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ y: -20 }}
      className="group relative h-[550px] w-full perspective-1000"
    >
      {/* The Card Body */}
      <div className="relative h-full w-full rounded-3xl overflow-hidden transition-all duration-500 bg-zinc-100 dark:bg-zinc-900">
        
        {/* Image with Grayscale Toggle */}
        <img 
          src={coach.img} 
          alt={coach.name} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
        />
        
        {/* Overlays - Always dark to keep text readable on images */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
        <div className="absolute inset-0 border-2 border-zinc-200/10 dark:border-white/5 rounded-3xl group-hover:border-red-600/50 transition-colors duration-500" />

        {/* Info Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className="overflow-hidden">
            <motion.div 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              className="flex items-center gap-2 mb-2"
            >
              <Trophy size={14} className="text-red-600" />
              <span className="text-red-600 font-black text-[10px] uppercase tracking-[0.2em]">{coach.awards}</span>
            </motion.div>
          </div>

          <h3 className="text-3xl font-black text-white uppercase italic leading-none mb-1">
            {coach.name}
          </h3>
          <p className="text-zinc-300 text-sm font-bold uppercase tracking-tighter mb-6">
            {coach.role}
          </p>

          {/* Social Hover Action */}
          <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <button className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg hover:bg-white hover:text-red-600 transition-colors">
              <Instagram size={18} />
            </button>
            <div className="flex items-center gap-1 text-white font-black text-xs uppercase italic">
              <Star size={12} fill="white" /> Follow Path
            </div>
          </div>
        </div>
      </div>
      
      {/* Card Shadow/Glow Background */}
      <div className="absolute -inset-2 bg-red-600/0 group-hover:bg-red-600/10 blur-2xl rounded-3xl transition-all duration-500 -z-10" />
    </motion.div>
  );
}