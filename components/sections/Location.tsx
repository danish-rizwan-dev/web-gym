"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-24 bg-white dark:bg-[#050505] px-6 border-t border-zinc-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text Details */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-black text-zinc-900 dark:text-white italic uppercase tracking-tighter mb-6">
              Find the <span className="text-red-600">Arena</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-10 max-w-md leading-relaxed">
              Located in the heart of South East Delhi. Our Shaheen Bagh facility is the flagship high-performance center for elite training.
            </p>

            <div className="space-y-6">
              {/* Address Block */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-red-600/50 transition-colors">
                <div className="bg-red-600/10 dark:bg-red-600/20 p-3 rounded-xl">
                  <MapPin className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="text-zinc-900 dark:text-white font-bold uppercase text-sm">Main Branch</h4>
                  <p className="text-zinc-500 dark:text-zinc-500 text-sm mt-1">4th Floor, Main Road, Shaheen Bagh, Jamia Nagar, New Delhi, 110025</p>
                </div>
              </div>

              {/* Hours Block */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                <div className="bg-red-600/10 dark:bg-red-600/20 p-3 rounded-xl">
                  <Clock className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="text-zinc-900 dark:text-white font-bold uppercase text-sm">Training Hours</h4>
                  <div className="grid grid-cols-2 gap-x-8 mt-1">
                    <p className="text-zinc-500 text-sm">Mon - Sat:</p>
                    <p className="text-zinc-900 dark:text-zinc-200 text-sm font-medium">05:00 AM - 11:00 PM</p>
                    <p className="text-zinc-500 text-sm">Sunday:</p>
                    <p className="text-zinc-900 dark:text-zinc-200 text-sm font-medium">08:00 AM - 01:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.a 
              href="https://maps.google.com" 
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 mt-10 bg-zinc-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-black uppercase italic transition-colors hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white"
            >
              <Navigation size={20} className="fill-current" /> Get Directions
            </motion.a>
          </motion.div>

          {/* Right Side: Cinematic Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative h-[500px] rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 group"
          >
            {/* Cinematic Overlay - subtle in light mode, stronger in dark mode */}
            <div className="absolute inset-0 bg-red-600/5 dark:bg-red-600/10 pointer-events-none z-10 mix-blend-overlay" />
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5414631338!2d77.2917!3d28.537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f0b0000001%3A0x1d1b1b1b1b1b1b1b!2sShaheen%20Bagh%2C%20Jamia%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
              className="w-full h-full grayscale dark:invert dark:opacity-70 dark:contrast-125 transition-all duration-700"
              loading="lazy"
            ></iframe>

            {/* Floating Info Tag on Map */}
            <div className="absolute top-6 left-6 z-20 bg-white/90 dark:bg-black/80 backdrop-blur-md border border-zinc-200 dark:border-red-600/50 p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                <span className="text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-tighter">Live from Shaheen Bagh</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}