"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../components/utils/CartContext";

export default function CheckoutPage() {
  const { items, isCartReady } = useCart();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [paymentMessage, setPaymentMessage] = useState("");

  if (!isCartReady) {
    return (
      <section className="min-h-[calc(100vh-100px)] bg-[#fffdf8] px-5 py-24 text-[#5b301c]">
        <div className="mx-auto max-w-7xl rounded-3xl border border-[#eadcc6] bg-white p-10 text-center shadow-sm">
          <p className="text-lg font-semibold text-[#4a2415]">Preparing your checkout…</p>
        </div>
      </section>
    );
  }

  const subtotal = items.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  );

  const handleChange = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPaymentMessage(
      "Checkout submitted. Razorpay integration will be wired in next step."
    );
  };

  return (
    <section className="bg-[#fffdf8] px-5 py-24 text-[#5b301c]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="para-14 font-bold uppercase tracking-[0.22em] text-[#b87336]">
              Checkout
            </p>
            <h1 className="heading-60 mt-3 font-black text-[#4a2415]">
              Shipping & Billing
            </h1>
          </div>
          <Link
            href="/cart"
            className="inline-flex rounded-full border border-[#5a2a18] bg-transparent px-5 py-3 text-sm font-semibold text-[#5a2a18] transition hover:bg-[#f7efe1]"
          >
            Back to Cart
          </Link>
        </div>

        {items.length === 0 ? (
          <div className="rounded-3xl border border-[#eadcc6] bg-white p-14 text-center shadow-sm">
            <p className="text-xl font-semibold text-[#4a2415]">No items in your cart.</p>
            <p className="mt-3 text-sm text-[#7a4b31]">
              Add something to your cart before checking out.
            </p>
            <Link
              href="/#shop"
              className="mt-8 inline-flex rounded-full bg-[#f2a03b] px-6 py-3 text-sm font-black text-[#2b150c] transition hover:bg-[#ffb45a]"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-[#eadcc6] bg-white p-8 shadow-sm"
            >
              <h2 className="text-xl font-black text-[#4a2415]">Delivery Address</h2>

              <div className="mt-6 grid gap-6">
                <label className="space-y-3 text-sm font-semibold text-[#4a2415]">
                  Full Name
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={handleChange("fullName")}
                    className="w-full rounded-3xl border border-[#eadcc6] bg-[#fffaf0] px-5 py-3 text-sm text-[#4a2415] outline-none transition focus:border-[#b87336]"
                    required
                  />
                </label>
                <label className="space-y-3 text-sm font-semibold text-[#4a2415]">
                  Phone Number
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className="w-full rounded-3xl border border-[#eadcc6] bg-[#fffaf0] px-5 py-3 text-sm text-[#4a2415] outline-none transition focus:border-[#b87336]"
                    required
                  />
                </label>
                <label className="space-y-3 text-sm font-semibold text-[#4a2415]">
                  Address
                  <textarea
                    value={form.address}
                    onChange={handleChange("address")}
                    className="w-full rounded-3xl border border-[#eadcc6] bg-[#fffaf0] px-5 py-3 text-sm text-[#4a2415] outline-none transition focus:border-[#b87336]"
                    rows={4}
                    required
                  />
                </label>
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="space-y-3 text-sm font-semibold text-[#4a2415]">
                    City
                    <input
                      type="text"
                      value={form.city}
                      onChange={handleChange("city")}
                      className="w-full rounded-3xl border border-[#eadcc6] bg-[#fffaf0] px-5 py-3 text-sm text-[#4a2415] outline-none transition focus:border-[#b87336]"
                      required
                    />
                  </label>
                  <label className="space-y-3 text-sm font-semibold text-[#4a2415]">
                    State
                    <input
                      type="text"
                      value={form.state}
                      onChange={handleChange("state")}
                      className="w-full rounded-3xl border border-[#eadcc6] bg-[#fffaf0] px-5 py-3 text-sm text-[#4a2415] outline-none transition focus:border-[#b87336]"
                      required
                    />
                  </label>
                </div>
                <label className="space-y-3 text-sm font-semibold text-[#4a2415]">
                  Pincode
                  <input
                    type="text"
                    value={form.pincode}
                    onChange={handleChange("pincode")}
                    className="w-full rounded-3xl border border-[#eadcc6] bg-[#fffaf0] px-5 py-3 text-sm text-[#4a2415] outline-none transition focus:border-[#b87336]"
                    required
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-[#5a2a18] px-6 py-4 text-base font-black text-white transition hover:bg-[#6f351f]"
              >
                Proceed to Payment
              </button>

              {paymentMessage && (
                <p className="mt-6 rounded-3xl bg-[#f7efe1] px-5 py-4 text-sm font-semibold text-[#5a2a18]">
                  {paymentMessage}
                </p>
              )}
            </form>

            <aside className="space-y-8">
              <div className="rounded-[2rem] border border-[#eadcc6] bg-white p-8 shadow-sm">
                <h2 className="text-xl font-black text-[#4a2415]">Billing Details</h2>
                <div className="mt-6 space-y-4 text-sm text-[#6f442d]">
                  <div className="flex justify-between">
                    <span>Items</span>
                    <span>{items.length}</span>
                  </div>
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
              </div>

              <div className="rounded-[2rem] border border-[#eadcc6] bg-white p-8 shadow-sm">
                <h2 className="text-xl font-black text-[#4a2415]">Order Preview</h2>
                <div className="mt-6 space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-black text-[#4a2415]">{item.flavour}</p>
                        <p className="text-sm text-[#6f442d]">{item.quantity} × ₹{item.price}.00</p>
                      </div>
                      <p className="text-sm font-black text-[#4a2415]">₹{item.quantity * item.price}.00</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
