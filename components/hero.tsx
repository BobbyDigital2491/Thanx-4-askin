/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";

const HeroSectionOne = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside or pressing ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  // Trailer video embed URL
  const trailerVideoUrl = "https://www.youtube.com/embed/SkcjUFhzlU4?si=ROcPityDm19eoE-z"; 
  

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-32 lg:pt-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/30 bg-amber-500/10">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-400 text-sm font-medium tracking-widest">NEW EPISODES WEEKLY</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-none">
              Thankx 4 Askin
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 max-w-lg">
              We paint portraits of Black excellence by interviewing real people 
              who are making real impact in their communities.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="/episodes"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-amber-400 hover:bg-amber-400 text-black font-semibold rounded-full text-lg transition-all"
              >
                Explore Episodes
              </motion.a>

              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-white/40 hover:border-white text-white font-semibold rounded-full text-lg transition-all"
              >
                Watch Trailer
              </motion.button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
              <img
                src="/Hero.jpg"
                alt="Thankx 4 Askin Podcast"
                className="w-full aspect-[16/10] object-cover"
              />
              {/* Gold accent overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-amber-500/10" />
            </div>

            {/* Decorative elements */}
            <div/>
            <div/>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4">
          <div
            ref={modalRef}
            className="w-full max-w-5xl relative bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 z-10 bg-black/70 hover:bg-red-600 text-white w-11 h-11 rounded-full flex items-center justify-center text-2xl transition-colors"
            >
              ✕
            </button>

            {/* Video Player */}
            <div className="relative aspect-video">
              <iframe
                src={trailerVideoUrl}
                title="Thankx 4 Askin Trailer"
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSectionOne;