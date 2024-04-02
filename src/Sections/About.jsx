import React, { useEffect } from 'react';
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';
import icon4 from '../assets/images/icon4.png';
import about1 from '../assets/images/about1.jpg';
import { useDarkMode } from '../DarkModeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <>
      <section
        id='about'
        className={`${darkMode ? 'dark bg-black' : 'light bg-white'} w-full lg:px-20 px-10 lg:py-20 py-10 h-fit grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10`}
      >
    {/* <div data-aos="zoom-in" data-aos-delay="200" className='border-[4px] border-orange-600 dark:border-orange-400 p-14 flex flex-col justify-center items-ccenter gap-6 rounded-x1 hover:bg-orange-100 cursor-pointer'>
    <img src={icon1} alt="" className='w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer' />
    <h1 >ABOUT US</h1>
    </div> */}
    <div data-aos="zoom-in" data-aos-delay="200" className='border-[4px] border-orange-600 dark:border-orange-400 p-14 flex flex-col justify-center items-center gap-6 rounded-x1 hover:bg-orange-100 cursor-pointer'>
    <img src={icon1} alt="" className='w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer' />
    <h1 >ABOUT US</h1>
    </div>
    <div data-aos="zoom-in" data-aos-delay="200" className='border-[4px] border-orange-600 dark:border-orange-400 p-14 flex flex-col justify-center items-center gap-6 rounded-x1 hover:bg-orange-100 cursor-pointer'>
    <img src={icon2} alt="" className='w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer' />
    <h1 >ORGANIC</h1>
    </div>
    <div data-aos="zoom-in" data-aos-delay="200" className='border-[4px] border-orange-600 dark:border-orange-400 p-14 flex flex-col justify-center items-center gap-6 rounded-x1 hover:bg-orange-100 cursor-pointer'>
    <img src={icon3} alt="" className='w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer' />
    <h1 >PIZZA</h1>
    </div>
    <div data-aos="zoom-in" data-aos-delay="200" className='border-[4px] border-orange-600 dark:border-orange-400 p-14 flex flex-col justify-center items-center gap-6 rounded-x1 hover:bg-orange-100 cursor-pointer'>
    <img src={icon4} alt="" className='w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer' />
    <h1 >PASTA</h1>
    </div>
      </section>
      <section className={`${darkMode ? 'dark bg-black' : 'light bg-white'} w-full lg:px-20 px-10 lg:py-20 py-10 h-fit grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
        <div>
            <img data-aos="zoom-in" src={about1} alt="about image" className='lg:w-[800px] lg:h-[600px] rounded-x1' />
        </div>
        <div className='flex flex-col justify-center items-center gap-8'>
        <h1 data-aos="zoom-in" className='text-2x1 text-black dark:text-white font-semibold text-center'>WELCOME TO</h1>
        <h1 data-aos="zoom-in" className='text-6x1 text-black dark:text-white font-bold text-center'>Pizzazz pies</h1>
        <p data-aos="zoom-in" className='text-x1 text-slate-800 dark:text-slate-100 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo aperiam nemo, vero alias nesciunt! Quas dolor autem tempore amet.</p>
        <button data-aos="flip-up" className='bg-orange-500 text-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover-text-black'>ORDER NOW</button>
        </div>
      </section>
    </>
  );
};

export default About;
