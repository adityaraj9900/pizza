import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import about1 from "../assets/images/about1.jpg";
import about2 from "../assets/images/about2.jpg";

const features = [
  { icon: "🌾", title: "Farm-Fresh Ingredients", desc: "Sourced daily from local farms across India" },
  { icon: "🔥", title: "Wood-Fired Ovens",       desc: "900°F bakes for the perfect char every time" },
  { icon: "⚡", title: "30-Min Guarantee",        desc: "Late? Your next order is 20% off. Promise." },
  { icon: "🌱", title: "100% Pure Veg Options",   desc: "FSSAI-certified vegan and gluten-free menus" },
];

const About = () => {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 900, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <section id="about" className="bg-[#0D0700] py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Images */}
        <div data-aos="fade-right" className="relative hidden lg:block">
          <img
            src={about1}
            alt="Our kitchen"
            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
          />
          <img
            src={about2}
            alt="Fresh ingredients"
            className="absolute -bottom-8 -right-8 w-52 h-52 object-cover rounded-2xl border-4 border-[#0D0700] shadow-xl"
          />
          {/* Experience badge */}
          <div className="absolute top-6 -left-6 bg-gradient-to-br from-flame-500 to-gold-500 rounded-2xl p-5 shadow-xl text-center">
            <p className="text-4xl font-black text-white font-display">15+</p>
            <p className="text-xs text-white/80 font-medium tracking-wide">Years of Craft</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div data-aos="fade-left" data-aos-delay="100">
            <p className="text-flame-500 font-bold tracking-widest text-xs uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-display font-black text-white text-5xl lg:text-6xl leading-tight">
              Born in India,{" "}
              <span className="bg-gradient-to-r from-flame-500 to-gold-500 bg-clip-text text-transparent">
                Loved Worldwide
              </span>
            </h2>
          </div>

          <p data-aos="fade-left" data-aos-delay="200" className="text-white/60 text-lg leading-relaxed font-body">
            PizzaRaj was born from one obsession: India deserves a pizza that honours its
            incredible culinary heritage. We take the finest Italian pizza tradition and
            infuse it with the bold, complex spice profiles that make Indian cooking the
            most loved cuisine on earth.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {features.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 hover:border-flame-500/30 transition-colors group"
              >
                <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </span>
                <div>
                  <p className="text-white font-bold text-sm">{title}</p>
                  <p className="text-white/50 text-xs mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-flame-500 to-gold-500 text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-flame-500/25"
            >
              Explore Our Menu →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
