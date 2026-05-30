import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { faqs } from "../Components/export";
import faqimg1 from "../assets/images/faq1.jpg";
import faqimg2 from "../assets/images/faq2.jpg";
import faqimg3 from "../assets/images/faq3.jpg";
import faqimg4 from "../assets/images/faq4.jpg";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqImages = [faqimg1, faqimg2, faqimg3, faqimg4];

const FaqItem = ({ q, a, isOpen, toggle }) => (
  <div
    className={`border rounded-2xl overflow-hidden transition-colors ${
      isOpen ? "border-flame-500/40 bg-white/[0.05]" : "border-white/[0.07] bg-transparent"
    }`}
  >
    <button
      onClick={toggle}
      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
    >
      <span className="text-white font-semibold text-sm leading-snug font-body">{q}</span>
      <span
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white transition-colors ${
          isOpen ? "bg-flame-500" : "bg-white/10"
        }`}
      >
        {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
      </span>
    </button>
    <div className={`faq-answer px-6 ${isOpen ? "open pb-5" : ""}`}>
      <p className="text-white/55 text-sm leading-relaxed font-body">{a}</p>
    </div>
  </div>
);

const Faq = () => {
  const [openIdx, setOpenIdx] = useState(0);

  useEffect(() => {
    AOS.init({ offset: 100, duration: 900, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <section id="faq" className="bg-[#080400] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div className="space-y-6" data-aos="fade-right">
          <div>
            <p className="text-flame-500 font-bold tracking-widest text-xs uppercase mb-3">
              FAQ
            </p>
            <h2 className="font-display font-black text-white text-5xl lg:text-6xl leading-tight">
              Got{" "}
              <span className="bg-gradient-to-r from-flame-500 to-gold-500 bg-clip-text text-transparent">
                Questions?
              </span>
            </h2>
          </div>
          <p className="text-white/50 text-base leading-relaxed">
            Everything you need to know about PizzaRaj — from our craft to delivery.
          </p>

          <div className="space-y-3">
            {faqs.map((item, i) => (
              <FaqItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={openIdx === i}
                toggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </div>
        </div>

        {/* Right: image grid */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="grid grid-cols-2 gap-4 hidden lg:grid"
        >
          {faqImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`pizza ${i + 1}`}
              className={`w-full rounded-2xl object-cover shadow-xl ${
                i % 2 === 0 ? "h-52 mt-4" : "h-52"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
