// components/HomeContent.tsx
import { createClient } from '@/lib/supabase/server';
import HeroSectionOne from "@/components/hero";
import CTA from "@/components/CTA";
import NewBanner from "@/components/NewBanner";
import FeaturedEpisodes from "@/components/FeaturedEpisodes";
import Footer from './Footer';

export default async function HomeContent() {
  const supabase = await createClient();

  const { data: allEpisodes, error } = await supabase
    .from('episodes')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    console.error("Error fetching episodes for featured section:", error);
  }

  // Shuffle and take 6 random episodes for the carousel
  const shuffledEpisodes = allEpisodes
    ? allEpisodes.sort(() => Math.random() - 0.5).slice(0, 6)
    : [];

  return (
    <div className="">
      <HeroSectionOne />
      <FeaturedEpisodes episodes={shuffledEpisodes} />
      <NewBanner />
      <CTA />
      <Footer/>
    </div>
  );
}