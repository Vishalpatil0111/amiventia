"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import Button from "../ui/Button";


const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? "bg-[#fffffe] backdrop-blur-md text-zinc-800 shadow-sm  border-b"
          : "bg-transparent text-zinc-50"
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 ">
        <div className="flex h-16 md:h-20 items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 focus:outline-none"
            aria-label="Amiventia Home"
          >
            <Leaf className="w-7 h-7 text-primary" />
            <span className="font-display text-xl font-bold">
              Amiventia
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative cursor-pointer text-sm font-medium transition-colors
                  ${
                    activeSection === link.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                aria-current={
                  activeSection === link.id ? "page" : undefined
                }
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary"
                  />
                )}
              </button>
            ))}

            <Button className="cursor-pointer" variant="primary" size="sm" onClick={() => scrollToSection("contact")}>
              Get in Touch
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t bg-background text-black"
            >
              <div className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`px-4 p-y-3 text-left transition $
                      activeSection === link.id
                        ? "text-primary font-semibold"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
