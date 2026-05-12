"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import { Sparkles } from "lucide-react";

function Hero() {
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <div
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FF6B35] via-[#F7931E] to-[#004E89] text-white px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.2),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full flex flex-col items-center text-center z-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 glass-card-dark rounded-full text-sm sm:text-base mb-8"
        >
          <Sparkles className="w-4 h-4" />
          100% Healthy and Natural
        </motion.div>

        <div className="max-w-5xl flex flex-col items-center gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-bold leading-none text-[18vw] sm:text-[12vw] md:text-[8rem] tracking-tight"
          >
            Amiventia
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl md:text-3xl font-medium text-white/95"
          >
            Wholesome Instant Foods for a Healthier You
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl text-sm sm:text-base md:text-lg text-white/85 leading-relaxed"
          >
            Discover our range of nutritious, delicious instant food products
            crafted with traditional grains and natural ingredients. Quick to
            prepare, perfect for your busy lifestyle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-4 w-full flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("products")}
              variant="outline"
              className="min-w-[180px]"
            >
              View Products
            </Button>

            <Button
              size="lg"
              onClick={() => scrollToSection("about")}
              variant="outline"
              className="min-w-[180px]"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
