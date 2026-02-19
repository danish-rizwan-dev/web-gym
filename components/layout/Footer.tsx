"use client";
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, ArrowUp, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-[#050505] pt-20 pb-10 px-6 border-t border-zinc-200 dark:border-white/5 overflow-hidden transition-colors duration-500">
      {/* Background Stylized Text - Theme Adaptive */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15vw] font-black text-zinc-900/[0.02] dark:text-white/[0.02] uppercase italic select-none pointer-events-none whitespace-nowrap">
        WEB GYM ELITE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group cursor-default">
              <div className="w-8 h-8 bg-red-600 rounded-sm skew-x-[-12deg] flex items-center justify-center font-black italic text-white text-xl shadow-[0_0_15px_rgba(238,0,0,0.5)]">
                W
              </div>
              <span className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase italic">
                WEB <span className="text-red-600">GYM</span>
              </span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-xs">
              The premier fitness destination in Shaheen Bagh. Revolutionizing the local gym experience with world-class gear and biometric security.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "#EE0000" }}
                  className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-zinc-400 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-zinc-900 dark:text-white font-bold uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              {['Explore', 'The Gallery', 'Elite Plans', 'Coaches'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-zinc-500 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-600 text-sm transition-colors uppercase font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-zinc-900 dark:text-white font-bold uppercase tracking-widest text-sm">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 text-sm">
                <MapPin size={16} className="text-red-600" /> Shaheen Bagh, Delhi, 110025
              </li>
              <li className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 text-sm">
                <Phone size={16} className="text-red-600" /> +91 98XXX XXXXX
              </li>
              <li className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 text-sm">
                <Mail size={16} className="text-red-600" /> join@webgym.in
              </li>
            </ul>
          </div>

          {/* Back to Top */}
          <div className="flex flex-col items-center lg:items-end justify-between">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-[0_10px_30px_rgba(238,0,0,0.3)] group"
            >
              <ArrowUp className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
            <div className="text-right mt-10">
              <p className="text-zinc-300 dark:text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">Built by Elite Devs</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 dark:text-zinc-600 text-[10px] uppercase font-bold tracking-widest">
            © {currentYear} WEB GYM • DESIGNED FOR THE ELITE • SHAHEEN BAGH
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-400 dark:text-zinc-600 hover:text-red-600 dark:hover:text-zinc-400 text-[10px] uppercase font-bold tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-400 dark:text-zinc-600 hover:text-red-600 dark:hover:text-zinc-400 text-[10px] uppercase font-bold tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}