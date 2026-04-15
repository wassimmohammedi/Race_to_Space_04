"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../components/SectionWrapper";

const images = [
  { src: "/images/rts1.jpg", alt: "Race to Space Event", className: "col-span-1 row-span-2 min-h-[250px] md:min-h-[340px]" },
  { src: "/images/rts2.jpg", alt: "Quanta Club Conference", className: "col-span-1 h-32 md:h-40" },
  { src: "/images/rts3.jpg", alt: "Hands-on Workshop", className: "col-span-1 h-32 md:h-40" },
  { src: "/images/rts4.jpg", alt: "Student Project", className: "col-span-1 h-32 md:h-40" },
  { src: "/images/rts5.jpg", alt: "Competition Winners", className: "col-span-1 h-32 md:h-40" },
];

export default function AboutSection() {
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-60px" });

  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: "-60px" });

  return (
    <SectionWrapper
      id="about"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#04060f] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#3b9eff]/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Left: Inspiring Text & Mission */}
        <div ref={contentRef}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-[#3b9eff] uppercase mb-4 font-mono"
          >
            / About The Mission
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight uppercase mb-6"
          >
            EXPLORE. BUILD. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b9eff] to-[#9df]">
              INNOVATE.
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={contentInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-16 h-0.5 bg-[#3b9eff] mb-8 origin-left"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
              <strong className="text-white font-semibold">Race to Space 4</strong> is a special edition dedicated entirely to the theme of <span className="text-[#3b9eff]">Space Techniques</span>. Organized by the <strong>Quanta Club</strong> at the University of Algiers 1, this immersive two-day event bridges the gap between academic theory and real-world technological innovation.
            </p>
            <p className="text-white/50 text-sm md:text-base leading-relaxed">
              Our mission is to simplify complex scientific knowledge and showcase real-life space applications. Through expert conferences, interactive flash talks, hands-on workshops, and a thrilling final competition, we are uniting science enthusiasts to push the boundaries of what is possible.
            </p>
            <p className="text-white/80 text-sm font-mono tracking-wide uppercase mt-4">
              Your journey to the stars begins here.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#register"
              className="px-8 py-4 text-xs tracking-widest uppercase font-bold text-white bg-[#3b9eff] rounded-full hover:bg-[#5eafff] transition-all duration-300 shadow-[0_0_20px_#3b9eff44] hover:shadow-[0_0_30px_#3b9eff77]"
            >
              Join The Mission
            </a>
            <a
              href="#timeline"
              className="px-8 py-4 text-xs tracking-widest uppercase font-bold text-white/60 border border-white/20 rounded-full hover:border-white/40 hover:text-white transition-all duration-300 bg-white/[0.02] backdrop-blur-sm"
            >
              See Program
            </a>
          </motion.div>
        </div>

        {/* Right: Dynamic Image Gallery (Replaces Stats) */}
        <div ref={galleryRef} className="grid grid-cols-2 gap-3 md:gap-4 w-full h-full">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={galleryInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6, type: "spring", bounce: 0.3 }}
              className={`relative rounded-2xl overflow-hidden group border border-white/10 bg-white/[0.02] ${img.className}`}
            >
              {/* Fallback color while image loads */}
              <div className="absolute inset-0 bg-[#3b9eff]/5" />
              
              {/* Image with hover zoom effect */}
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Blue tint overlay on hover */}
              <div className="absolute inset-0 bg-[#3b9eff]/0 group-hover:bg-[#3b9eff]/20 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}