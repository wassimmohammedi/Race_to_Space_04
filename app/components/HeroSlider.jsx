"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    headline: ["CATCH", "THE", "SIGNAL"],
    accentWord: "SIGNAL",
    sub: "CAN YOU DECODE IT",
    bgDesktop: "/images/slide1.png",
    bgMobile: "/images/resposide1.png",
    accent: "#3b9eff",
    decorImg: "/images/1.png",
    decorPos: "bottom-8 right-8",
    decorSize: "w-48 md:w-64",
  },
  {
    id: 2,
    headline: ["BEYOND", "THE", "PITCH"],
    accentWord: "PITCH",
    sub: "HERE WHERE YOU LEARN, BUILD AND COMPETE.",
    bgDesktop: "/images/slide2.jpg",
    bgMobile: "/images/resposide2.png",
    accent: "#2b7fff",
    decorImg: "/images/2.png",
    decorPos: "bottom-12 right-4",
    decorSize: "w-40 md:w-56",
  },
  {
    id: 3,
    headline: ["BEYOND", "THE", "LIMITS"],
    accentWord: "LIMITS",
    sub: "WHERE THE SCIENCE MEETS THE STARS",
    bgDesktop: "/images/slide3.jpg",
    bgMobile: "/images/resposide3.png",
    accent: "#4db8ff",
    decorImg: "/images/3.png",
    decorPos: "bottom-6 right-6",
    decorSize: "w-44 md:w-60",
  },
  {
    id: 4,
    headline: ["BEYOND", "THE", "STARS"],
    accentWord: "STARS",
    sub: "SPATIAL TECHNIQUES · INFINITE POSSIBILITIES",
    bgDesktop: "/images/slide4.jpg",
    bgMobile: "/images/resposide4.png",
    accent: "#60cfff",
    decorImg: "/images/1.png",
    decorPos: "bottom-10 right-10",
    decorSize: "w-52 md:w-72",
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

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const goTo = (i) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  const slide = slides[current];

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? "6%" : "-6%", opacity: 0 }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (dir) => ({
      x: dir > 0 ? "-6%" : "6%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    }),
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#04060f]">
      {/* Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="stars-layer" />
      </div>

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={slide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* BACKGROUND IMAGE (RESPONSIVE) */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${
                isMobile ? slide.bgMobile : slide.bgDesktop
              })`,
            }}
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 max-w-3xl">
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
              onClick={next}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.3 }}
              className="mt-8 flex items-center gap-3 cursor-pointer group w-fit"
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

          {/* DECOR */}
          {slide.decorImg && (
            <motion.img
              src={slide.decorImg}
              alt="decor"
              initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
              animate={{ opacity: 0.9, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={`absolute ${slide.decorPos} ${slide.decorSize} object-contain opacity-80 pointer-events-none select-none hidden md:block`}
              style={{
                filter: `drop-shadow(0 0 30px ${slide.accent}55)`,
              }}
            />
          )}
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