/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; // Keep as client component for pagination state & IntersectionObserver

import React, { useEffect, useRef, useState, Suspense } from 'react';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/server'; // Adjust path if needed

// Type for episode (matches your Supabase table)
type Episode = {
  id: number;
  image: string;
  title: string;
  description: string;
  author: string;
  author_link: string;
  date: string;
  duration: string;
  episode: string;
};

const FadeInOnScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

const Podcast = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const itemsPerPage = 9;

  // Fetch episodes once on mount (client-side fetch for simplicity)
  useEffect(() => {
    async function fetchEpisodes() {
      try {
        setLoading(true);
        const supabase = await createClient(); // Server client works here too, but since component is client, it's fine

        const { data, error } = await supabase
          .from('episodes')
          .select('*')
          .order('id', { ascending: false }); // Newest first (descending id)

        if (error) throw error;

        setEpisodes(data || []);
      } catch (err: any) {
        setError(err.message || 'Failed to load episodes');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchEpisodes();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = episodes.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(episodes.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white text-xl">Loading episodes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-red-500 text-xl">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <section className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <FadeInOnScroll>
            <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              All Episodes
            </h1>
          </FadeInOnScroll>

          <br />

          {/* Episodes Grid */}
          <Suspense fallback={<div className="text-white text-center">Loading more...</div>}>
            <div className="grid max-w-lg gap-6 mx-auto lg:grid-cols-3 lg:max-w-none">
              {currentItems.map((item) => (
                <FadeInOnScroll key={item.id}>
                  <div className="flex flex-col overflow-hidden rounded-xl shadow-2xl bg-neutral-900 border border-neutral-800 hover:border-yellow-600/50 transition-all duration-300">
                    <div className="flex-shrink-0 relative h-48">
                      <Image
                        src={item.image.startsWith('http') ? item.image : `/${item.image}`}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6 bg-neutral-900">
                      <div className="flex-1">
                        <a
                          href={item.episode}
                          className="block mt-2 group"
                        >
                          <p className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                            {item.title}
                          </p>
                          <p className="mt-3 text-base text-neutral-400 line-clamp-3">
                            {item.description}
                          </p>
                        </a>
                      </div>
                      <div className="flex items-center mt-6">
                        <div className="flex-shrink-0">
                          <a href={item.author_link}>
                            <span className="sr-only">{item.author}</span>
                            <Image
                              src="/Detox.jpg"
                              alt={item.author}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-neutral-300">
                            <a href={item.author_link} className="hover:underline hover:text-yellow-400">
                              {item.author}
                            </a>
                          </p>
                          <div className="flex space-x-1 text-sm text-neutral-500">
                            <time dateTime={item.date}>{item.date}</time>
                            <span aria-hidden="true"> · </span>
                            <span>{item.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </Suspense>

          {/* Pagination */}
          {episodes.length > itemsPerPage && (
            <div className="flex justify-center mt-12">
              <nav className="inline-flex rounded-lg shadow-lg overflow-hidden" aria-label="Pagination">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-6 py-3 bg-neutral-800 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-700 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  className="relative inline-flex items-center px-6 py-3 bg-neutral-800 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-700 transition-colors"
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Podcast;