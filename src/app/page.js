import Hero from "./components/sections/Hero";
import ProductCard from "./components/sections/ProductCard";
import Product from "./components/sections/Product";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
        <Hero />
        <ProductCard />
        <Product />
        <Contact />
        <Footer />
      </main>
  );
}
