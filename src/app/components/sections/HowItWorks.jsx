"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Package, Truck, Smile } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "Choose Your Products",
    description: "Browse our range of healthy instant foods",
    step: "01",
  },
  {
    icon: Package,
    title: "We Pack with Care",
    description: "Fresh products packed in eco-friendly materials",
    step: "02",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Delivered to your doorstep within days",
    step: "03",
  },
  {
    icon: Smile,
    title: "Enjoy & Thrive",
    description: "Quick preparation, delicious taste, healthy living",
    step: "04",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#004E89] via-[#0066B3] to-[#004E89]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 text-white"
        >
          <p className="uppercase tracking-widest text-sm font-semibold mb-4 text-white/90">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            From Our Kitchen to <span className="text-white/90">Your Table</span>
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Simple, fast, and hassle-free way to get nutritious meals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group rounded-3xl overflow-hidden"
              >
                <div className="absolute inset-0 glass-card-dark shadow-2xl group-hover:shadow-3xl transition-all" />
                <div className="relative p-8 flex flex-col items-center text-center gap-4">
                  <div className="text-6xl font-bold text-white/10 absolute top-4 right-4">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
