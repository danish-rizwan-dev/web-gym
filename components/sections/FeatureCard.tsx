"use client";
import React, { useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export const FeatureCard = ({ title, desc, icon: Icon }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for tracking mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smoothed spring physics
  const mouseX = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 25 });

  // 1. Perspective Rotation
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  // 2. Parallax Layers (Things moving at different speeds)
  const iconTranslateZ = useTransform(mouseX, [-0.5, 0.5], ["20px", "-20px"]);
  const textTranslateZ = useTransform(mouseY, [-0.5, 0.5], ["10px", "-10px"]);

  // 3. Dynamic Spotlight (Gradient follows cursor)
  const spotLightX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const spotLightY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <div
      ref={containerRef}
      className="perspective-1000 py-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      <motion.div
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d" 
        }}
        className="relative h-[400px] w-80 rounded-[2rem] border border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 p-10 shadow-2xl backdrop-blur-xl group overflow-hidden transition-colors duration-500"
      >
        {/* Dynamic Spotlight Layer */}
        <motion.div 
          style={{
            background: useTransform(
              [spotLightX, spotLightY],
              ([cx, cy]) => `radial-gradient(600px circle at ${cx} ${cy}, rgba(238,0,0,0.15), transparent 80%)`
            )
          }}
          className="absolute inset-0 pointer-events-none z-0"
        />

        {/* Background "Ghost" Icon for depth */}
        <div className="absolute -right-4 -bottom-4 opacity-5 dark:opacity-10 group-hover:scale-110 transition-transform duration-700">
           <Icon size={180} />
        </div>

        <div className="relative z-10 flex flex-col h-full justify-between" style={{ transformStyle: "preserve-3d" }}>
          
          {/* Icon Box with TranslateZ */}
          <motion.div 
            style={{ translateZ: iconTranslateZ }}
            className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center shadow-[0_15px_35px_rgba(238,0,0,0.4)] group-hover:rotate-[10deg] transition-transform duration-500"
          >
            <Icon className="text-white" size={32} />
          </motion.div>
          
          <motion.div style={{ translateZ: textTranslateZ }}>
            <h3 className="text-3xl font-black text-zinc-900 dark:text-white uppercase italic tracking-tighter mb-4 leading-none transition-colors duration-500">
              {title}
            </h3>
            
            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-relaxed transition-colors duration-500">
              {desc}
            </p>

            {/* Bottom Accent Bar */}
            <div className="mt-6 h-1 w-0 group-hover:w-full bg-red-600 transition-all duration-500 rounded-full" />
          </motion.div>
        </div>

        {/* Glass Shimmer Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/30 dark:via-white/5 to-transparent transition-opacity duration-500" />
      </motion.div>
    </div>
  );
};