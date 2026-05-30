import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";

const deals = [
  {
    image: banner2,
    tag: "🌱 VEG SPECIAL",
    tagColor: "bg-green-600",
    headline: "Buy 2, Get 1 Free",
    sub: "On all Veg pizzas every Tuesday & Wednesday. No code needed.",
    cta: "Grab the Deal",
    gradient: "from-green-900/80 to-[#0D0700]/90",
  },
  {
    image: banner3,
    tag: "👨‍👩‍👧‍👦 FAMILY FEAST",
    tagColor: "bg-flame-500",
    headline: "4 Pizzas + 2 Drinks",
    sub: "Feed the whole family for just ₹999. Available 7 days a week.",
    cta: "Order Feast Pack",
    gradient: "from-flame-900/80 to-[#0D0700]/90",
  },
];

const Offers = () => {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 900, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <section id="offers" className="bg-[#0A0500] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-flame-500 font-bold tracking-widest text-xs uppercase mb-3">
            Hot Deals
          </p>
          <h2 className="font-display font-black text-white text-5xl lg:text-6xl">
            Today's{" "}
            <span className="bg-gradient-to-r from-flame-500 to-gold-500 bg-clip-text text-transparent">
              Offers
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {deals.map((deal, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
              className="relative rounded-3xl overflow-hidden min-h-[340px] flex items-end group cursor-pointer"
            >
              {/* BG image */}
              <img
                src={deal.image}
                alt={deal.headline}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${deal.gradient}`} />

              {/* Content */}
              <div className="relative z-10 p-8 w-full space-y-3">
                <span className={`badge text-white ${deal.tagColor}`}>{deal.tag}</span>
                <h3 className="font-display font-black text-white text-4xl leading-tight">
                  {deal.headline}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-sm">{deal.sub}</p>
                <button className="mt-2 px-7 py-3 rounded-full bg-gradient-to-r from-flame-500 to-gold-500 text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg">
                  {deal.cta} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
