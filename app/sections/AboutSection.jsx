"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../components/SectionWrapper";

const stats = [
  { value: "4th", label: "Edition" },
  { value: "500+", label: "Participants" },
  { value: "30+", label: "Projects" },
  { value: "12", label: "Categories" },
];

export default function AboutSection() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <SectionWrapper
      id="about"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#04060f] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#3b9eff]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <p className="text-xs tracking-[0.3em] text-[#3b9eff] uppercase mb-4 font-mono">
            / About the Event
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight uppercase mb-6">
            RACE TO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b9eff] to-[#9df]">
              SPACE
            </span>
          </h2>
          <div className="w-12 h-0.5 bg-[#3b9eff] mb-8" />
          <p className="text-white/50 text-sm md:text-base leading-relaxed mb-4">
          RACE TO SPACE 4” is an astronomy and astrophysics event in its fourth edition,
          bringing toghether science enthusiasts through experts talks,Flash Talks, and 
          interactive experionces. Under the theme”Spatial thechniques: Tools for exploring
           the universe”
          </p>
          <p className="text-white/40 text-sm leading-relaxed">
          the event highlights how modern thecnologies and AI are advancing 
           space research , alongside competitions, a planetaruim,rocketry, and hands-on activities.
            From robotics challenges to pitch competitions, satellite hacking to
            space science presentations — this is where passion meets precision,
            and ideas become breakthroughs.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#register"
              className="px-6 py-3 text-xs tracking-widest uppercase font-bold text-white bg-[#3b9eff] rounded-full hover:bg-[#5eafff] transition-all duration-300 shadow-[0_0_20px_#3b9eff44]"
            >
              Join Now
            </a>
            <a
              href="#timeline"
              className="px-6 py-3 text-xs tracking-widest uppercase font-bold text-white/60 border border-white/20 rounded-full hover:border-white/40 hover:text-white transition-all duration-300"
            >
              See Program
            </a>
          </div>
        </div>

        {/* Right: Stats grid */}
        <div ref={statsRef} className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-[#3b9eff]/30 hover:bg-white/[0.05] transition-all duration-400 group"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-br from-[#3b9eff]/5 to-transparent pointer-events-none" />
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-[#3b9eff]">
                {s.value}
              </div>
              <div className="mt-1 text-xs tracking-widest text-white/40 uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating decor image */}
      <img
        src="/images/2.png"
        alt=""
        className="absolute bottom-0 right-0 w-32 md:w-48 opacity-10 pointer-events-none select-none"
        style={{ filter: "drop-shadow(0 0 20px #3b9eff)" }}
      />
    </SectionWrapper>
  );
}
