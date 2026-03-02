"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, Zap, MapPin, ArrowRight, Play } from "lucide-react";
import { useRef, useMemo } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // High-performance scroll handling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Use useTransform sparingly on large text blocks
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Memoize the marquee items to prevent re-renders
  const marqueeItems = useMemo(() => [...Array(4)], []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#fafafa] dark:bg-[#030303] transition-colors duration-700"
    >
      {/* Optimized Background Grid - Removed complex mask-image for better perf */}
      <div className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none">
        <div className="absolute w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Static Gradient Orbs - Blur is expensive to animate, so we only pulse opacity */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none will-change-[opacity]"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 min-h-screen flex flex-col justify-center py-20 lg:py-0">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full">
          {/* Left Column */}
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left will-change-transform"
          >
            {/* Location Badge */}
            <div className="group inline-flex items-center gap-2 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-4 py-2 rounded-full mb-6 shadow-sm">
              <div className="relative flex items-center justify-center w-2 h-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
              </div>
              <span className="text-zinc-700 dark:text-zinc-300 font-semibold tracking-wide text-xs uppercase">
                Shaheen Bagh • Okhla
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black italic uppercase tracking-tighter text-zinc-950 dark:text-white leading-[0.9] mb-6">
              The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500">
                Web Gym
              </span>
            </h1>

            <p className="max-w-lg text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-8">
              A high-performance training arena designed for the elite. Forge
              your strength and dominate your goals.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto px-8 py-4 bg-red-600 text-white font-black uppercase italic rounded-2xl flex items-center justify-center gap-3 transition-colors hover:bg-red-700"
              >
                Join The Elite <ArrowRight size={18} />
              </motion.button>

              <button className="group w-full sm:w-auto px-8 py-4 bg-white dark:bg-white/5 border-2 border-zinc-200 dark:border-white/10 text-zinc-950 dark:text-white font-black uppercase italic rounded-2xl transition-all flex items-center justify-center gap-2">
                <Play size={16} className="text-red-600 fill-red-600" />
                Watch Tour
              </button>
            </div>
          </motion.div>

          {/* Right Column: Logo */}
          {/* Right Column: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:flex-1 flex items-center justify-center relative"
          >
            {/* Animated Glow behind the logo */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-red-600 blur-[80px] rounded-full scale-75 pointer-events-none"
            />

            {/* The Logo Animation */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 will-change-transform"
            >
              <img
                src="/logo.png"
                alt="Web Gym"
                className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[480px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_0_30px_rgba(220,38,38,0.2)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Optimized Marquee - High Performance CSS Animation */}
      <div className="absolute bottom-0 left-0 right-0 bg-red-600 py-4 overflow-hidden border-t border-white/10">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          className="flex whitespace-nowrap will-change-transform"
        >
          {marqueeItems.map((_, i) => (
            <div key={i} className="flex items-center">
              <div className="flex items-center gap-4 text-white font-black italic uppercase text-lg md:text-2xl px-8">
                <Zap size={20} className="fill-white" />
                <span>Pre-Booking Offer: Annual Access ₹9,000/-</span>
                <span className="bg-white/20 px-3 py-1 rounded-lg text-sm border border-white/30">
                  First 50 Only
                </span>
              </div>
              <div className="w-12 h-[2px] bg-white/30" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
