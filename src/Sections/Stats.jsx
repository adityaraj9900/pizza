import React, { useEffect, useRef, useState } from "react";
import { stats } from "../Components/export";

const Counter = ({ target }) => {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const isSpecial = target.includes("★") || target.includes("+");
          if (isSpecial) {
            setDisplay(target);
            observer.disconnect();
            return;
          }
          const num = parseInt(target, 10);
          let current = 0;
          const step = Math.ceil(num / 60);
          const timer = setInterval(() => {
            current += step;
            if (current >= num) { setDisplay(target); clearInterval(timer); }
            else setDisplay(current.toString());
          }, 25);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{display}</span>;
};

const Stats = () => (
  <section className="relative bg-gradient-to-r from-flame-500 to-gold-500 py-16 overflow-hidden">
    {/* Subtle pattern overlay */}
    <div className="absolute inset-0 opacity-10"
      style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }}
    />
    <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map(({ value, label, icon }) => (
        <div key={label} className="flex flex-col items-center text-center gap-2">
          <span className="text-4xl">{icon}</span>
          <p className="text-4xl lg:text-5xl font-display font-black text-white">
            <Counter target={value} />
          </p>
          <p className="text-white/80 font-body font-medium text-sm tracking-wide uppercase">
            {label}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
