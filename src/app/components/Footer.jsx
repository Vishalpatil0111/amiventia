"use client";

import Link from "next/link";
import { Leaf, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-gradient-to-br from-[#004E89] via-[#0066B3] to-[#004E89] text-white relative overflow-hidden">
      <div className="absolute inset-0 glass-card-dark" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Leaf className="text-white" />
              Amiventia
            </div>

            <p className="text-sm leading-relaxed text-white/80 max-w-sm">
              Bringing you the finest natural and healthy instant food products.
              Nourishing lives with traditional wisdom and modern convenience.
            </p>

            <div className="flex gap-3">
              <SocialIcon icon={<Facebook />} />
              <SocialIcon icon={<Instagram />} />
              <SocialIcon icon={<Twitter />} />
              <SocialIcon icon={<Youtube />} />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">
              Quick Links
            </h4>

            <ul className="flex flex-col gap-3 text-sm text-white/80">
              <li>
                <button onClick={() => scrollToSection("hero")} className="hover:text-white transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-white transition">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("products")} className="hover:text-white transition">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-white transition">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">
              Contact
            </h4>

            <div className="flex flex-col gap-2 text-sm text-white/80">
              <p>info@amiventia.com</p>
              <p>+91 98765 43210</p>
              <p>Mumbai, Maharashtra</p>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-white/20" />

        <p className="text-center text-sm text-white/70">
          © {new Date().getFullYear()} Amiventia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }) {
  return (
    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition cursor-pointer">
      {icon}
    </div>
  );
}
