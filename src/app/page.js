import Navbar from "./components/navbar/NavbarClient";
import Hero from "./components/sections/Hero";
import ProductCard from "./components/sections/ProductCard";
import Product from "./components/sections/Product";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import { CartProvider } from "./components/utils/CartContext";

export default function Home() {
  return (
    <CartProvider>
      <main className="min-h-screen relative">
        <Navbar />
        <Hero />
        <ProductCard />
        <Product />
        <Contact />
        <Footer />
      </main>
    </CartProvider>
  );
}
