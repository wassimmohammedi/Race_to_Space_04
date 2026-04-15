"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../components/SectionWrapper";
import { Rocket, Satellite, Cpu, Trophy, FlaskConical, Radio } from "lucide-react";

const activities = [
  {
    icon: Rocket,
    title: "Launch Simulation",
    desc: "Design, build, and simulate rocket launches with real engineering constraints and scoring.",
    color: "#3b9eff",
  },
  {
    icon: Satellite,
    title: "Satellite Hacking",
    desc: "Intercept, analyze, and transmit signals in a simulated satellite communication challenge.",
    color: "#5ce0ff",
  },
  {
    icon: Cpu,
    title: "Tech Pitch",
    desc: "Present your space-tech startup idea to a panel of industry experts and investors.",
    color: "#7b6fff",
  },
  {
    icon: Trophy,
    title: "Science Olympiad",
    desc: "Compete in rapid-fire space science trivia and theoretical physics problem sets.",
    color: "#ff7b3b",
  },
  {
    icon: FlaskConical,
    title: "Astro Lab",
    desc: "Hands-on experiments with real data from space agencies. Analyze, hypothesize, discover.",
    color: "#3bffb8",
  },
  {
    icon: Radio,
    title: "Signal Decoding",
    desc: "Can you decode the encrypted transmission? Solve the inter-planetary cipher challenge.",
    color: "#ff3b8e",
  },
];

export default function ActivitiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper
      id="activities"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#020510] overflow-hidden"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,158,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,158,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#3b9eff] uppercase mb-4 font-mono">
            / What You&apos;ll Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight tracking-tight">
              MISSION{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b9eff] to-[#5ce0ff]">
                CONTROL
              </span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">
            Six distinct challenges. One mission. Prove you have what it takes.
          </p>
        </div>

        {/* Cards grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.55, ease: "easeOut" }}
                className="group relative p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-white/20 transition-all duration-400 cursor-default overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${a.color}12 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${a.color}18`, border: `1px solid ${a.color}30` }}
                >
                  <Icon size={18} style={{ color: a.color }} />
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-base mb-2 tracking-wide">{a.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{a.desc}</p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-6 h-px w-0 group-hover:w-16 transition-all duration-400"
                  style={{ backgroundColor: a.color }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Floating decor */}
      <img
        src="/images/1.png"
        alt=""
        className="absolute top-12 right-4 w-24 md:w-36 opacity-10 pointer-events-none select-none animate-float"
        style={{ filter: "drop-shadow(0 0 16px #3b9eff)" }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </SectionWrapper>
  );
}
