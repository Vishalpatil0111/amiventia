"use client";

import Link from "next/link";
import { Menu, ShoppingCart, User, X, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "../utils/CartContext";

const LINKS = [
  { label: "Home", id: "home" },
  { label: "Products", id: "products" },
  { label: "About", id: "products" },
  { label: "Contact", id: "contact" },
];

export default function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showCartTooltip, setShowCartTooltip] = useState(false);
  const { cartCount, user, loginWithGoogle, logout } = useCart();
  const isAnonymous = user?.isAnonymous;
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const ids = LINKS.map((l) => l.id);

    const handler = () => {
      let current = "home";
      const scrollY = window.scrollY + 120; // offset to detect section under navbar
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        if (scrollY >= top) {
          current = id;
        }
      }
      setActiveId(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-[#F7EEE1] shadow-[0_8px_24px_rgba(43,21,12,0.06)]">
      <nav className="mx-auto flex h-[70px] w-full max-w-7xl items-center justify-between px-6 md:h-[82px] md:px-10 lg:px-14">
        <Link href="/#home" className="text-2xl font-extrabold tracking-[-0.02em] text-[#2b150c] md:text-[32px]" aria-label="Amiventia home">
          Amiventia
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={`/#${link.id}`}
              onClick={() => setActiveId(link.id)}
              className={`relative text-sm font-semibold transition hover:text-[#f7a23d] ${
                activeId === link.id ? "text-[#f7a23d]" : "text-[#2b150c]"
              }`}
            >
              {link.label}
              {activeId === link.id && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#f7a23d]" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          {isAnonymous || !user ? (
            <button
              type="button"
              onClick={loginWithGoogle}
              className="inline-flex items-center gap-2 rounded-full border border-[#2b150c]/20 bg-transparent px-3 py-2 text-sm font-semibold text-[#2b150c] transition hover:bg-white/10"
            >
              <User size={18} />
              Login / Sign up
            </button>
          ) : (
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="inline-flex items-center gap-2 rounded-full border border-[#2b150c]/20 bg-transparent px-3 py-2 text-sm font-semibold text-[#2b150c] transition hover:bg-white/10"
              >
                <User size={18} />
                {user.displayName || user.email}
              </button>
              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-[#eadcc6] bg-white shadow-lg z-50">
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setShowUserMenu(false);
                    }}
                    className="block w-full px-4 py-3 text-left text-sm font-semibold text-[#2b150c] hover:bg-[#f7f1e8] rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {!isAnonymous && user && (
            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center justify-center rounded-full bg-transparent p-3 text-[#2b150c] transition hover:bg-red-50 hover:text-red-600"
              aria-label="Logout"
            >
              <LogOut size={20} />
            </button>
          )}

          <div className="relative">
            {isAnonymous || !user ? (
              <button
                type="button"
                onMouseEnter={() => setShowCartTooltip(true)}
                onMouseLeave={() => setShowCartTooltip(false)}
                className="relative inline-flex items-center justify-center rounded-full bg-transparent p-3 text-[#2b150c] transition hover:bg-white/10 cursor-not-allowed"
                aria-label="Cart (login required)"
              >
                <ShoppingCart size={24} />
                <span className="sr-only">Cart</span>
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#2b150c] px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
                {showCartTooltip && (
                  <div className="absolute bottom-full mb-2 right-0 bg-[#2b150c] text-white text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap z-50">
                    Kindly login or signup
                    <div className="absolute top-full right-2 w-2 h-2 bg-[#2b150c] transform rotate-45"></div>
                  </div>
                )}
              </button>
            ) : (
              <Link
                href="/cart"
                className="relative inline-flex items-center justify-center rounded-full bg-transparent p-3 text-[#2b150c] transition hover:bg-white/10"
                aria-label={`Cart with ${cartCount} items`}
              >
                <ShoppingCart size={24} />
                <span className="sr-only">Cart</span>
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#2b150c] px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              </Link>
            )}
          </div>

        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => loginWithGoogle()}
            aria-label={user ? `Signed in as ${user.displayName || user.email}` : "Login or sign up"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#2b150c]"
          >
            <User size={20} />
          </button>

          {!isAnonymous && user && (
            <button
              type="button"
              onClick={logout}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#2b150c] hover:text-red-600"
              aria-label="Logout"
            >
              <LogOut size={20} />
            </button>
          )}

          {isAnonymous || !user ? (
            <button
              type="button"
              onMouseEnter={() => setShowCartTooltip(true)}
              onMouseLeave={() => setShowCartTooltip(false)}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-md text-[#2b150c] cursor-not-allowed"
              aria-label="Cart (login required)"
            >
              <ShoppingCart size={20} />
              <span className="sr-only">Cart</span>
              {showCartTooltip && (
                <div className="absolute bottom-full mb-2 right-0 bg-[#2b150c] text-white text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap z-50">
                  Kindly login or signup
                </div>
              )}
            </button>
          ) : (
            <Link href="/cart" className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#2b150c]" aria-label={`Cart with ${cartCount} items`}>
              <ShoppingCart size={20} />
              <span className="sr-only">Cart</span>
            </Link>
          )}

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-[#2b150c]"
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mx-4 mb-4 rounded-lg border border-gray-200 bg-[#F7EEE1] p-4 shadow-2xl md:hidden">
          <div className="flex flex-col gap-2">
              {LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={`/#${link.id}`}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-[#2b150c] hover:bg-gray-50"
                  onClick={() => {
                    setIsOpen(false);
                    setActiveId(link.id);
                  }}
                >
                  {link.label}
                </Link>
              ))}
            {isAnonymous ? (
              <button
                type="button"
                onClick={() => {
                  loginWithGoogle();
                  setIsOpen(false);
                }}
                className="mt-2 flex items-center justify-center gap-2 rounded-md border border-[#2b150c] bg-white px-3 py-3 text-sm font-semibold text-[#2b150c]"
              >
                <User size={18} />
                Login / Sign up
              </button>
            ) : user ? (
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-center gap-2 rounded-md border border-[#2b150c]/20 bg-transparent px-3 py-3 text-sm font-semibold text-[#2b150c]">
                  <User size={18} />
                  {user.displayName || user.email}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-md border border-red-300 bg-red-50 px-3 py-3 text-sm font-semibold text-red-600 hover:bg-red-100"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  loginWithGoogle();
                  setIsOpen(false);
                }}
                className="mt-2 flex items-center justify-center gap-2 rounded-md border border-[#2b150c]/20 bg-transparent px-3 py-3 text-sm font-semibold text-[#2b150c]"
              >
                <User size={18} />
                Login / Sign up
              </button>
            )}
            <Link
              href="/cart"
              className="mt-2 relative inline-flex items-center justify-center rounded-full bg-transparent p-3 text-[#2b150c] transition hover:bg-white/10"
              onClick={() => setIsOpen(false)}
              aria-label={`Cart with ${cartCount} items`}
            >
              <ShoppingCart size={24} />
              <span className="sr-only">Cart</span>
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#2b150c] px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
