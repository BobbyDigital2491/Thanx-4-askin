// app/episodes/page.tsx
import { Suspense } from 'react';
import EpisodesList from '@/components/EpisodesList';
import Footer from '@/components/Footer';

export default function EpisodesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Suspense
        fallback={
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-pulse">
              Loading Episodes...
            </h1>
            <p className="text-lg text-neutral-500">Fetching latest episodes...</p>
          </div>
        }
      >
        <EpisodesList />
      </Suspense>
      <Footer/>
    </div>
  );
}