"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import { ArrowRight, X } from "lucide-react";
import RegistrationForm from "../components/RegistrationForm";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  
  // State to control the form modal
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <SectionWrapper
      id="register"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#020510] overflow-hidden"
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-[#3b9eff]/8 blur-3xl" />
      </div>

      {/* Horizontal lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px bg-white"
            style={{ top: `${12 + i * 12}%` }}
          />
        ))}
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.35em] text-[#3b9eff] uppercase mb-6 font-mono"
        >
          / Ready for Liftoff?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-none tracking-tight mb-6"
        >
          JOIN THE{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b9eff] via-[#5ce0ff] to-[#9df]">
            MISSION
          </span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-16 h-0.5 bg-[#3b9eff] mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-12"
        >
          Registration is open. Seats are limited. Don&apos;t miss your chance to be
          part of the 4th edition of Race to Space by Quanta Club.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => setIsFormOpen(true)}
            className="group flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase font-bold text-white bg-[#3b9eff] rounded-full hover:bg-[#5eafff] transition-all duration-300 shadow-[0_0_30px_#3b9eff55] hover:shadow-[0_0_50px_#3b9eff88]"
          >
            Register Now
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <a
            href="#about"
            className="flex items-center gap-2 px-8 py-4 text-sm tracking-widest uppercase font-bold text-white/60 border border-white/20 rounded-full hover:border-white/40 hover:text-white transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>

        {/* Deadline note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="mt-8 text-xs text-white/25 tracking-widest uppercase font-mono"
        >
          Registration closes · April 30, 2025
        </motion.p>
      </div>

      {/* Floating rocket */}
      <img
        src="/images/2.png"
        alt=""
        className="absolute right-8 top-1/2 -translate-y-1/2 w-28 md:w-40 opacity-15 pointer-events-none select-none"
        style={{
          filter: "drop-shadow(0 0 20px #3b9eff)",
          animation: "floatY 7s ease-in-out infinite",
        }}
      />

      {/* MODAL OVERLAY */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#020510]/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl no-scrollbar shadow-[0_0_50px_#3b9eff33]"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <X size={20} />
              </button>

              {/* Render the Form inside the Modal */}
              <RegistrationForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(-50%) rotate(-5deg); }
          50% { transform: translateY(calc(-50% - 16px)) rotate(5deg); }
        }
        /* Hide scrollbar for the modal so it looks cleaner */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </SectionWrapper>
  );
}