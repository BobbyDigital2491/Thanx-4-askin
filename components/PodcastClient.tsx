"use client";

import React, { useState, useEffect, useRef } from 'react';
import FadeInOnScroll from '@/components/ui/FadeInOnScroll';
import Image from 'next/image';

type Episode = {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  author_link: string;
  date: string;
  duration: string;
  episode: string;
  video_link?: string;  // New optional field for video URL
};

interface PodcastClientProps {
  initialEpisodes: Episode[];
}

const PodcastClient = ({ initialEpisodes }: PodcastClientProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(initialEpisodes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = initialEpisodes.slice(startIndex, startIndex + itemsPerPage);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedEpisode(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedEpisode(null);
      }
    };

    if (selectedEpisode) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedEpisode]);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Header */}
      <FadeInOnScroll>
        <h1 className="mb-10 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl tracking-tight text-white">
          All Episodes
        </h1>
      </FadeInOnScroll>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((episode, index) => (
          <FadeInOnScroll
            key={episode.id}
            transitionDuration="800ms"
            direction="up"
            className={`transition-delay-[${index * 100}ms]`}
          >
            <div
              className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm hover:border-yellow-600/50 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
              onClick={() => episode.video_link && setSelectedEpisode(episode)}  // Open modal if video_link exists
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={episode.image.startsWith('http') ? episode.image : `/${episode.image}`}
                  alt={episode.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors line-clamp-2">
                  {episode.title}
                </h3>

                <p className="mb-4 text-neutral-400 line-clamp-3 text-sm md:text-base">
                  {episode.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-sm text-neutral-500">
                  <Image
                    src="/Detox.jpg"
                    alt={episode.author}
                    width={36}
                    height={36}
                    className="rounded-full ring-2 ring-neutral-700"
                  />
                  <div>
                    <a
                      href={episode.author_link}
                      className="font-medium text-neutral-300 hover:text-yellow-400 transition-colors"
                    >
                      {episode.author}
                    </a>
                    <div className="flex items-center gap-2 mt-1">
                      <time>{episode.date}</time>
                      <span>·</span>
                      <span>{episode.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center gap-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          <span className="px-6 py-3 bg-neutral-900 rounded-lg text-neutral-300">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      )}

      {/* Video Modal */}
      {selectedEpisode && selectedEpisode.video_link && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
          <div
            ref={modalRef}
            className="w-full max-w-4xl p-4 md:p-8 bg-neutral-900 rounded-xl shadow-2xl border border-neutral-800"
          >
            <div className="relative aspect-video">
              <iframe
                src={selectedEpisode.video_link}
                title={selectedEpisode.title}
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h2 className="mt-4 text-xl font-bold text-white">{selectedEpisode.title}</h2>
            <button
              onClick={() => setSelectedEpisode(null)}
              className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PodcastClient;