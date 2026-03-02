"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Trophy, Activity, Fingerprint, Clock, ArrowUpRight } from "lucide-react";

// Added a `span` property to control the Bento Grid sizes
const features = [
  {
    title: "Elite Equipment",
    desc: "Train with professional-grade Panatta and Hammer Strength machines designed for biomechanical precision and maximum gains.",
    icon: Zap,
    span: "md:col-span-2 lg:col-span-2", // Large Card
  },
  {
    title: "Bio-Access",
    desc: "High-tech biometric attendance system ensuring secure, seamless 24/7 entry.",
    icon: Fingerprint,
    span: "col-span-1", // Standard Card
  },
  {
    title: "Expert Coaching",
    desc: "Certified trainers dedicated to transforming your physique with science-based programs.",
    icon: Trophy,
    span: "col-span-1", // Standard Card
  },
  {
    title: "Performance App",
    desc: "Monitor your progress, macros, and personal records with our integrated gym management mobile app.",
    icon: Activity,
    span: "md:col-span-2 lg:col-span-1", // Standard on desktop, wide on tablet
  },
  {
    title: "Premium Recovery",
    desc: "Dedicated recovery zones, massage guns, and steam rooms to ensure you're fully repaired and ready for the next brutal session.",
    icon: Shield,
    span: "md:col-span-1 lg:col-span-2", // Large Card
  },
  {
    title: "Prime Location",
    desc: "Centrally located in Shaheen Bagh with ample parking and a massive, ventilated workout floor.",
    icon: Clock,
    span: "col-span-1", // Standard Card
  },
];

export default function FeatureStack() {
  return (
    <section id="why" className="py-20 md:py-32 bg-[#fcfcfc] dark:bg-[#050505] relative transition-colors duration-700 overflow-hidden">
      
      {/* Ambient Glowing Background */}
      <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] bg-zinc-400/10 dark:bg-zinc-800/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-red-600" />
              <span className="text-red-600 font-bold uppercase tracking-widest text-xs md:text-sm">
                The Advantage
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-zinc-950 dark:text-white italic uppercase tracking-tighter leading-none">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Web Gym?</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-sm font-medium"
          >
            We don't just offer equipment; we offer an ecosystem engineered for peak human performance. 
          </motion.p>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-min">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`group relative overflow-hidden bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-black/5 dark:border-white/5 rounded-3xl p-8 hover:border-red-600/30 dark:hover:border-red-600/40 transition-colors duration-500 ${feature.span}`}
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-black/50 border border-black/5 dark:border-white/5 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-sm">
                      <Icon size={24} className="text-zinc-900 dark:text-zinc-100 group-hover:text-white transition-colors" />
                    </div>
                    
                    {/* Decorative Arrow that appears on hover */}
                    <ArrowUpRight size={24} className="text-zinc-300 dark:text-zinc-700 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-black italic uppercase text-zinc-950 dark:text-white tracking-tight mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm font-medium leading-relaxed max-w-lg">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}