import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { FaSun, FaMoon, FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";
import { useDarkMode } from "../DarkModeContext";
import { useCart } from "../CartContext";

const navItems = [
  { label: "Home",        to: "hero" },
  { label: "About",       to: "about" },
  { label: "Menu",        to: "menu" },
  { label: "Offers",      to: "offers" },
  { label: "FAQ",         to: "faq" },
  { label: "Contact",     to: "contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { count, setIsOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "header-glass" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="hero" smooth spy offset={-80} className="cursor-pointer flex-shrink-0">
            <span className="font-display text-3xl font-black tracking-tight">
              <span className="text-white">Pizza</span>
              <span className="text-flame-gradient bg-gradient-to-r from-flame-500 to-gold-500 bg-clip-text text-transparent">
                Raj
              </span>
            </span>
            <p className="text-[10px] font-body font-medium text-white/40 tracking-widest -mt-1">
              THE MAHARAJA OF PIZZA
            </p>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                spy
                smooth
                offset={-80}
                className="nav-link text-sm font-semibold text-white/70 hover:text-white cursor-pointer transition-colors font-body tracking-wide"
                activeClass="!text-flame-500"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Toggle theme"
            >
              {darkMode ? <FaSun size={17} /> : <FaMoon size={17} />}
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Cart"
            >
              <FaShoppingBag size={19} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-flame-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            <Link to="menu" smooth spy offset={-80}>
              <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-flame-500 to-gold-500 text-white text-sm font-bold hover:opacity-90 transition-opacity shadow-lg cursor-pointer">
                Order Now
              </button>
            </Link>
          </div>

          {/* Mobile Icons */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 text-white/70 hover:text-white"
            >
              <FaShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-flame-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="p-2 text-white/70 hover:text-white"
              aria-label="Menu"
            >
              {menuOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0500]/97 flex flex-col items-center justify-center gap-8 lg:hidden">
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              spy
              smooth
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-display font-bold text-white hover:text-flame-500 cursor-pointer transition-colors"
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => { toggleDarkMode(); setMenuOpen(false); }}
            className="mt-4 flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
          >
            {darkMode ? <FaSun size={15} /> : <FaMoon size={15} />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
