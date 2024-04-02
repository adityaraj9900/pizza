import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDarkMode } from '../DarkModeContext'
import { pizza } from '../Components/export'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TopRated = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
    ]
  };

  return (
    <section id='pizza' className={`${darkMode ? 'dark bg-black' : 'light bg-white'} h-fit w-full lg:px-20 px-3 lg:py-20 py-10 flezx flex-col justify-center items-center gap-6`}>
    <h1 data-aos="zoom-in" className='text-6x1 text-black dark:text-white font-bold text-center'>Top Rated</h1>
    <p data-aos="zoom-in" className='text-x1 text-black dark:text-slate-100 text-center'>Stop by and find out what all the buzz is about, Order your favourite to create your idea pizza!</p>   
    <div data-aos="slide-up" className='lg:w-[90%] w-full'>
    <Slider {...settings}>
        {
            pizza.map((item,index)=>(
<div key={index} id='product-box' className='bg-black dark:bg-gray-800 p-8 flex flex-col justify-center items-center gap-4 rounded-lg'>
    <img src={item.image} alt="product img" className='rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer' />
    <h1 className='text-white text-center text-2x1 font-bold dark:text-white'>{item.title}</h1>
    <h1 className='text-orange-600 font-bold text-3x1'>{item.price}</h1>
    <p className='text-lg text-white text-center'>{item.para}</p>
    <button className='bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black'>ORDER NOW</button>
</div>
            ))
        }
        </Slider>
    </div>
    </section>
  )
}

export default TopRated