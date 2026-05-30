import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { testimonials } from "../Components/export";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";

const Stars = ({ n }) => (
  <div className="flex gap-1">
    {Array.from({ length: n }).map((_, i) => (
      <FaStar key={i} className="text-gold-500" size={14} />
    ))}
  </div>
);

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 900, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <section className="bg-[#0D0700] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-flame-500 font-bold tracking-widest text-xs uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-display font-black text-white text-5xl lg:text-6xl">
            What Our{" "}
            <span className="bg-gradient-to-r from-flame-500 to-gold-500 bg-clip-text text-transparent">
              Fans Say
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="testimonial-card relative bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 space-y-5 hover:border-flame-500/25 transition-colors"
            >
              <FaQuoteLeft className="text-flame-500/40 text-3xl" />

              <p className="text-white/70 text-sm leading-relaxed font-body italic">
                "{t.text}"
              </p>

              <Stars n={t.rating} />

              <div className="flex items-center gap-4 pt-2 border-t border-white/[0.06]">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, #F5A623)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-14 text-center"
        >
          <p className="text-white/40 text-sm">
            Join{" "}
            <span className="text-flame-500 font-bold">50,000+</span> happy
            customers across India
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
