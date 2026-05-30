import React from "react";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./DarkModeContext";
import { CartProvider } from "./CartContext";

import Header      from "./Sections/Header";
import Hero        from "./Sections/Hero";
import Stats       from "./Sections/Stats";
import About       from "./Sections/About";
import Menu        from "./Sections/Menu";
import Offers      from "./Sections/Offers";
import Testimonials from "./Sections/Testimonials";
import Faq         from "./Sections/Faq";
import Contact     from "./Sections/Contact";
import Footer      from "./Sections/Footer";
import CartSidebar from "./Components/CartSidebar";

const App = () => (
  <DarkModeProvider>
    <CartProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          style: { background: "#1A0F05", color: "#fff", border: "1px solid rgba(230,51,18,0.25)" },
        }}
      />
      <CartSidebar />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Menu />
        <Offers />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </CartProvider>
  </DarkModeProvider>
);

export default App;
