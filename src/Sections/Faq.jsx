import React, { useEffect } from "react";
import { useDarkMode } from "../DarkModeContext";
import faqimg1 from "../assets/images/faq1.jpg";
import faqimg2 from "../assets/images/faq2.jpg";
import faqimg3 from "../assets/images/faq3.jpg";
import faqimg4 from "../assets/images/faq4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Accordion } from "flowbite-react";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <section
      id="faq"
      className={`${
        darkMode ? "dark bg-black" : "light bg-white"
      } w-full lg:px-20 px-10 lg:py-20 py-10 grid lg:grids lg:grid-cols-2 grid-cols-1 justify-center items-start gap-14`}
    >
      <div
        id="left"
        className="flex flex col justify-center items-center gap-12"
      >
        <h1
          data-aos="zoom-in"
          className="text-6x1 text-black font-bold text-center dark:text-white"
        >
          Frequently Asked Questions
        </h1>
        <div data-aos="slide-up" className="w-full">
          <Accordion className="flex flex-col justify-center items-center gap-2">
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">What are your opening hours?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                We're open seven days a week! Our operating hours are from 11:00 AM to 10:00 PM, Monday through Sunday.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">Do you offer delivery services</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Yes, we provide delivery within a 5-mile radius. There's a ₹30 delivery fee, and orders over ₹300 qualify for free delivery.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">Can I place an order online?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                We accept all major credit cards, cash upon delivery, and popular online payment platforms like PayPal.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">Do you have gluten-free or vegan pizza options</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Yes, we offer both gluten-free crust and vegan cheese options. You can customize your pizza to suit your dietary preferences.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">How can I customize my pizza?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                You can fully customize your pizza by choosing from a variety of crusts, sauces, cheeses, and toppings. Create the perfect pizza for your taste!
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">Are there any current promotions or discounts?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Check out our "Specials" page on the website for the latest promotions and discounts. We also have exclusive deals for our newsletter subscribers.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        {/* <button data-aos="flip-up" className="bg-orange-500 text-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">CONTACT US</button> */}
      </div>
      <div id="image-box" class="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-4">
  <img data-aos="zoom-in" src={faqimg1} alt="" class="w-[240px] h-[240px] rounded-xl shadow-lg" />
  <img data-aos="zoom-in" src={faqimg2} alt="" class="w-[240px] h-[240px] rounded-xl shadow-lg" />
  <img data-aos="zoom-in" src={faqimg3} alt="" class="w-[240px] h-[240px] rounded-xl shadow-lg" />
  <img data-aos="zoom-in" src={faqimg4} alt="" class="w-[240px] h-[240px] rounded-xl shadow-lg" />
</div>


    </section>
  );
};

export default Faq;
