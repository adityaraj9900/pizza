import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import toast from "react-hot-toast";

const infoCards = [
  {
    icon: <FaMapLocationDot size={24} />,
    title: "Visit Us",
    detail: "12, Juhu Beach Road, Mumbai — 400054",
    action: "Open Maps",
    color: "#E63312",
  },
  {
    icon: <MdEmail size={24} />,
    title: "Email Us",
    detail: "adityarajmth845417@gmail.com",
    action: "Send Mail",
    color: "#F5A623",
  },
  {
    icon: <FaPhone size={24} />,
    title: "Call Us",
    detail: "+91 77798 40590",
    action: "Call Now",
    color: "#E63312",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    AOS.init({ offset: 100, duration: 900, easing: "ease-out-cubic", once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all required fields");
      return;
    }
    toast.success("Message sent! We'll get back to you soon 🍕", { duration: 4000 });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#0A0500] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-flame-500 font-bold tracking-widest text-xs uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-display font-black text-white text-5xl lg:text-6xl">
            We'd Love to{" "}
            <span className="bg-gradient-to-r from-flame-500 to-gold-500 bg-clip-text text-transparent">
              Hear From You
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-14">
          {infoCards.map((card, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 120}
              className="bg-[#1A0F05] border border-white/[0.07] rounded-3xl p-8 flex flex-col items-center text-center gap-5 hover:border-flame-500/30 transition-colors group"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${card.color}, #F5A623)` }}
              >
                {card.icon}
              </div>
              <div>
                <p className="text-white font-bold text-lg font-display">{card.title}</p>
                <p className="text-white/50 text-sm mt-1 leading-relaxed">{card.detail}</p>
              </div>
              <button className="px-6 py-2.5 rounded-full border border-white/15 text-white text-sm font-semibold hover:bg-flame-500 hover:border-flame-500 transition-colors">
                {card.action}
              </button>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-2xl mx-auto bg-[#1A0F05] border border-white/[0.07] rounded-3xl p-8 lg:p-12"
        >
          <h3 className="font-display font-bold text-white text-2xl mb-8 text-center">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-white/60 text-xs font-semibold mb-2 uppercase tracking-wide">
                  Name *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="input-field w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 transition-all"
                />
              </div>
              <div>
                <label className="block text-white/60 text-xs font-semibold mb-2 uppercase tracking-wide">
                  Email *
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="input-field w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-white/60 text-xs font-semibold mb-2 uppercase tracking-wide">
                Phone
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 00000 00000"
                className="input-field w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 transition-all"
              />
            </div>
            <div>
              <label className="block text-white/60 text-xs font-semibold mb-2 uppercase tracking-wide">
                Message *
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="How can we help you?"
                className="input-field w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-flame-500 to-gold-500 text-white font-bold text-base hover:opacity-90 transition-opacity shadow-lg shadow-flame-500/25"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
