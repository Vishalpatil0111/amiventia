"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, Award, Recycle } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "FSSAI certified products with rigorous quality checks",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick delivery across India within 3-5 business days",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in healthy food innovation",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description: "Sustainable packaging and environmentally conscious",
  },
];

export default function Features() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#2E5F43]/5 via-white to-[#FAF6EE]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/60 shadow-lg" />
                <div className="relative p-6 flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#2E5F43]/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-[#2E5F43]" />
                  </div>
                  <h3 className="font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
