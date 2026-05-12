"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import Button from "../ui/Button";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

export default function NavbarClient() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 focus:outline-none group"
          >
            <Leaf className={`w-7 h-7 transition-colors ${isScrolled ? "text-[#FF6B35]" : "text-white"}`} />
            <span className={`font-bold text-xl transition-colors ${isScrolled ? "text-[#FF6B35]" : "text-white"}`}>
              Amiventia
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-sm font-semibold transition-colors ${
                  activeSection === link.id
                    ? isScrolled ? "text-[#FF6B35]" : "text-white"
                    : isScrolled ? "text-gray-700 hover:text-[#FF6B35]" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="underline"
                    className={`absolute left-0 -bottom-1 h-0.5 w-full ${isScrolled ? "bg-gradient-to-r from-[#FF6B35] to-[#F7931E]" : "bg-white"}`}
                  />
                )}
              </button>
            ))}

            <Button variant="primary" size="sm" onClick={() => scrollToSection("contact")}>
              Get in Touch
            </Button>
          </nav>

          <button
            className={`md:hidden p-2 ${isScrolled ? "text-[#FF6B35]" : "text-white"}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsMobileOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-screen w-[70%] bg-white shadow-2xl z-50 md:hidden"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-2">
                      <Leaf className="w-6 h-6 text-[#FF6B35]" />
                      <span className="font-bold text-lg text-[#FF6B35]">Amiventia</span>
                    </div>
                    <button onClick={() => setIsMobileOpen(false)} className="p-2">
                      <X className="w-6 h-6 text-gray-700" />
                    </button>
                  </div>
                  <div className="flex flex-col py-6 px-4 gap-2">
                    {navLinks.map((link, index) => (
                      <motion.button
                        key={link.id}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => scrollToSection(link.id)}
                        className={`px-4 py-3 text-left rounded-xl transition ${
                          activeSection === link.id
                            ? "bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-semibold"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {link.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
