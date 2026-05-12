import Footer from "./components/Footer";
import Navbar from "./components/navbar/NavbarClient";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Product from "./components/sections/Product";
import Story from "./components/sections/Story";
import Testimonials from "./components/sections/Testimonials";
import Benefits from "./components/sections/Benefits";
import HowItWorks from "./components/sections/HowItWorks";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main>
       <Hero/>
       <Story/>
       <Benefits/>
       <Product/>
       <HowItWorks/>
       <Testimonials/>
       <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
