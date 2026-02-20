"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronRight, Activity } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax: Logo scales up, Text moves slower for 3D depth
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textLeftX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const textRightX = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[110vh] w-full overflow-hidden flex items-center justify-center bg-[#fcfcfc] dark:bg-[#050505] transition-colors duration-700"
    >
      {/* 1. BACKGROUND GRID SYSTEM */}
      <div className="absolute inset-0 z-0 opacity-[0.4] dark:opacity-[0.2] pointer-events-none">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)]" 
        />
      </div>

      <div className="absolute top-10 z-30 w-full flex justify-center px-4 mt-13 mr-7">
        <motion.div 
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 px-6 py-2 rounded-full shadow-sm"
        >
          <Activity size={14} className="text-red-600 animate-pulse" />
          <span className="text-red-600 font-black tracking-[0.5em] uppercase text-[9px] md:text-[10px]">
            Shaheen Bagh • Okhla • Delhi
          </span>
        </motion.div>
      </div>

      {/* 3. STRAIGHT PULSE LINE (Behind Logo) */}
      <div className="absolute inset-0 z-[1] pointer-events-none flex items-center">
        <div className="w-full h-[2px] bg-red-600/20 dark:bg-red-600/40 relative">
          <motion.div 
            initial={{ left: "-20%" }}
            animate={{ left: "120%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-40 h-full bg-gradient-to-r from-transparent via-red-600 to-transparent"
          />
        </div>
      </div>

      {/* 4. BACKGROUND SPLIT TEXT (Arrival Effect & Custom Colors) */}
      <div className="absolute inset-0 z-[2] flex items-center justify-between px-4 md:px-20 pointer-events-none select-none">
        {/* WEB: Black in Light, White in Dark */}
        <motion.h1 
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ x: textLeftX, y: yText }}
          className="text-[12rem] md:text-[22rem] font-black italic uppercase tracking-tighter 
                     text-black/60 dark:text-white/10 transition-colors duration-700"
        >
          WEB
        </motion.h1>
        
        {/* GYM: Always Red */}
        <motion.h1 
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ 
            x: textRightX, 
            y: yText, 
            WebkitTextStroke: "2px #EE0000" 
          }}
          className="text-[12rem] md:text-[22rem] font-black italic uppercase tracking-tighter 
                     text-transparent opacity-20 dark:opacity-30 transition-colors duration-700"
        >
          GYM
        </motion.h1>
      </div>

      {/* 5. THE LOGO - CENTERPIECE (Sharp & Clear) */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ scale: logoScale }}
        className="relative z-[5] flex items-center justify-center pointer-events-none p-10"
      >
        <div className="absolute w-[50vw] h-[50vw] max-w-[400px] bg-red-600/10 dark:bg-red-600/20 blur-[100px] rounded-full" />
        
        <img 
          src="/logo.png" 
          alt="Web Gym Brand"
          className="w-[75vw] max-w-[600px] object-contain 
                     opacity-100 contrast-[1.1] saturate-[1.1]
                     drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] 
                     dark:drop-shadow-[0_0_50px_rgba(238,0,0,0.3)]
                     transition-all duration-500"
        />
      </motion.div>

      {/* 6. BOTTOM ACTION AREA */}
      <motion.div 
        style={{ opacity }} 
        className="absolute bottom-20 z-20 text-center w-full px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="max-w-xl mx-auto mb-4 text-zinc-900 dark:text-zinc-400 text-xs md:text-sm font-black uppercase tracking-[0.4em] leading-loose">
            High performance <span className="text-red-600 italic underline decoration-red-600/30 underline-offset-8">Arena</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#ff0000", boxShadow: "0 20px 40px rgba(238,0,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-red-600 text-white font-black uppercase italic rounded-xl flex items-center gap-4 transition-all shadow-xl"
            >
              Join The Elite <ChevronRight size={22} />
            </motion.button>
            
            <button className="px-12 py-5 border-2 border-zinc-950 dark:border-white/10 text-zinc-950 dark:text-white font-black uppercase italic rounded-xl hover:bg-zinc-950 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all backdrop-blur-xl bg-white/5">
              Explore Arena
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* 7. FINISHING GRADIENTS */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#fcfcfc] dark:to-[#050505]" />
    </section>
  );
}