"use client";
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle, ArrowUp, MapPin, Mail, Phone, Zap } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-[#050505] pt-20 pb-10 px-6 border-t border-zinc-200 dark:border-white/5 overflow-hidden transition-colors duration-500">
      {/* Background Stylized Text */}
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
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-xs uppercase font-bold tracking-tight">
              The premier fitness destination in Jamia Nagar. Revolutionizing the local gym experience with elite training and world-class gear.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/webgym_warriors"
                target="_blank"
                whileHover={{ y: -5, color: "#EE0000", backgroundColor: "rgba(238,0,0,0.1)" }}
                className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-zinc-400 transition-all"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, color: "#EE0000", backgroundColor: "rgba(238,0,0,0.1)" }}
                className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-zinc-400 transition-all"
              >
                <Facebook size={18} />
              </motion.a>
              {/* WhatsApp instead of Twitter */}
              <motion.a
                href="https://wa.me/918510058123"
                target="_blank"
                whileHover={{ y: -5, color: "#25D366", backgroundColor: "rgba(37,211,102,0.1)" }}
                className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-zinc-400 transition-all"
              >
                <MessageCircle size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-zinc-900 dark:text-white font-black uppercase tracking-widest text-sm italic">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Explore', id: 'hero' },
                { name: 'The Vault', id: 'vault' },
                { name: 'Elite Plans', id: 'plans' },
                { name: 'Arena Location', id: 'location' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={`#${link.id}`} className="text-zinc-500 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-600 text-xs transition-colors uppercase font-black tracking-widest">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-zinc-900 dark:text-white font-black uppercase tracking-widest text-sm italic">Connect</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-tight">
                <MapPin size={16} className="text-red-600 shrink-0" /> 
                <span>C-151, Tayyab Ln, Jamia Nagar,<br/>Okhla, New Delhi 110025</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-tight">
                <Phone size={16} className="text-red-600" /> +91 85100 58123
              </li>
              <li className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-tight">
                <Mail size={16} className="text-red-600" /> webgymofficial@gmail.com
              </li>
            </ul>
          </div>

          {/* Back to Top */}
          <div className="flex flex-col items-center lg:items-end justify-between">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, backgroundColor: "#b91c1c" }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-[0_10px_40px_rgba(238,0,0,0.4)] group"
            >
              <ArrowUp className="group-hover:-translate-y-1 transition-transform" strokeWidth={3} />
            </motion.button>
            <div className="text-right mt-10">
              <p className="text-zinc-400 dark:text-white/20 text-[9px] font-black uppercase tracking-[0.4em] flex items-center justify-end gap-2">
                Created by Danish Rizwan <Zap size={10} className="fill-current" />
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 dark:text-zinc-600 text-[10px] uppercase font-black tracking-[0.2em]">
            © {currentYear} WEB GYM • BUILT FOR THE ELITE • OKHLA, DELHI
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-400 dark:text-zinc-600 hover:text-red-600 text-[10px] uppercase font-black tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-zinc-400 dark:text-zinc-600 hover:text-red-600 text-[10px] uppercase font-black tracking-widest transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}