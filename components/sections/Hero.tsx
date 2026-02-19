"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[110vh] w-full overflow-hidden flex items-center justify-center bg-black transition-colors duration-500"
    >
      {/* 1. THE 3D IMAGE LAYER */}
      <motion.div 
        style={{ scale: scaleImage }}
        className="absolute inset-0 z-0"
      >
        {/* High-quality cinematic gym photo */}
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" 
          alt="Gym Arena"
          className="w-full h-full object-cover opacity-60 dark:opacity-40 grayscale-[0.2] contrast-125"
        />
        
        {/* Cinematic Overlays */}
        {/* Radial Vignette - creates the 'spotlight' on the content */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        {/* Bottom Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-[#050505]" />
      </motion.div>

      {/* 2. THE FLOATING CONTENT LAYER */}
      <motion.div 
        style={{ y: yText, opacity }} 
        className="relative z-20 text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-red-600 font-black tracking-[0.5em] uppercase text-[10px] md:text-xs mb-6 block drop-shadow-2xl">
            Established 2024 • Shaheen Bagh
          </span>
          
          <h1 className="text-7xl md:text-[12rem] font-black italic uppercase tracking-tighter leading-[0.8] text-white select-none">
            WEB <br />
            <span 
              className="text-transparent" 
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}
            >
              GYM
            </span>
          </h1>

          <p className="max-w-lg mx-auto mt-8 text-zinc-300 text-sm md:text-lg font-medium leading-relaxed drop-shadow-md">
            The elite high-performance arena. <br className="hidden md:block" /> 
            Where iron meets discipline.
          </p>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.button 
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#ff0000",
                boxShadow: "0 0 40px rgba(238,0,0,0.5)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-red-600 text-white font-black uppercase italic rounded-xl flex items-center gap-3 shadow-2xl transition-all"
            >
              Join The Elite <ChevronRight size={22} />
            </motion.button>
            
            <button className="px-10 py-5 border-2 border-white/20 text-white font-black uppercase italic rounded-xl hover:bg-white hover:text-black transition-all backdrop-blur-md">
              Explore Facility
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* 3. ATMOSPHERIC PARTICLES (Dust/Smoke effect) */}
      <div className="absolute inset-0 z-[10] pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      </div>

      {/* 4. SIDE DECORATION (The 'Vertical' text) */}
      <div className="absolute left-10 bottom-20 z-20 hidden lg:block">
        <div className="flex items-center gap-4 rotate-[-90deg] origin-left">
          <div className="w-12 h-[2px] bg-red-600" />
          <span className="text-white/30 text-xs font-black uppercase tracking-widest italic">
            Command Your Strength
          </span>
        </div>
      </div>
    </section>
  );
}