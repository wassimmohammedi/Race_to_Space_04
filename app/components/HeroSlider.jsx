"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    headline: ["RACE", "TO", "SPACE"],
    accentWord: "SPACE",
    sub: "4TH EDITION · EXPLORING SPACE TECHNIQUES",
    bgDesktop: "/images/slide1.png",
    bgMobile: "/images/resposide1.png",
    accent: "#3b9eff",
  },
  {
    id: 2,
    headline: ["MASTER", "THE", "TECH"],
    accentWord: "TECH",
    sub: "CONFERENCES & HANDS-ON WORKSHOPS",
    bgDesktop: "/images/slide2.jpg",
    bgMobile: "/images/resposide2.png",
    accent: "#2b7fff",
  },
  {
    id: 3,
    headline: ["IGNITE", "THE", "SPARK"],
    accentWord: "SPARK",
    sub: "BY QUANTA CLUB · UNIVERSITY OF ALGIERS 1",
    bgDesktop: "/images/slide3.png",
    bgMobile: "/images/resposide3.png",
    accent: "#4db8ff",
  },
  {
    id: 4,
    headline: ["BUILD", "AND", "COMPETE"],
    accentWord: "COMPETE",
    sub: "APPLY YOUR KNOWLEDGE TO REAL-LIFE MISSIONS",
    bgDesktop: "/images/slide2.png",
    bgMobile: "/images/resposide4.png",
    accent: "#60cfff",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  // Consistent Time Delay: Timer resets whenever `current` changes
  useEffect(() => {
    const timer = setTimeout(next, 8000);
    return () => clearTimeout(timer);
  }, [current, next]);

  const goTo = (i) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  const slide = slides[current];

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (dir) => ({
      x: dir > 0 ? "-20%" : "20%",
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    }),
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#04060f]">
      {/* Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="stars-layer" />
      </div>

      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x" // Enables swiping
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset }) => {
            // Trigger slide change if swiped far enough
            if (offset.x < -50) {
              next();
            } else if (offset.x > 50) {
              prev();
            }
          }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          {/* BACKGROUND IMAGE (RESPONSIVE) */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
            style={{
              backgroundImage: `url(${
                isMobile ? slide.bgMobile : slide.bgDesktop
              })`,
            }}
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 max-w-3xl pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-xs tracking-[0.3em] text-white/50 uppercase font-mono">
                Quanta Club · Race to Space
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full border border-white/20 text-white/40 font-mono">
                4th Edition
              </span>
            </motion.div>

            {/* HEADLINE */}
            <div className="flex flex-col">
              {slide.headline.map((word, i) => (
                <motion.span
                  key={word + i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.3 + i * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className={`font-black leading-none tracking-tight uppercase text-6xl md:text-8xl lg:text-9xl ${
                    word === slide.accentWord
                      ? "text-transparent bg-clip-text"
                      : "text-white"
                  }`}
                  style={
                    word === slide.accentWord
                      ? {
                          backgroundImage: `linear-gradient(90deg, ${slide.accent}, #ffffff88)`,
                        }
                      : {}
                  }
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* SUB */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.3 }}
              className="mt-6 text-white/60 text-xs md:text-sm tracking-[0.2em] uppercase font-light"
            >
              {slide.sub}
            </motion.p>

            {/* LINE */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-6 h-px w-16 origin-left"
              style={{ backgroundColor: slide.accent }}
            />

            {/* CTA */}
            <motion.div
              onClick={(e) => {
                e.stopPropagation(); // Prevent drag from interfering with click
                next();
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.3 }}
              className="mt-8 flex items-center gap-3 cursor-pointer group w-fit pointer-events-auto"
            >
              <span className="text-xs tracking-[0.25em] text-white/50 uppercase group-hover:text-white/80 transition-colors duration-300">
                Swipe to explore
              </span>
              <ChevronRight
                className="w-4 h-4 group-hover:translate-x-1 transition-all"
                style={{ color: slide.accent }}
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* DOTS */}
      <div className="absolute bottom-8 left-8 md:left-16 lg:left-24 z-20 flex gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-1.5"
                : "w-1.5 h-1.5 bg-white/30 hover:bg-white/50"
            }`}
            style={i === current ? { backgroundColor: slide.accent } : {}}
          />
        ))}
      </div>

      {/* COUNTER */}
      <div className="absolute bottom-8 right-8 z-20 font-mono text-xs text-white/30">
        <span style={{ color: slide.accent }}>
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="mx-1">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>

      {/* STARS */}
      <style jsx>{`
        .stars-layer {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 30% 60%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 15%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 45%, rgba(255,255,255,0.2) 0%, transparent 100%),
            radial-gradient(1px 1px at 85% 75%, rgba(255,255,255,0.4) 0%, transparent 100%);
        }
      `}</style>
    </section>
  );
}