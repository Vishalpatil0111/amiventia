"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../components/utils/CartContext";

export default function CartPage() {
  const { items, isCartReady, updateCartItem, removeCartItem } = useCart();

  if (!isCartReady) {
    return (
      <section className="min-h-[calc(100vh-100px)] bg-[#fffdf8] px-5 py-24 text-[#5b301c]">
        <div className="mx-auto max-w-7xl rounded-3xl border border-[#eadcc6] bg-white p-10 text-center shadow-sm">
          <p className="text-lg font-semibold text-[#4a2415]">Loading your cart…</p>
        </div>
      </section>
    );
  }

  const subtotal = items.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  );

  return (
    <section className="bg-[#fffdf8] px-5 py-24 text-[#5b301c]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="para-14 font-bold uppercase tracking-[0.22em] text-[#b87336]">
              Your Cart
            </p>
            <h1 className="heading-60 mt-3 font-black text-[#4a2415]">
              Review Your Selections
            </h1>
          </div>
          <Link
            href="/#shop"
            className="inline-flex rounded-full border border-[#5a2a18] bg-transparent px-5 py-3 text-sm font-semibold text-[#5a2a18] transition hover:bg-[#f7efe1]"
          >
            Continue Shopping
          </Link>
        </div>

        {items.length === 0 ? (
          <div className="rounded-3xl border border-[#eadcc6] bg-white p-14 text-center shadow-sm">
            <p className="text-xl font-semibold text-[#4a2415]">Your cart is empty.</p>
            <p className="mt-3 text-sm text-[#7a4b31]">
              Add a product first and then come back to checkout.
            </p>
            <Link
              href="/#shop"
              className="mt-8 inline-flex rounded-full bg-[#f2a03b] px-6 py-3 text-sm font-black text-[#2b150c] transition hover:bg-[#ffb45a]"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1.5fr_0.9fr]">
            <div className="space-y-6">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-[2rem] border border-[#eadcc6] bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-center">
                    <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-[1.5rem] bg-[#f7f1e8] md:h-36 md:w-36">
                      <Image
                        src={item.image || "/product.png"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b87336]">
                        {item.flavour}
                      </p>
                      <h2 className="mt-3 text-2xl font-black text-[#4a2415]">
                        {item.name}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-[#6f442d]">
                        {item.quantity} x ₹{item.price}.00 = ₹{item.quantity * item.price}.00
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <div className="inline-flex items-center rounded-full border border-[#5a2a18] bg-[#fffaf0] p-1">
                          <button
                            type="button"
                            onClick={() => updateCartItem(item.id, (item.quantity || 1) - 1)}
                            className="flex h-9 w-9 items-center justify-center rounded-full text-[#5a2a18] transition hover:bg-[#f2e4c8]"
                            aria-label={`Decrease ${item.flavour} quantity`}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="min-w-[2rem] text-center text-sm font-black text-[#4a2415]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateCartItem(item.id, (item.quantity || 0) + 1)}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5a2a18] text-white transition hover:bg-[#6f351f]"
                            aria-label={`Increase ${item.flavour} quantity`}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeCartItem(item.id)}
                          className="inline-flex items-center gap-2 rounded-full border border-[#eadcc6] bg-[#f7f1e8] px-4 py-2 text-sm font-semibold text-[#5a2a18] transition hover:bg-[#e8dfc9]"
                        >
                          <Trash2 size={16} /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="rounded-[2rem] border border-[#eadcc6] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-black text-[#4a2415]">Order Summary</h2>
              <div className="mt-6 space-y-4 text-sm text-[#6f442d]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between border-t border-[#eadcc6] pt-4 text-base font-black text-[#4a2415]">
                  <span>Total</span>
                  <span>₹{subtotal}.00</span>
                </div>
              </div>
              <Link
                href="/checkout"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#5a2a18] px-6 py-4 text-base font-black text-white transition hover:bg-[#6f351f]"
              >
                Proceed to Checkout
              </Link>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
