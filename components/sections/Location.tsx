"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function Location() {
  // Encoded address for Google Maps embed
  const address = "C-151, Tayyab Ln, Jamia Nagar, Okhla, New Delhi, Delhi 110025";
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(address)}`;
  
  // Note: For a quick "no-API-key" version, use this open-source embed format:
  const fallbackMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="py-24 bg-white dark:bg-[#050505] px-6 border-t border-zinc-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text Details */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-black text-zinc-900 dark:text-white italic uppercase tracking-tighter mb-6">
              Locate the <span className="text-red-600">Arena</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-10 max-w-md leading-relaxed">
              Based in Okhla's high-energy hub. Our Jamia Nagar facility is strategically located for those who take their training seriously.
            </p>

            <div className="space-y-6">
              {/* Address Block */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-red-600/50 transition-all duration-300 group">
                <div className="bg-red-600/10 dark:bg-red-600/20 p-3 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-colors text-red-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-zinc-900 dark:text-white font-bold uppercase text-sm tracking-widest">Headquarters</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1 leading-snug">
                    C-151, Tayyab Ln, <br />
                    Infront of Dream Bells School, Block H, <br />
                    Jamia Nagar, Okhla, New Delhi 110025
                  </p>
                </div>
              </div>

              {/* Hours Block */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                <div className="bg-red-600/10 dark:bg-red-600/20 p-3 rounded-xl text-red-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-zinc-900 dark:text-white font-bold uppercase text-sm tracking-widest">Training Window</h4>
                  <div className="grid grid-cols-2 gap-x-8 mt-2">
                    <p className="text-zinc-500 text-xs font-bold uppercase">Mon - Sat</p>
                    <p className="text-zinc-900 dark:text-zinc-200 text-sm font-black italic">05:00 AM - 11:00 PM</p>
                    <p className="text-zinc-500 text-xs font-bold uppercase mt-1">Sunday</p>
                    <p className="text-zinc-900 dark:text-zinc-200 text-sm font-black italic mt-1">08:00 AM - 01:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`} 
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 mt-10 bg-zinc-900 dark:bg-white text-white dark:text-black px-10 py-5 rounded-2xl font-black uppercase italic transition-all hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white shadow-xl shadow-red-600/10"
            >
              <Navigation size={20} className="fill-current" /> Open in Maps
            </motion.a>
          </motion.div>

          {/* Right Side: Cinematic Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[550px] rounded-[2.5rem] overflow-hidden border border-zinc-200 dark:border-white/10 shadow-2xl group"
          >
            {/* Cinematic Map Styling */}
            <div className="absolute inset-0 bg-red-600/5 dark:bg-red-600/10 pointer-events-none z-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
            
            <iframe 
              src={fallbackMapUrl}
              className="w-full h-full grayscale-[0.5] dark:grayscale dark:invert dark:opacity-80 dark:contrast-125 transition-all duration-700 hover:grayscale-0 dark:hover:opacity-100"
              loading="lazy"
              title="Gym Location"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}