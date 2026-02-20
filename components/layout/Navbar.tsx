"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Zap } from "lucide-react";
import { ModeToggle } from "@/components/ui/ModeToggle";
import JoinForm from "../forms/JoinForm"; // Ensure the path matches your file structure

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Explore");
  const [isFormOpen, setIsFormOpen] = useState(false); // State to control the modal

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

 const navLinks = [
    { name: "Explore", href: "#hero" },     // Hero Section
    { name: "Gallery", href: "#gallery" },  // Your Bento Gallery
    { name: "Elite Plans", href: "#plans" }, // Pricing Section
    { name: "Coaches", href: "#trainers" },  // Trainers Section
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            pointer-events-auto
            relative flex items-center justify-between px-4 md:px-8 py-3 rounded-2xl w-full max-w-7xl
            transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) border
            ${
              isScrolled
                ? "bg-white/70 dark:bg-black/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-zinc-200 dark:border-white/10 scale-[0.98] md:scale-95 translate-y-2"
                : "bg-transparent border-transparent scale-100"
            }
          `}
        >
          {/* LEFT: LOGO */}
          <div className="flex items-center gap-3 group cursor-pointer">
              <Image
                src="/logo.png"
                alt="Web Gym Logo"
                width={50}
                height={50}
                className="  font-black italic text-white text-xl"
              />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase italic">
                WEB <span className="text-red-600">GYM</span>
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-zinc-500">Elite Arena</span>
            </div>
          </div>

          {/* CENTER: DESKTOP NAV */}
          <div className="hidden md:flex  md:ml-25 items-center gap-1 p-1 bg-zinc-100/50 dark:bg-white/5 rounded-xl border border-zinc-200/50 dark:border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className="relative px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-colors duration-300"
              >
                <span className={`relative z-10 ${activeLink === link.name ? 'text-white' : 'text-zinc-500 dark:text-zinc-400 hover:text-red-600'}`}>
                  {link.name}
                </span>
                {activeLink === link.name && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-red-600 rounded-lg shadow-[0_0_15px_rgba(238,0,0,0.3)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-green-500/10 rounded-full border border-green-500/20">
               <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[9px] uppercase font-black text-green-600 dark:text-green-500 tracking-tighter">Live Status</span>
            </div>

            <div className="h-8 w-[1px] bg-zinc-200 dark:bg-white/10 mx-1 hidden md:block" />

            <ModeToggle />

            {/* Desktop Join Button - Now triggers the form */}
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFormOpen(true)}
              className="group bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-xl font-black text-xs uppercase italic flex items-center gap-2 transition-all hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white"
            >
              Join <Zap size={14} className="fill-current group-hover:animate-bounce" />
            </motion.button>

            <button
              className="md:hidden p-2 text-zinc-900 dark:text-white bg-zinc-100 dark:bg-white/5 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* MOBILE OVERLAY MENU */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                className="absolute top-full left-0 right-0 mt-4 p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-3xl shadow-2xl md:hidden flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 gap-2">
                  {navLinks.map((link) => (
                    <motion.a 
                      key={link.name} 
                      href={link.href} 
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 dark:bg-white/5 text-lg font-black uppercase italic text-zinc-900 dark:text-white border border-transparent hover:border-red-600/50 transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                      <ArrowRight size={18} className="text-red-600" />
                    </motion.a>
                  ))}
                </div>
                
                {/* Mobile Trial Button - Also triggers the form */}
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsFormOpen(true);
                  }}
                  className="p-4 bg-red-600 rounded-2xl text-center active:scale-95 transition-transform"
                >
                  <p className="text-white font-black uppercase italic">Claim Free Trial</p>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>

      {/* The Global Form Modal */}
      <JoinForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Navbar;