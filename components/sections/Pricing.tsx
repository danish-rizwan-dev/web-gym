"use client";
import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, Zap, Trophy, Star, ShieldAlert, Crown, X 
} from "lucide-react";

// 1. Define the Plan interface to fix the "Property does not exist" errors
interface Plan {
  name: string;
  price: string;
  duration: string;
  features: string[];
  icon: React.ElementType;
  highlight?: boolean;
  tag?: string;
}

const plans: Plan[] = [
  { name: "Starter", price: "1,500", duration: "1 Month Plan", features: ["Access to Gym", "Cardio Area", "Standard Equipment", "Ladies Sessions"], icon: Zap },
  { name: "Quarterly", price: "3,999", duration: "3 Months + 1 Month Bonus", features: ["Total 4 Months Access", "Functional Training Area", "CrossFit Sessions"], icon: Star },
  { name: "Half Yearly", price: "6,999", duration: "6 Months + 1 Month Bonus", features: ["Total 7 Months Access", "Body Transformation", "Weight Loss focus"], highlight: true, tag: "Best Seller", icon: Trophy },
  { name: "Annual Pro", price: "9,999", duration: "12 Month Plan", features: ["Full Year Access", "Lowest Monthly Rate", "Pre-booking Available"], icon: ShieldAlert },
  { name: "Ultimate Athlete", price: "17,999", duration: "25 Month Plan", features: ["Over 2 Years Access", "Lowest Average Cost", "Priority Support"], icon: Crown }
];

export default function Pricing() {
  // 2. Specify that selectedPlan can be a Plan object or null
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [userData, setUserData] = useState({ name: "", phone: "" });
  const gymPhone = "918510058123";

  // 3. Add 'FormEvent' type to the event parameter
  const handleWhatsAppSend = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) return;

    const message = `Hi Web Gym! %0A%0A*New Inquiry From Website*%0A*Name:* ${userData.name}%0A*Phone:* ${userData.phone}%0A%0A*Selected Plan:* ${selectedPlan.name} (${selectedPlan.duration})%0A*Price:* ₹${selectedPlan.price}/-%0A%0APlease confirm my registration!`;
    const whatsappUrl = `https://wa.me/${gymPhone}?text=${message}`;
    window.location.href = whatsappUrl; 
  };

  return (
    <section id="plans" className="py-24 bg-[#fcfcfc] dark:bg-[#050505] transition-colors duration-700 overflow-hidden">
    

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-8xl font-black text-zinc-950 dark:text-white italic uppercase tracking-tighter leading-none mb-4">
            THE <span className="text-red-600">ARENA</span> TIERS
          </h2>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em]">Choose your path to greatness</p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.slice(0, 3).map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i} onJoin={() => setSelectedPlan(plan)} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
            {plans.slice(3, 5).map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i + 3} onJoin={() => setSelectedPlan(plan)} />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-zinc-900 w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-200 dark:border-white/10"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-2xl font-black italic uppercase text-zinc-900 dark:text-white leading-none">Registration</h4>
                  <button onClick={() => setSelectedPlan(null)} className="text-zinc-400 hover:text-red-600 transition-colors"><X size={24} /></button>
                </div>
                
                <p className="text-zinc-500 text-[10px] mb-8 font-black uppercase tracking-widest">
                  Plan: <span className="text-red-600">{selectedPlan.name}</span> • ₹{selectedPlan.price}
                </p>

                <form onSubmit={handleWhatsAppSend} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g., Danish Khan" 
                      className="w-full px-5 py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-red-600 text-zinc-900 dark:text-white font-bold placeholder:text-zinc-400"
                      value={userData.name}
                      onChange={(e) => setUserData({...userData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX" 
                      className="w-full px-5 py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-red-600 text-zinc-900 dark:text-white font-bold placeholder:text-zinc-400"
                      value={userData.phone}
                      onChange={(e) => setUserData({...userData, phone: e.target.value})}
                    />
                  </div>
                  <button type="submit" className="w-full py-5 mt-4 bg-red-600 text-white font-black uppercase italic rounded-2xl shadow-xl shadow-red-600/30 hover:bg-red-700 transition-all">
                    Direct Send to WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
        
      <div className="bg-red-600 py-6 mt-16 overflow-hidden flex whitespace-nowrap border-y border-red-700 select-none">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-10 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 text-white font-black italic uppercase text-xs md:text-sm tracking-tighter">
              <Zap size={16} fill="white" />
              SPECIAL PRE-BOOKING OFFER: ANNUAL ACCESS FOR JUST ₹9,000/- (FIRST 50 MEMBERS ONLY)
              <Zap size={16} fill="white" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// 4. Added proper types for the component props
interface PricingCardProps {
  plan: Plan;
  index: number;
  onJoin: () => void;
}

function PricingCard({ plan, index, onJoin }: PricingCardProps) {
  const Icon = plan.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className={`p-10 rounded-[2.5rem] border flex flex-col justify-between relative overflow-hidden transition-all duration-500 h-full ${
        plan.highlight 
          ? 'border-red-600 bg-red-600/[0.04] dark:bg-red-600/[0.08] ring-1 ring-red-600/30 shadow-2xl shadow-red-600/10' 
          : 'border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/40'
      }`}
    >
      {plan.tag && <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-black px-6 py-2 rounded-bl-3xl uppercase italic z-20 tracking-widest">{plan.tag}</div>}
      
      <div>
        <div className="flex items-center gap-4 mb-8">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${plan.highlight ? 'bg-red-600/10 border border-red-600/20' : 'bg-zinc-100 dark:bg-black/40'}`}>
                <Icon size={20} className={plan.highlight ? 'text-red-600' : 'text-zinc-500'} />
            </div>
            <h3 className="text-2xl font-black text-zinc-950 dark:text-white uppercase italic tracking-tighter">{plan.name}</h3>
        </div>

        <div className="mb-10">
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-black text-zinc-500">₹</span>
            <span className="text-6xl font-black text-zinc-950 dark:text-white tracking-tighter leading-none">{plan.price}</span>
          </div>
          <p className="text-red-600 font-bold uppercase italic text-[10px] mt-2 tracking-[0.2em]">{plan.duration}</p>
        </div>

        <ul className="space-y-4 mb-12">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 text-[13px] font-medium leading-tight">
              <Check size={14} className="text-red-600 shrink-0 mt-0.5" /> {f}
            </li>
          ))}
        </ul>
      </div>

      <button 
        onClick={onJoin}
        className={`w-full py-5 rounded-2xl font-black uppercase italic text-xs tracking-widest transition-all ${
          plan.highlight 
            ? 'bg-red-600 text-white shadow-xl shadow-red-600/30 hover:bg-red-700' 
            : 'bg-zinc-100 dark:bg-white/5 text-zinc-900 dark:text-white hover:bg-red-600 hover:text-white'
        }`}
      >
        Join The Arena
      </button>
    </motion.div>
  );
}