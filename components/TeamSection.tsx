"use client";

import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";

const TeamSection = () => {
  const [active, setActive] = useState<(typeof teamMembers)[number] | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <div id="team" className="bg-black py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Paragraph Section - Comes First */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 mb-8">
            <span className="text-amber-400 text-sm font-medium tracking-widest">THE HEART OF THE PODCAST</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-8">
            Built by Queens.<br />
            Powered by <span className="text-amber-400">Passion</span>.
          </h2>

          <div className="space-y-8 text-neutral-300 text-lg leading-relaxed">
            <p>
              Thanx4Askin is the No. 1 podcast in Southside Jamaica, Queens, a bold, culture-rich platform
              that channels the spirit of the barbershop through an unfiltered audio and video experience.
              Hosted by Detox Jones, Bug Owt and G Vasquez, the show merges passion, authenticity and
              street-wise insight with thoughtful conversation, creating a space where guests are encouraged to
              speak openly about life, legacy, struggle and success.
            </p>
            <p>
              Built on the belief that every story matters, Thanx4Askin paints vivid portraits of creativity and
              community through interviews with real people who’ve made a real impact. From legendary
              figures in hip-hop, film and entertainment to voices shaped by the streets, business and culture,
              each episode explores the journeys and truths that define the modern Black experience.
            </p>
            <p>
              Whether it’s uncovering untold industry stories with icons like Lord Jamar and Fredro Starr,
              diving deep into music and entrepreneurial hustle with artists like Rosco P Coldchain, or
              confronting systemic issues alongside actors like Antwon Tanner, the podcast elevates
              conversations that matter and challenges perspectives in every seat.
            </p>
            <p>
              In essence, Thanx4Askin isn’t just a podcast — it’s a cultural dialogue. It’s equal parts
              barbershop energy and documentary-style depth, offering humor, wisdom and insight with no
              topic off limits. From sports and crime to business and comedy, every sit-down stimulates
              thought, sparks debate and amplifies the voices of those shaping today’s entertainment culture
              landscape.
            </p>
            <p>
              New episodes drop regularly on YouTube and audio platforms, serving listeners and viewers who
              crave authentic storytelling that reflects, respects and redefines culture one conversation at a
              time.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div>
          <h3 className="text-4xl font-semibold text-white text-center mb-12">Meet The Team</h3>

          <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <motion.div
                layoutId={`card-${member.title}-${id}`}
                key={member.title}
                onClick={() => setActive(member)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative h-80">
                  <Image
                    width={600}
                    height={600}
                    src={member.src}
                    alt={member.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-1">{member.title}</h3>
                  <p className="text-amber-400 text-sm tracking-wider">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black/90 px-4">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-lg bg-neutral-900 rounded-3xl overflow-hidden"
            >
              <div className="relative h-96">
                <Image
                  width={800}
                  height={800}
                  src={active.src}
                  alt={active.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-2">{active.title}</h3>
                <p className="text-amber-400 mb-6">{active.description}</p>
                <div className="text-neutral-400 leading-relaxed text-[15px] max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
                  {typeof active.content === "function" ? active.content() : active.content}
                </div>
              </div>
            </motion.div>

            <button
              onClick={() => setActive(null)}
              className="absolute top-8 right-8 text-white text-3xl hover:text-amber-400 transition-colors"
            >
              ✕
            </button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const teamMembers = [
  {
    description: "Host",
    title: "Detox Jones",
    src: "https://myxlfdxeqryemfmyfnoi.supabase.co/storage/v1/object/public/episode-thumbnails/Detox.jpg",
    content: () => (
      <p>Detox Jones is the host and backbone of the podcast.</p>
    ),
  },
  {
    description: "Co Host",
    title: "Bug Owt",
    src: "https://myxlfdxeqryemfmyfnoi.supabase.co/storage/v1/object/public/episode-thumbnails/Bug.jpg",
    content: () => (
      <p>Bug Owt is a master barber and entrepreneur.</p>
    ),
  },
  {
    description: "Co Host",
    title: "G Vasquez",
    src: "https://myxlfdxeqryemfmyfnoi.supabase.co/storage/v1/object/public/episode-thumbnails/G.jpg",
    content: () => (
      <p>G Vasquez is a master barber and movie producer.</p>
    ),
  },
  {
    description: "Creative Director",
    title: "Ally",
    src: "https://myxlfdxeqryemfmyfnoi.supabase.co/storage/v1/object/public/episode-thumbnails/ally.png",
    content: () => (
      <p>
        Ally is the creative director of Thanx 4 Askin, shaping its visual and thematic identity. 
        With a background in design and storytelling, he collaborates with the team to create compelling episode art and promotional content.
      </p>
    ),
  },
  {
    description: "Co Host",
    title: "Prime",
    src: "https://myxlfdxeqryemfmyfnoi.supabase.co/storage/v1/object/public/episode-thumbnails/P2.jpg",
    content: () => (
      <p>Prime is our social media and photography guru.</p>
    ),
  },
];

export default TeamSection;