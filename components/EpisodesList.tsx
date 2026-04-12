// components/EpisodesList.tsx
// This is an async Server Component – fetches data

import { createClient } from '@/lib/supabase/server';
import PodcastClient from './PodcastClient';

export default async function EpisodesList() {
  const supabase = await createClient();

  const { data: episodes, error } = await supabase
    .from('episodes')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    console.error('Supabase fetch error:', error);
    return (
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Failed to load episodes</h2>
        <p className="text-neutral-400">{error.message}</p>
      </div>
    );
  }

  if (!episodes?.length) {
    return (
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">No episodes found</h2>
        <p className="text-neutral-400">Check back soon!</p>
      </div>
    );
  }

  return <PodcastClient initialEpisodes={episodes} />;
}