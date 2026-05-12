"use client";

import { motion } from "framer-motion";
import { Leaf, Wheat, HeartHandshake, Clock } from "lucide-react";

const storyData = [
  {
    title: "100% Natural",
    description: "Pure ingredients sourced directly from nature without additives.",
    icon: Leaf,
  },
  {
    title: "Traditional Grains",
    description: "Made using ancient grains trusted for generations.",
    icon: Wheat,
  },
  {
    title: "Health Focused",
    description: "Nutrition-first approach for a balanced lifestyle.",
    icon: HeartHandshake,
  },
  {
    title: "Quick & Easy",
    description: "Instant foods crafted for modern, busy lives.",
    icon: Clock,
  },
];

const commitmentTags = ["No Preservatives", "Farm Fresh", "Nutrient Rich", "Gluten-Free Options"];

function Story() {
  return (
    <section id="about" className="w-full min-h-screen px-4 sm:px-6 lg:px-12 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F0] via-white to-[#FFF8F0]" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl flex flex-col gap-4"
        >
          <p className="uppercase font-semibold text-sm tracking-widest text-[#FF6B35]">
            Our Story
          </p>

          <h2 className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl">
            Nourishing Lives with{" "}
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent">
              Nature&apos;s Best
            </span>
          </h2>

          <p className="text-base text-gray-600 leading-relaxed">
            At Amiventia, we believe healthy eating shouldn&apos;t be complicated.
            We bring traditional grains and natural ingredients into convenient,
            instant formats for modern lifestyles.
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {storyData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 glass-card group-hover:shadow-2xl transition-all" />
                <div className="relative p-6 flex flex-col gap-4 items-start">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h4 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#004E89] via-[#0066B3] to-[#004E89]" />
          <div className="absolute inset-0 glass-card-dark" />
          <div className="relative text-white p-8 md:p-12 flex flex-col gap-6">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Our Commitment to Your Health
            </h3>

            <p className="max-w-3xl text-base text-white/95 leading-relaxed">
              Every Amiventia product is a result of careful research and development,
              ensuring that you receive not just taste, but complete nutrition. We work
              directly with farmers to source the finest grains and ingredients,
              supporting sustainable agriculture while bringing you the purest products.
            </p>

            <div className="flex flex-wrap gap-3">
              {commitmentTags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm px-5 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Story;
