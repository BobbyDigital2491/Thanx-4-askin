'use client';

import React from 'react';
import VideoModal from './VideoModal';

const Banner = () => {
  return (
    <div className="inset-x-0 bottom-0 z-10 pointer-events-auto">
      <div className="relative py-8 bg-gradient-to-r from-zinc-950 via-black to-black border-t border-amber-500/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* Left Text */}
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
              <p className="font-sans text-2xl md:text-3xl font-extrabold tracking-tighter text-white">
                New Episodes Every Week
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/episodes"
                className="inline-flex items-center justify-center 
                           px-8 py-3.5 
                           font-semibold text-base sm:text-lg
                           bg-white text-black 
                           hover:bg-amber-400 hover:text-black
                           active:scale-95
                           transition-all duration-300 
                           rounded-full
                           shadow-lg shadow-black/50"
              >
                Browse Episodes
              </a>

              <VideoModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;