/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

type Episode = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  duration: string;
  video_link?: string;
  episode: string;
};

interface FeaturedEpisodesProps {
  episodes: Episode[];
}

const FeaturedEpisodes = ({ episodes }: FeaturedEpisodesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Auto-play every 5 seconds
  useEffect(() => {
    if (episodes.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % episodes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [episodes.length]);

  // Close modal on outside click or ESC key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedEpisode(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedEpisode(null);
      }
    };

    if (selectedEpisode) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedEpisode]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % episodes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + episodes.length) % episodes.length);
  };

  if (episodes.length === 0) {
    return <div className="text-center py-12 text-neutral-400">No featured episodes yet.</div>;
  }

  const currentEpisode = episodes[currentIndex];

  return (
    <section className="relative py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeInOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Featured Episodes
            </h2>
            <p className="text-neutral-400 max-w-md mx-auto">
              Hand-picked episodes you don't want to miss
            </p>
          </div>
        </FadeInOnScroll>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 group">
            {/* Background Image */}
            <Image
              src={currentEpisode.image.startsWith("http") ? currentEpisode.image : `/${currentEpisode.image}`}
              alt={currentEpisode.title}
              fill
              className="object-cover brightness-75 transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1 bg-yellow-500 text-black text-sm font-semibold rounded-full">
                    FEATURED
                  </span>
                  <span className="text-sm text-neutral-300">
                    {currentEpisode.date} • {currentEpisode.duration}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  {currentEpisode.title}
                </h3>

                <p className="text-neutral-300 text-lg line-clamp-2 mb-6">
                  {currentEpisode.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  {currentEpisode.video_link && (
                    <button
                      onClick={() => setSelectedEpisode(currentEpisode)}
                      className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-yellow-400 transition-colors flex items-center gap-2"
                    >
                      ▶ Watch Video
                    </button>
                  )}

                  <a
                    href={currentEpisode.episode}
                    className="px-8 py-3 border border-white/70 hover:bg-white/10 rounded-full font-medium transition-colors"
                  >
                    Listen on Podcast
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black p-4 rounded-full text-white transition-all z-10"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black p-4 rounded-full text-white transition-all z-10"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {episodes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-yellow-400 scale-125" : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedEpisode && selectedEpisode.video_link && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4">
          <div
            ref={modalRef}
            className="w-full max-w-5xl relative bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedEpisode(null)}
              className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors"
            >
              ✕
            </button>

            {/* Video Player */}
            <div className="relative aspect-video">
              <iframe
                src={selectedEpisode.video_link}
                title={selectedEpisode.title}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>

            {/* Video Info */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white">{selectedEpisode.title}</h3>
              <p className="text-neutral-400 mt-2">
                {selectedEpisode.date} • {selectedEpisode.duration}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedEpisodes;