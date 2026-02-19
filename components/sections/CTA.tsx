"use client";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500">
      {/* Background Glow Effect - Adjusted for light/dark visibility */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-600/[0.05] dark:bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-red-600/30 bg-red-600/5 text-red-600 dark:text-red-500 text-xs font-black uppercase tracking-[0.2em]">
            <Zap size={14} fill="currentColor" />
            Limited Memberships Available
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-white uppercase italic tracking-tighter leading-[0.9] mb-8"
        >
          STOP WISHING.<br />
          <span className="text-red-600">START COMMANDING.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-zinc-500 dark:text-zinc-400 mb-12 text-lg md:text-xl max-w-2xl mx-auto font-medium"
        >
          Join Shaheen Bagh's most advanced fitness arena. Experience biometric 
          security, elite equipment, and a community of winners.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="relative inline-block group"
        >
          {/* Animated Outer Pulse */}
          <div className="absolute -inset-1 bg-red-600 rounded-2xl blur opacity-20 dark:opacity-30 animate-pulse group-hover:opacity-40 transition-opacity" />
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-12 py-6 bg-red-600 text-white font-black uppercase italic rounded-2xl text-xl shadow-[0_20px_40px_rgba(238,0,0,0.3)] flex items-center gap-4"
          >
            Claim Your Spot Now
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        {/* Floating Background Elements - Theme Adaptive */}
        <div className="absolute -bottom-10 -left-20 text-[10rem] font-black text-zinc-900/[0.02] dark:text-white/[0.02] italic select-none pointer-events-none uppercase">
          Elite
        </div>
        <div className="absolute -top-10 -right-20 text-[10rem] font-black text-zinc-900/[0.02] dark:text-white/[0.02] italic select-none pointer-events-none uppercase">
          Now
        </div>
      </div>
    </section>
  );
}