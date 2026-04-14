"use client";

import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const links = {
  Event: ["About", "Activities", "Timeline", "Register"],
  Club: ["Quanta Club", "Our Team", "Past Editions", "Partners"],
  Legal: ["Privacy Policy", "Terms of Use", "Code of Conduct"],
};

const socials = [
  { icon: FaInstagram, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaEnvelope, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#02030a] border-t border-white/5 px-6 md:px-12 pt-16 pb-8 overflow-hidden">
      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b9eff]/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full border border-[#3b9eff]/60 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#3b9eff]" />
              </div>
              <span className="font-black text-white tracking-widest text-sm uppercase">
                Quanta
              </span>
            </div>

            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
              Quanta Club is a science and technology student organization
              dedicated to pushing the boundaries of space and engineering.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={href + i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="social link"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#3b9eff]/40 hover:text-[#3b9eff] transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs tracking-[0.25em] text-white/50 uppercase mb-4 font-mono">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/35 hover:text-white/70 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-white/20 tracking-widest font-mono">
            © 2025 Quanta Club · Race to Space 4th Edition
          </p>
          <p className="text-xs text-white/15 tracking-widest font-mono">
            ALL SYSTEMS GO · T-MINUS COUNTING
          </p>
        </div>
      </div>
    </footer>
  );
}