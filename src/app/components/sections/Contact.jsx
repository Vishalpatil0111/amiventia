"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F0] via-white to-[#FFF8F0]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-widest text-sm text-[#FF6B35] font-semibold mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            We&apos;d Love to{" "}
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent">Hear from You</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              Have questions about our products or want to place a bulk order?
              Reach out to us and we&apos;ll respond within 24 hours.
            </p>

            <div className="flex flex-col gap-6">
              <InfoItem
                icon={<Mail />}
                title="Email Us"
                value="info@amiventia.com"
              />
              <InfoItem
                icon={<Phone />}
                title="Call Us"
                value="+91 98765 43210"
              />
              <InfoItem
                icon={<MapPin />}
                title="Visit Us"
                value="123 Health Street, Wellness District, Mumbai 400001"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 glass-card shadow-xl" />
            <form onSubmit={handleSubmit} className="relative p-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Full Name" name="name" placeholder="John Doe" />
              <Input label="Email" name="email" placeholder="john@example.com" />
            </div>

            <Input
              label="Phone Number"
              name="phone"
              placeholder="+91 98765 43210"
            />

            <Textarea
              label="Message"
              name="message"
              placeholder="Tell us about your inquiry..."
            />

            <input type="hidden" name="request_type" value="Product Inquiry / Bulk Order" />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:from-[#E85A2A] hover:to-[#E07A10] active:scale-95 transition-all font-medium shadow-lg"
            >
              <Send size={18} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, title, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F7931E] text-white flex items-center justify-center flex-shrink-0 shadow-lg">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-gray-900">{title}</p>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        {...props}
        required
        className="px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition"
      />
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <textarea
        {...props}
        required
        rows={5}
        className="px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition resize-none"
      />
    </div>
  );
}
