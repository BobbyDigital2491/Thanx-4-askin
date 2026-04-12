"use client";

import React from 'react';
import Image from 'next/image';


const NewBanner = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col lg:items-start items-center text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 mb-6">
              <span className="text-amber-400 text-sm font-medium tracking-widest">Real People. Real Stories</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              Interviews with real people who make real impact.<br />
              through <span className="text-amber-400">real people</span> who make real impact.
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed max-w-lg">
              The Thanx4askin podcast covers a range of topics including sports, 
              hip-hop, business, comedy, and crime. Our goal is to showcase diverse, 
              honest, and nuanced conversations that celebrate black culture. 
              Thus, creating beautiful portraits of black people that raises the bar.
            </p>

            
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="https://myxlfdxeqryemfmyfnoi.supabase.co/storage/v1/object/public/episode-thumbnails/Toya.png"
                alt="Building community through collaboration"
                fill
                className="object-cover"
                priority
              />
              {/* Gold overlay accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-amber-500/10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewBanner;