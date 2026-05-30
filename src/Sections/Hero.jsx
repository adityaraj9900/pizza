import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import banner1 from "../assets/images/banner1.jpg";
import delicious from "../assets/images/delicious.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  useEffect(() => {
    AOS.init({ offset: 120, duration: 900, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0500]"
    >
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner1})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0500] via-[#0A0500]/90 to-[#0A0500]/40" />

      {/* Glow blobs */}
      <div className="glow-blob w-72 h-72 bg-flame-500/30 top-20 left-10" />
      <div className="glow-blob w-96 h-96 bg-gold-500/10 bottom-10 right-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 items-center pt-28 pb-16">
        {/* Left content */}
        <div className="space-y-7">
          <div data-aos="fade-right" data-aos-delay="100">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-flame-500/30 text-flame-400 text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
              🔥 India's #1 Craft Pizza Brand
            </span>
          </div>

          <h1
            data-aos="fade-right"
            data-aos-delay="200"
            className="font-display font-black leading-none"
          >
            <span className="text-white text-6xl lg:text-8xl block">The</span>
            <span className="text-6xl lg:text-8xl block bg-gradient-to-r from-flame-500 to-gold-500 bg-clip-text text-transparent">
              Maharaja
            </span>
            <span className="text-white text-6xl lg:text-8xl block">of Pizza</span>
          </h1>

          <p
            data-aos="fade-right"
            data-aos-delay="350"
            className="text-white/60 text-lg lg:text-xl font-body max-w-md leading-relaxed"
          >
            Bold Indian flavors. World-class craft. Every pizza baked fresh in
            our signature wood-fired ovens and at your door in 30 minutes.
          </p>

          <div
            data-aos="fade-right"
            data-aos-delay="450"
            className="flex flex-wrap gap-4"
          >
            <Link to="menu" smooth spy offset={-80}>
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-flame-500 to-gold-500 text-white font-bold text-base hover:opacity-90 transition-opacity shadow-lg shadow-flame-500/30 cursor-pointer">
                Order Now →
              </button>
            </Link>
            <Link to="about" smooth spy offset={-80}>
              <button className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-sm">
                Our Story
              </button>
            </Link>
          </div>

          {/* Trust badges */}
          <div
            data-aos="fade-up"
            data-aos-delay="550"
            className="flex flex-wrap items-center gap-6 pt-2"
          >
            {[
              { icon: "⚡", text: "30 Min Delivery" },
              { icon: "🚚", text: "Free on ₹299+" },
              { icon: "⭐", text: "4.9★ Rated" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/50 text-sm font-medium">
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: floating pizza */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative">
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-flame-500/30 animate-spin-slow" />
            {/* Outer glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-flame-500/20 to-gold-500/10 blur-2xl" />
            {/* Pizza image */}
            <div className="animate-float relative z-10">
              <img
                src={delicious}
                alt="Signature Pizza"
                className="w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full object-cover border-4 border-flame-500/40 shadow-2xl shadow-flame-500/30"
              />
            </div>
            {/* Floating badge — top right */}
            <div className="animate-float-r absolute -top-4 -right-4 bg-[#1A0F05] border border-flame-500/30 rounded-2xl px-4 py-3 text-center shadow-xl z-20">
              <p className="text-2xl font-black text-white">4.9★</p>
              <p className="text-[10px] text-white/50 font-medium">50K+ Reviews</p>
            </div>
            {/* Floating badge — bottom left */}
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-flame-500 to-gold-500 rounded-2xl px-4 py-3 text-center shadow-xl z-20">
              <p className="text-sm font-black text-white">30 MIN</p>
              <p className="text-[10px] text-white/80">Guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
