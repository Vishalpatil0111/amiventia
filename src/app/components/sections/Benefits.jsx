"use client";

import { motion } from "framer-motion";
import { Heart, Zap, Brain, Shield } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Heart Healthy",
    description: "Rich in fiber and nutrients that support cardiovascular health",
    color: "from-red-500/20 to-pink-500/20",
  },
  {
    icon: Zap,
    title: "Energy Boost",
    description: "Sustained energy from complex carbohydrates and natural ingredients",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Brain,
    title: "Mental Clarity",
    description: "Essential vitamins and minerals for cognitive function",
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    icon: Shield,
    title: "Immunity Support",
    description: "Packed with antioxidants to strengthen your immune system",
    color: "from-green-500/20 to-emerald-500/20",
  },
];

export default function Benefits() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F0] via-white to-[#FFF8F0]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-widest text-sm text-[#FF6B35] font-semibold mb-4">
            Health Benefits
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent">Amiventia</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our products are designed to nourish your body and support your wellness journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} glass-card shadow-xl group-hover:shadow-2xl transition-all`} />
                <div className="relative p-8 flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
