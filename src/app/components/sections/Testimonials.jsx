"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Fitness Enthusiast",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "Amiventia's instant ragi porridge has become my go-to breakfast. It's nutritious, delicious, and ready in minutes. Perfect for my busy mornings!",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Working Professional",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "Finally found healthy instant food that doesn't compromise on taste. The traditional grains remind me of home-cooked meals. Highly recommended!",
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Nutritionist",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    text: "As a nutritionist, I'm impressed by Amiventia's commitment to natural ingredients. I recommend their products to my clients looking for convenient, healthy options.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Gym Trainer",
    image: "https://i.pravatar.cc/150?img=13",
    rating: 5,
    text: "Great post-workout nutrition! The protein-rich mixes are exactly what my clients need. No artificial additives, just pure goodness.",
  },
  {
    id: 5,
    name: "Meera Patel",
    role: "Mother of Two",
    image: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    text: "My kids love the taste and I love the nutrition. Amiventia has made healthy eating so much easier for our family. Thank you!",
  },
  {
    id: 6,
    name: "Arjun Reddy",
    role: "Student",
    image: "https://i.pravatar.cc/150?img=14",
    rating: 5,
    text: "Perfect for hostel life! Quick, healthy, and affordable. The variety keeps me from getting bored with my meals.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FFF8F0] to-white" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-widest text-sm text-[#FF6B35] font-semibold mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-gray-600">
            Join thousands of happy customers who have made Amiventia part of their healthy lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 glass-card shadow-lg group-hover:shadow-2xl transition-all" />
              <div className="relative rounded-2xl p-6">
              <Quote className="w-10 h-10 text-[#2E5F43]/20 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="relative inline-flex flex-col items-center gap-4 rounded-2xl px-8 py-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#F7931E]" />
            <div className="absolute inset-0 glass-card-dark" />
            <div className="relative text-white">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 fill-white text-white" />
              <span className="text-3xl font-bold">4.9/5</span>
            </div>
            <p className="text-sm text-white/90">Based on 2,500+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
