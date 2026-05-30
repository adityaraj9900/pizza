import React from "react";
import { Link } from "react-scroll";
import { useDarkMode } from "../DarkModeContext";
import {
  FaFacebookF, FaInstagram, FaYoutube, FaXTwitter,
  FaSun, FaMoon, FaArrowUp,
} from "react-icons/fa6";

const quickLinks = [
  { label: "Home",    to: "hero" },
  { label: "About",   to: "about" },
  { label: "Menu",    to: "menu" },
  { label: "Offers",  to: "offers" },
  { label: "FAQ",     to: "faq" },
  { label: "Contact", to: "contact" },
];

const socials = [
  { Icon: FaFacebookF, href: "#" },
  { Icon: FaInstagram, href: "#" },
  { Icon: FaYoutube,   href: "#" },
  { Icon: FaXTwitter,  href: "#" },
];

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <footer className="bg-[#050200] border-t border-white/[0.06] pt-20 pb-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

            {/* Brand */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="font-display font-black text-4xl">
                  <span className="text-white">Pizza</span>
                  <span className="bg-gradient-to-r from-flame-500 to-gold-500 bg-clip-text text-transparent">
                    Raj
                  </span>
                </h2>
                <p className="text-white/30 text-xs tracking-widest mt-1">THE MAHARAJA OF PIZZA</p>
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                India's most loved craft pizza brand — blending authentic Indian flavors
                with world-class pizza artistry. Every bite tells a story.
              </p>
              <div className="flex gap-3">
                {socials.map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/50 hover:bg-flame-500 hover:border-flame-500 hover:text-white transition-all duration-300"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      smooth
                      spy
                      offset={-80}
                      className="text-white/50 hover:text-flame-500 text-sm cursor-pointer transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Newsletter */}
            <div className="space-y-8">
              <div>
                <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6">
                  Contact
                </h4>
                <ul className="space-y-2 text-white/50 text-sm">
                  <li>+91 77798 40590</li>
                  <li>adityarajmth845417@gmail.com</li>
                  <li>Mumbai · Delhi · Bangalore</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
                  Newsletter
                </h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 bg-white/[0.04] border border-white/10 border-r-0 rounded-l-xl px-4 py-2.5 text-white text-xs placeholder:text-white/25 focus:outline-none focus:border-flame-500"
                  />
                  <button className="px-4 py-2.5 bg-flame-500 hover:bg-flame-600 text-white text-xs font-bold rounded-r-xl transition-colors whitespace-nowrap">
                    Join
                  </button>
                </div>
                <p className="text-white/25 text-xs mt-2">Get exclusive deals in your inbox.</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
            <p>© 2026 PizzaRaj. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:text-white/60 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white/60 cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating buttons */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-[#1A0F05] border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-flame-500/50 transition-all shadow-xl"
        aria-label="Toggle theme"
      >
        {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
      </button>

      <Link to="hero" smooth spy offset={-80}>
        <button className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-flame-500 to-gold-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-xl animate-glow-pulse cursor-pointer">
          <FaArrowUp size={18} />
        </button>
      </Link>
    </>
  );
};

export default Footer;
