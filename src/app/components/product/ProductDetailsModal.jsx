'use client'

import * as Dialog from "@radix-ui/react-dialog";
import { X, Flame, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductDetailsModal({ open, onOpenChange, product }) {
  if (!product) return null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />

        {/* Content */}
        <Dialog.Content
         className="
    fixed z-50
    top-1/2 left-1/2
    w-[92vw]
    max-w-4xl
    max-h-[88vh]
    -translate-x-1/2 -translate-y-1/2
    overflow-y-auto
    rounded-2xl
    bg-[#fdfaf4]
    p-6 sm:p-8
  "
>
          {/* Close */}
          <Dialog.Close className="absolute top-4 right-4 text-gray-500 hover:text-black">
            <X />
          </Dialog.Close>

          {/* Title */}
         <Dialog.Title className="text-2xl sm:text-3xl font-bold mb-6">
  {product.title}
</Dialog.Title>

          {/* Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden bg-gray-100">
              <span className="absolute top-4 left-4 bg-green-700 text-white text-xs px-3 py-1 rounded-full">
                Bestseller
              </span>

              <motion.img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-green-700 font-semibold">
                  {product.tag}
                </p>
                <p className="text-gray-700 mt-3 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              {/* Nutrition */}
              <div>
                <h4 className="flex items-center gap-2 font-semibold mb-3">
                  <Flame className="w-5 h-5 text-orange-600" />
                  Nutrition Facts
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  {product.nutrition.map((item, i) => (
                    <div
                      key={i}
                      className="bg-[#ece7df] rounded-xl p-4 text-center"
                    >
                      <p className="text-2xl font-bold text-green-800">
                        {item.value}
                      </p>
                      <p className="text-sm text-gray-700">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ingredients */}
              <div>
                <h4 className="flex items-center gap-2 font-semibold mb-3">
                  <Leaf className="w-5 h-5 text-green-700" />
                  Key Ingredients
                </h4>

                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full bg-[#efe6da] text-sm"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
