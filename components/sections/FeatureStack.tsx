"use client";
import React from "react";
import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard"; 
import { Zap, Shield, Trophy, Activity, Fingerprint, Clock } from "lucide-react";

const features = [
  {
    title: "Elite Equipment",
    desc: "Train with professional-grade Panatta and Hammer Strength machines designed for precision.",
    icon: Zap,
  },
  {
    title: "Bio-Access",
    desc: "High-tech fingerprint attendance system ensuring secure and seamless entry 24/7.",
    icon: Fingerprint,
  },
  {
    title: "Expert Coaching",
    desc: "Certified trainers dedicated to transforming your physique with science-based programs.",
    icon: Trophy,
  },
  {
    title: "Performance Tracking",
    desc: "Monitor your progress with our integrated gym management system and mobile app.",
    icon: Activity,
  },
  {
    title: "Premium Recovery",
    desc: "Dedicated recovery zones and steam rooms to ensure you're ready for the next session.",
    icon: Shield,
  },
  {
    title: "Prime Location",
    desc: "Centrally located in Shaheen Bagh with ample parking and a massive workout floor.",
    icon: Clock,
  },
];

export default function FeatureStack() {
  return (
    <section id="why" className="py-24 bg-white dark:bg-[#050505] relative transition-colors duration-500">
      {/* Subtle Background Text - Now adapts to theme */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] dark:opacity-[0.02] select-none">
        <h2 className="text-[20vw] font-black italic uppercase leading-none whitespace-nowrap text-zinc-900 dark:text-white">
          PERFORMANCE • STRENGTH • ELITE • PERFORMANCE • STRENGTH
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-black text-zinc-900 dark:text-white italic uppercase tracking-tighter"
          >
            Why <span className="text-red-600">Web Gym?</span>
          </motion.h2>
          <div className="h-1 w-24 bg-red-600 mt-4 rounded-full" />
        </div>

        {/* The Grid Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1, 
                ease: "easeOut" 
              }}
            >
              <FeatureCard 
                title={feature.title}
                desc={feature.desc}
                icon={feature.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}