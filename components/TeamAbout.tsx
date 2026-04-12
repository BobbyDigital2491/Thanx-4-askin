"use client";

import React from 'react';
import { motion } from 'framer-motion';


const TeamAbout = () => {
  return (
    <div className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 mb-6">
            <span className="text-amber-400 text-sm font-medium tracking-widest">THE HEART OF THE PODCAST</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-8">
            Built by Brooklyn.<br />
            Powered by <span className="text-amber-400">Passion</span>.
          </h2>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-neutral-300 text-xl leading-relaxed text-center"
          >
            Diamonds are Forever was born from late-night conversations in Brooklyn basements, 
            where raw stories met real ambition. What started as friends sharing experiences 
            quickly evolved into a platform dedicated to amplifying voices that deserve to be heard.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-300 text-xl leading-relaxed text-center mt-10"
          >
            Our team — a tight-knit crew of storytellers, producers, editors, and creatives — 
            brings decades of combined experience from music, media, and cultural commentary. 
            We don’t just record episodes; we craft experiences that linger long after the final words.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-neutral-300 text-xl leading-relaxed text-center mt-10"
          >
            From the streets that raised us to the microphones that now carry our message, 
            every episode is a testament to resilience, creativity, and the unbreakable bond 
            of community. This isn’t just a podcast — it’s a movement.
          </motion.p>
        </div>

        {/* Decorative Gold Line */}
        <div className="flex justify-center mt-16">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default TeamAbout;