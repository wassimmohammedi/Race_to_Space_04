"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Activities", href: "#activities" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-full border border-[#3b9eff]/60 flex items-center justify-center group-hover:border-[#3b9eff] transition-colors">
            <div className="w-2.5 h-2.5 rounded-full bg-[#3b9eff] group-hover:shadow-[0_0_8px_#3b9eff] transition-all" />
          </div>
          <span className="font-black text-white tracking-widest text-sm uppercase">Quanta</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs tracking-[0.2em] text-white/50 uppercase hover:text-white transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#register"
            className="ml-4 px-5 py-2 text-xs tracking-[0.15em] uppercase font-semibold text-white bg-[#3b9eff]/20 border border-[#3b9eff]/40 rounded-full hover:bg-[#3b9eff]/30 hover:border-[#3b9eff]/70 transition-all duration-300"
          >
            Register
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-b border-white/10"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-xs tracking-[0.2em] text-white/60 uppercase hover:text-white transition-colors border-b border-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#register"
                onClick={() => setOpen(false)}
                className="mt-3 py-3 text-center text-xs tracking-[0.15em] uppercase font-semibold text-white bg-[#3b9eff]/20 border border-[#3b9eff]/40 rounded-full"
              >
                Register
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
