import React, { useEffect } from "react";
import banner4 from "../assets/images/banner4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []); 

  return (
    <section
      id="hero"
      className="w-full lg:px-20 px-10 lg:py-20 py-10 h-[600px] bg-cover bg-center flex flex-col justify-center items-start gap-8"
      style={{ backgroundImage: `url(${banner4})` }}
    >
    <h1 data-aos="zoom-in" className='text-6x1 text-white font-bold'>Life is a combination of Pizza & Magic</h1>
    <p data-aos="zoom-in" className='text-x1 text-white font-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, quisquam exercitationem. Beatae, mollitia sequi temporibus architecto ducimus laudantium corrupti dicta, dolores similique a consectetur voluptate inventore velit ut repellendus sint.</p>
    <button data-aos="flip-up" className='bg-orange-500 text-white px-8 py-4 rounded-full fontsemibold hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black'>ORDER NOW</button>
    </section>
  );
};

export default Hero;
