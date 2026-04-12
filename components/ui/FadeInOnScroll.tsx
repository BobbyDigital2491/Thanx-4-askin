"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";

interface FadeInOnScrollProps {
  children: ReactNode;
  threshold?: number;           // 0–1, default 0.1
  transitionDuration?: string;  // e.g. "700ms", "1s"
  className?: string;
  once?: boolean;               // default true — animate only once
  direction?: "up" | "down" | "left" | "right"; // ← ADD THIS LINE
}

/**
 * Fades in (and slides) children when they enter the viewport.
 */
const FadeInOnScroll = ({
  children,
  threshold = 0.1,
  transitionDuration = "700ms",
  className = "",
  once = true,
  direction = "up",             // ← default value
}: FadeInOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, once]);

  // Map direction to initial translate class
  const translateMap = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "-translate-x-10",
    right: "translate-x-10",
  };

  const initialTranslate = translateMap[direction] || "translate-y-10";

  return (
    <div
      ref={ref}
      className={`
        transition-all ease-out
        duration-[${transitionDuration}]
        ${isVisible 
          ? "opacity-100 translate-x-0 translate-y-0" 
          : `opacity-0 ${initialTranslate}`}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;