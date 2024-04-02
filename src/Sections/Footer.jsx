import React from 'react';
import { useDarkMode } from '../DarkModeContext';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaArrowUp, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <section className={`${darkMode ? 'dark bg-grey-900' : 'light bg-black'} w-full h-fit lg:px-20 px-10 py-10 flex flex-col justify-center items-center gap-6`}>
        <h1 className='text-white font-bold text-5xl'>Pizzazz<span className='text-orange-500 italic'>Pies</span></h1>
        <p className='text-xl text-slate-100 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, necessitatibus.</p>
        <div id='social-icons' className='flex justify-center items-center gap-4'>
          <div className='p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-500'>
            <FaFacebookF className='w-6 h-6' />
          </div>
          <div className='p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-500'>
            <FaInstagram className='w-6 h-6' />
          </div>
          <div className='p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-500'>
            <FaYoutube className='w-6 h-6' />
          </div>
          <div className='p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-500'>
            <FaTwitter className='w-6 h-6' />
          </div>
        </div>
      </section>
      <div>
        <button onClick={toggleDarkMode} className='flex items-center p-4 rounded-full bg-orange-500 fixed bottom-6 left-6'>{darkMode ? <FaMoon size={30} className='text-black' /> : <FaSun size={30} className='text-black'/>}</button>
      </div>

      <div id='icon-box' className='bg-orange-500 text-black p-3 rounded-full hover:bg-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='w-[35px] h-[35px]' />
        </Link>
      </div>
    </>
  );
};

export default Footer;
