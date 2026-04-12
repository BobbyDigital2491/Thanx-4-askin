"use client";

import React from 'react';


const AboutHero = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        
        {/* Luxurious Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
        
        {/* Gold Accent Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#ca8a04_0%,transparent_70%)] opacity-20" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-amber-500/30 bg-black/60 backdrop-blur-md mb-8">
            <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium tracking-[3px] text-amber-400">ESTABLISHED 2025</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-none">
            The Story Behind<br />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Thanx 4 Askin
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            A raw, unfiltered podcast born from the streets of Brooklyn. 
            Real conversations. Real stories. Built to last — just like the diamonds we celebrate.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
          </div>
        </div>
       </div>
    </div>
  );
};

export default AboutHero;