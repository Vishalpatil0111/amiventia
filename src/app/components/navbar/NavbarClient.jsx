"use client";

import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../utils/CartContext";

const links = ["Home", "Products", "About", "Contact"];

export default function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d8b98b]/25 bg-[#2a120a]/88 shadow-[0_12px_40px_rgba(42,18,10,0.18)] backdrop-blur-md">
      <nav className="mx-auto flex h-[70px] w-full max-w-7xl items-center justify-between px-6 md:h-[82px] md:px-10 lg:px-14">
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-[-0.02em] text-white drop-shadow-md md:text-[32px]"
          aria-label="Amiventia home"
        >
          Amiventia
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={link === "Home" ? "#home" : `#${link.toLowerCase()}`}
              className={`relative text-sm font-semibold text-white/85 transition hover:text-[#f7a23d] ${
                link === "Home" ? "text-[#f7a23d]" : ""
              }`}
            >
              {link}
              {link === "Home" && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#f7a23d]" />
              )}
            </a>
          ))}
        </div>

        <a
          href="#shop"
          className="relative hidden items-center gap-2 rounded-lg bg-[#f2a03b] px-5 py-3 text-sm font-bold text-[#2b150c] shadow-[0_10px_24px_rgba(242,160,59,0.25)] transition hover:bg-[#ffb45a] md:inline-flex"
          aria-label={`Cart with ${cartCount} items`}
        >
          <ShoppingCart size={18} />
          Cart
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#2b150c] px-1.5 text-xs text-white">
            {cartCount}
          </span>
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="mx-4 mb-4 rounded-lg border border-white/15 bg-[#2a130b]/95 p-4 shadow-2xl md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link}
                href={link === "Home" ? "#home" : `#${link.toLowerCase()}`}
                className="rounded-md px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#shop"
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-[#f2a03b] px-3 py-3 text-center text-sm font-bold text-[#2b150c]"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCart size={18} />
              Cart
              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#2b150c] px-1.5 text-xs text-white">
                {cartCount}
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
