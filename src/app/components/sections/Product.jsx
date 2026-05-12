"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import { products } from "@/data/data";
import ProductDetailsModal from "../product/ProductDetailsModal";
import { useState } from "react";

function Product() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section id="products" className="w-full py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FFF8F0] to-white" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center flex flex-col gap-4"
          >
            <p className="uppercase tracking-widest text-sm text-[#FF6B35] font-semibold">
              Our Products
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Healthy Foods for{" "}
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent">Every Moment</span>
            </h2>

            <p className="text-gray-600 text-base">
              Explore our range of nutritious instant food products crafted with care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl overflow-hidden"
              >
                <div className="absolute inset-0 glass-card group-hover:shadow-2xl transition-all" />
                <div className="relative">
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#FFF8F0] to-white">
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white text-xs px-3 py-1.5 rounded-full font-medium z-10 shadow-lg">
                      {product.badge}
                    </span>
                  )}
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <p className="text-[#FF6B35] text-sm font-semibold uppercase tracking-wide">
                    {product.tag}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="px-6 pb-6">
                  <Button
                    onClick={() => {
                      setSelectedProduct(product);
                      setOpen(true);
                    }}
                    className="w-full"
                    variant="primary"
                  >
                    View Details
                  </Button>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductDetailsModal
        open={open}
        onOpenChange={setOpen}
        product={selectedProduct}
      />
    </>
  );
}

export default Product;
