"use client";

import { Mail, MapPin, PackageCheck, Phone } from "lucide-react";
import { useState } from "react";

const contactItems = [
  {
    icon: PackageCheck,
    label: "Bulk Orders",
    value: "Custom quantities for stores, cafes, and wellness teams.",
  },
  {
    icon: Mail,
    label: "Email",
    value: "orders@amiventia.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Made in India, delivered fresh.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitInquiry = (event) => {
    event.preventDefault();
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#fff8eb] px-5 py-20 text-[#5b301c]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8b98b] to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="para-14 font-bold uppercase tracking-[0.22em] text-[#b87336]">
            Contact Us
          </p>
          <h2 className="heading-60 mt-3 max-w-xl font-black text-[#4a2415]">
            Get your discounts. Interested in Bulk Orders?
          </h2>
          <p className="para-14 mt-6 max-w-lg font-medium text-[#7a4b31]">
            Share a few details and our team will get back with pricing,
            availability, and order support for your requirement.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {contactItems.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-lg border border-[#eadcc6] bg-white p-5 shadow-[0_18px_45px_rgba(88,48,28,0.08)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4eadb] text-[#6b351f]">
                  <Icon size={21} strokeWidth={1.8} />
                </span>
                <h3 className="subheading-20 mt-4 font-black text-[#4a2415]">
                  {label}
                </h3>
                <p className="para-14 mt-2 font-medium text-[#7a4b31]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={submitInquiry}
          className="rounded-lg border border-[#d8b98b] bg-[#f8ead4] p-5 shadow-[0_30px_90px_rgba(88,48,28,0.12)] md:p-8"
        >
          <div className="mb-5">
            <p className="para-14 font-bold text-[#6f442d]">
              Tell us what you need and we will respond soon.
            </p>
          </div>

          <div className="grid gap-4">
            <input
              name="name"
              value={form.name}
              onChange={updateField}
              placeholder="Full Name"
              className="h-14 rounded-md border border-[#eadcc6] bg-white px-4 text-sm font-semibold text-[#3a1a0f] outline-none transition placeholder:text-[#9b8b80] focus:border-[#f2a03b]"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              placeholder="Email"
              className="h-14 rounded-md border border-[#eadcc6] bg-white px-4 text-sm font-semibold text-[#3a1a0f] outline-none transition placeholder:text-[#9b8b80] focus:border-[#f2a03b]"
            />
            <input
              name="company"
              value={form.company}
              onChange={updateField}
              placeholder="Company"
              className="h-14 rounded-md border border-[#eadcc6] bg-white px-4 text-sm font-semibold text-[#3a1a0f] outline-none transition placeholder:text-[#9b8b80] focus:border-[#f2a03b]"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              placeholder="Message"
              rows={5}
              className="min-h-36 resize-none rounded-md border border-[#eadcc6] bg-white px-4 py-4 text-sm font-semibold text-[#3a1a0f] outline-none transition placeholder:text-[#9b8b80] focus:border-[#f2a03b]"
            />
          </div>

          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-[#f2a03b] px-6 py-4 text-sm font-black text-[#2a120a] transition hover:bg-[#ffb45a]"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
