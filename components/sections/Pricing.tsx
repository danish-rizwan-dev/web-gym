"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  { 
    name: "Basic", 
    price: "2000", 
    features: ["Access to Gym", "Cardio Area", "Lockers"] 
  },
  { 
    name: "Premium", 
    price: "3500", 
    features: ["Personal Trainer", "Diet Plan", "Steam Bath", "Bio-Access"], 
    highlight: true 
  },
  { 
    name: "Elite", 
    price: "5000", 
    features: ["24/7 Access", "All Classes", "Massage Therapy", "Priority Support"] 
  },
];

export default function Pricing() {
  return (
    <section id="plans" className="py-24 bg-white dark:bg-[#050505] px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-zinc-900 dark:text-white italic uppercase tracking-tighter mb-12 text-center">
          Select Your <span className="text-red-600">Tier</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl border backdrop-blur-xl relative overflow-hidden group transition-all duration-500 ${
                plan.highlight 
                  ? 'border-red-600 bg-red-600/[0.03] dark:bg-red-600/[0.05]' 
                  : 'border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/50 hover:border-red-600/50 hover:bg-red-600/[0.02]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase italic z-20">
                  Best Value
                </div>
              )}

              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white uppercase group-hover:text-red-600 transition-colors duration-300">
                  {plan.name}
                </h3>
                
                <div className="my-6">
                  <span className="text-4xl font-black text-zinc-900 dark:text-white">
                    ₹{plan.price}
                  </span>
                  <span className="text-zinc-500 dark:text-zinc-500 ml-2">/month</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300 text-sm">
                      <Check size={16} className="text-red-600 shrink-0 group-hover:scale-110 transition-transform duration-300" /> {f}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold uppercase italic transition-all duration-300 ${
                  plan.highlight 
                    ? 'bg-red-600 text-white shadow-[0_10px_20px_rgba(238,0,0,0.2)] hover:bg-red-700' 
                    : 'bg-zinc-200 dark:bg-white/5 text-zinc-900 dark:text-white group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(238,0,0,0.2)]'
                }`}>
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}