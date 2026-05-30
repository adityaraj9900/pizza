import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { pizzas, menuCategories } from "../Components/export";
import { useCart } from "../CartContext";
import toast from "react-hot-toast";
import { FaStar, FaFire } from "react-icons/fa6";

const PizzaCard = ({ item }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(item);
    toast.success(`${item.title} added to cart!`, {
      icon: "🍕",
      style: { background: "#1A0F05", color: "#fff", border: "1px solid rgba(230,51,18,0.3)" },
    });
  };

  return (
    <div className="pizza-card bg-[#1A0F05] border border-white/[0.06] rounded-3xl overflow-hidden hover:border-flame-500/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-flame-500/10">
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={item.image}
          alt={item.title}
          className="pizza-img w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F05]/80 to-transparent" />
        {/* Badge */}
        <span className={`badge absolute top-3 left-3 ${item.badgeColor}`}>
          {item.badge}
        </span>
        {/* Hot indicator */}
        {item.isHot && (
          <span className="absolute top-3 right-3 flex items-center gap-1 text-flame-400 text-xs font-bold">
            <FaFire className="animate-pulse" /> HOT
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-white font-bold text-lg font-display leading-snug">
            {item.title}
          </h3>
          <span className="text-flame-500 font-black text-lg whitespace-nowrap">
            {item.price}
          </span>
        </div>

        <p className="text-white/50 text-sm leading-relaxed line-clamp-2">{item.description}</p>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5 text-gold-500">
            <FaStar size={13} />
            <span className="text-white/70 text-sm font-semibold">{item.rating}</span>
            <span className="text-white/30 text-xs">({item.reviews.toLocaleString()})</span>
          </div>
          <button
            onClick={handleAdd}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-flame-500 to-gold-500 text-white text-sm font-bold hover:opacity-90 transition-opacity shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const [active, setActive] = useState("all");

  useEffect(() => {
    AOS.init({ offset: 100, duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  const filtered =
    active === "all" ? pizzas : pizzas.filter((p) => p.category === active);

  return (
    <section id="menu" className="bg-[#080400] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 space-y-4" data-aos="fade-up">
          <p className="text-flame-500 font-bold tracking-widest text-xs uppercase">
            Our Signature Menu
          </p>
          <h2 className="font-display font-black text-white text-5xl lg:text-6xl">
            Pick Your{" "}
            <span className="bg-gradient-to-r from-flame-500 to-gold-500 bg-clip-text text-transparent">
              Craving
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto font-body">
            Every pizza crafted fresh, baked in our wood-fired ovens, and bursting
            with flavors that only PizzaRaj can deliver.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {menuCategories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                active === key
                  ? "bg-gradient-to-r from-flame-500 to-gold-500 text-white shadow-lg shadow-flame-500/30"
                  : "bg-white/[0.05] text-white/60 hover:bg-white/10 hover:text-white border border-white/[0.08]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {filtered.map((item) => (
            <PizzaCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
