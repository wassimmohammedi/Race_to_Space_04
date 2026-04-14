"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../components/SectionWrapper";

const days = [
  {
    day: "DAY 01",
    date: "May 10, 2025",
    color: "#3b9eff",
    events: [
      { time: "09:00 - 09:30", title: "Check In", desc: "Registration and welcome." },
      { time: "09:30 - 10:45", title: "First Conference", desc: "Opening keynote and main session." },
      { time: "11:00 - 12:00", title: "Second Conference", desc: "Technical insights and industry updates." },
      { time: "12:00 - 13:30", title: "Lunch Break", desc: "Networking and refreshments." },
      { time: "13:30 - 15:00", title: "Panel Discussion", desc: "Expert panel Q&A session." },
      { time: "15:00 - 16:30", title: "Flash Talk", desc: "Quick presentations and ideas showcase." },
    ],
  },
  {
    day: "DAY 02",
    date: "May 11, 2025",
    color: "#5ce0ff",
    events: [
      { time: "09:30 - 10:45", title: "First Workshop", desc: "Hands-on technical workshop session." },
      { time: "11:00 - 12:00", title: "Second Workshop", desc: "Advanced techniques and best practices." },
      { time: "12:00 - 13:30", title: "Lunch Break", desc: "Networking and refreshments." },
      { time: "13:30 - 17:00", title: "Competition + Closing", desc: "Final competition rounds and closing ceremony." },
    ],
  },
];

export default function TimelineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="timeline"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#04060f] overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#7b6fff]/6 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] text-[#3b9eff] uppercase mb-4 font-mono">
            / Mission Schedule
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight tracking-tight">
            THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b6fff] to-[#3b9eff]">
              PROGRAM
            </span>
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {days.map((day, di) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: di * 0.15, duration: 0.6 }}
              className="relative"
            >
              {/* Day header */}
              <div className="mb-6">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-widest"
                  style={{ backgroundColor: `${day.color}18`, border: `1px solid ${day.color}30`, color: day.color }}
                >
                  {day.day}
                </div>
                <p className="mt-2 text-white/30 text-xs tracking-widest">{day.date}</p>
              </div>

              {/* Events */}
              <div className="relative border-l border-white/10 pl-5 flex flex-col gap-6">
                {day.events.map((ev, ei) => (
                  <motion.div
                    key={ev.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: di * 0.15 + ei * 0.08, duration: 0.5 }}
                    className="relative group"
                  >
                    {/* Dot */}
                    <div
                      className="absolute -left-[21px] top-1 w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150"
                      style={{ backgroundColor: day.color, boxShadow: `0 0 0 3px ${day.color}20` }}
                    />
                    <span className="text-[10px] font-mono tracking-widest mb-1 block" style={{ color: day.color }}>
                      {ev.time}
                    </span>
                    <h4 className="text-white text-sm font-bold mb-1">{ev.title}</h4>
                    <p className="text-white/35 text-xs leading-relaxed">{ev.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decor image */}
      <img
        src="/images/1.png"
        alt=""
        className="absolute left-4 bottom-8 w-24 md:w-32 opacity-8 pointer-events-none select-none"
        style={{ filter: "drop-shadow(0 0 12px #7b6fff)" }}
      />
    </SectionWrapper>
  );
}