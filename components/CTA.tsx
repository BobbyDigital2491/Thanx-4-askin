/* eslint-disable @next/next/no-img-element */
import React from 'react';

const CTA = () => {
  return (
    <div>
      <section className="bg-white dark:bg-black">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full rounded-3xl dark:hidden"
            src="https://myxlfdxeqryemfmyfnoi.supabase.co/storage/v1/object/public/episode-thumbnails/Banner.jpg"
            alt="dashboard image"
          />
          <img
            className="w-full rounded-3xl hidden dark:block"
            src="https://myxlfdxeqryemfmyfnoi.supabase.co/storage/v1/object/public/episode-thumbnails/Banner.jpg"
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Interviews with real people who make real impact. 
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            The Thanx4askin podcast covers a range of topics including sports, hip-hop, business, comedy, and crime. Our goal is to showcase diverse, honest, and nuanced conversations that celebrate black culture. Thus, creating beautiful portraits of black people that raises the bar.
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
