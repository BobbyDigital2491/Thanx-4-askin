// app/page.tsx
import { Suspense } from 'react';
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-32">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-neutral-400">Loading featured content...</p>
            </div>
          </div>
        }
      >
        <HomeContent />
      </Suspense>
    </main>
  );
}