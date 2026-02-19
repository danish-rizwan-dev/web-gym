"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, CheckCircle2, User, Target, Phone, Sparkles } from "lucide-react";

export default function JoinForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", goal: "", phone: "" });

  // Reset step when modal closes
  useEffect(() => {
    if (!isOpen) setTimeout(() => setStep(1), 500);
  }, [isOpen]);

  const nextStep = () => setStep((s) => s + 1);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          {/* Backdrop with Blur */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/60 dark:bg-black/80 backdrop-blur-md"
          />

          {/* Form Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="relative w-full max-w-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            {/* Elite Glow Effect (Dark Mode only) */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-600/20 blur-[80px] pointer-events-none hidden dark:block" />

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-100 dark:bg-white/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(step / 4) * 100}%` }}
                className="h-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]" 
              />
            </div>

            <button 
              onClick={onClose} 
              className="absolute top-8 right-8 text-zinc-400 hover:text-red-600 dark:text-zinc-500 dark:hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}
                    className="flex flex-col"
                  >
                    <div className="w-14 h-14 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 mb-8 border border-red-600/20">
                      <User size={28} />
                    </div>
                    <h3 className="text-4xl font-black text-zinc-900 dark:text-white uppercase italic tracking-tighter mb-2">
                      WHO ARE <span className="text-red-600">YOU?</span>
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-[0.2em] mb-10">Identity Check • 01</p>
                    
                    <div className="relative group">
                      <input 
                        type="text" 
                        autoFocus
                        placeholder="ENTER YOUR NAME"
                        className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl px-6 py-5 text-zinc-900 dark:text-white font-bold placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 transition-all uppercase italic"
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <button 
                      onClick={nextStep}
                      disabled={!formData.name}
                      className="w-full mt-8 bg-zinc-900 dark:bg-white text-white dark:text-black py-5 rounded-2xl font-black uppercase italic flex items-center justify-center gap-3 hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl shadow-black/5 dark:shadow-none"
                    >
                      Next Phase <ChevronRight size={20} />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}
                  >
                    <div className="w-14 h-14 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 mb-8 border border-red-600/20">
                      <Target size={28} />
                    </div>
                    <h3 className="text-4xl font-black text-zinc-900 dark:text-white uppercase italic tracking-tighter mb-2">
                      CHOOSE <span className="text-red-600">MISSION</span>
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">Objective Selection • 02</p>
                    
                    <div className="grid grid-cols-1 gap-4">
                      {["Build Muscle", "Weight Loss", "Athletic Power"].map((goal) => (
                        <button 
                          key={goal}
                          onClick={() => { setFormData({...formData, goal}); nextStep(); }}
                          className="w-full text-left bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-red-600 dark:hover:border-red-600 hover:bg-red-600/5 rounded-2xl px-8 py-5 text-zinc-900 dark:text-white font-black uppercase italic transition-all group"
                        >
                          <div className="flex justify-between items-center">
                            {goal}
                            <div className="w-6 h-6 rounded-full border border-zinc-300 dark:border-white/20 group-hover:border-red-600 group-hover:bg-red-600 transition-all" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}
                  >
                    <div className="w-14 h-14 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 mb-8 border border-red-600/20">
                      <Phone size={28} />
                    </div>
                    <h3 className="text-4xl font-black text-zinc-900 dark:text-white uppercase italic tracking-tighter mb-2">
                      DIRECT <span className="text-red-600">LINE</span>
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-[0.2em] mb-10">Final Verification • 03</p>
                    
                    <input 
                      type="tel" 
                      autoFocus
                      placeholder="+91 00000 00000"
                      className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl px-6 py-5 text-zinc-900 dark:text-white text-center text-2xl font-black focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 transition-all tracking-widest"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    
                    <button 
                      onClick={nextStep}
                      disabled={!formData.phone}
                      className="w-full mt-8 bg-red-600 text-white py-6 rounded-2xl font-black uppercase italic text-lg shadow-[0_20px_40px_rgba(220,38,38,0.3)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                    >
                      SECURE ACCESS <Sparkles size={20} />
                    </button>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div 
                    key="step4"
                    initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-6"
                  >
                    <div className="relative mx-auto w-28 h-28 mb-8">
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl" 
                        />
                        <div className="relative w-full h-full bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl">
                            <CheckCircle2 size={56} strokeWidth={2.5} />
                        </div>
                    </div>
                    <h3 className="text-5xl font-black text-zinc-900 dark:text-white uppercase italic tracking-tighter mb-4">
                        YOU'RE <span className="text-green-500">READY</span>
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 font-medium max-w-[280px] mx-auto leading-relaxed">
                        The elite team has been notified. Stand by for your briefing call.
                    </p>
                    <button 
                        onClick={onClose} 
                        className="mt-12 px-10 py-4 bg-zinc-100 dark:bg-white/5 text-zinc-900 dark:text-white rounded-xl font-black uppercase italic text-xs tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all"
                    >
                        Close Portal
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}