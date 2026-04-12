/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState } from "react";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import Link from "next/link";

const navData = [
  { name: "About", href: "/about" },
  { name: "Episodes", href: "/episodes" },
  { name: "Apparel", href: "https://thanx4askinmerch.com" },
  { name: "Contact", href: "/contact" },
];

const NavComponent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useOutsideClick(ref, () => setModalOpen(false));

  return (
    <>
      <header
        className={`
          sticky top-0 z-50
          w-full
          border-b border-amber-400
          bg-black/70 backdrop-blur-md
          text-yellow-400
          transition-all duration-300
        `}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo - slightly smaller height */}
            <div className="flex-shrink-0 py-6">
              <Link href="/">
                <img
                  src="/thx.png"
                  alt="Logo"
                  width={160}           // ← reduced from 180
                  height={110}          // ← reduced from 130
                  className="rounded-2xl object-contain hover:scale-105 transition-transform duration-200"
                />
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 font-medium text-base lg:text-lg">
              {navData.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-yellow-200 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile hamburger button */}
            <div className="md:hidden">
              <button
                onClick={() => setModalOpen(true)}
                className="p-2 -mr-2 rounded-md hover:bg-yellow-950/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                aria-label="Open menu"
              >
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu - full screen overlay */}
      {isModalOpen && (
        <div
          ref={ref}
          className="fixed inset-0 z-50 md:hidden bg-black/95 backdrop-blur-lg"
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-yellow-400">Menu</h2>
              <button
                onClick={() => setModalOpen(false)}
                className="p-3 rounded-full bg-yellow-950/40 hover:bg-yellow-900/60 transition-colors"
                aria-label="Close menu"
              >
                <svg className="h-8 w-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-5 mt-4">
              {navData.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setModalOpen(false)}
                  className="
                    block py-4 px-6 text-xl font-semibold
                    rounded-lg border border-yellow-600/30
                    hover:bg-yellow-950/40 hover:border-yellow-500/50
                    transition-all duration-200
                  "
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default NavComponent;