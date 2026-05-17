"use client";

import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../utils/CartContext";

const products = [
  {
    id: "ragi-elaichi",
    name: "Ragi Malt",
    flavour: "Elaichi",
    price: 25,
    bg: "#e7f0dc",
    image: "/product.png",
    description:
      "A comforting ragi malt with gentle elaichi aroma and a smooth warm finish.",
    highlights: ["Elaichi Flavour", "Sprouted Ragi", "Ready in 4 mins"],
  },
  {
    id: "ragi-rich-dryfruit",
    name: "Ragi Malt",
    flavour: "Rich Dryfruit",
    price: 25,
    bg: "#f2dda7",
    image: "/product.png",
    description:
      "A richer malt profile with dryfruit notes, sprouted grains, and everyday nourishment.",
    highlights: ["Dryfruit Rich", "Calcium Rich", "Warm Breakfast"],
  },
  {
    id: "ragi-apple",
    name: "Ragi Malt",
    flavour: "Apple",
    price: 25,
    bg: "#f2c0a6",
    image: "/product.png",
    description:
      "A fruity apple ragi malt made for a light, smooth, and nourishing cup.",
    highlights: ["Apple Flavour", "Smooth Finish", "Kid Friendly"],
  },
  {
    id: "ragi-choco-almond",
    name: "Ragi Malt",
    flavour: "Choco Almond",
    price: 25,
    bg: "#f4eadb",
    image: "/product.png",
    description:
      "A warm chocolate ragi malt with almonds, cocoa, jaggery, and sprouted grains.",
    highlights: ["Choco Almond", "Almond Goodness", "Ready in 4 mins"],
  },
];

export default function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cardQuantities, setCardQuantities] = useState(
    products.reduce((quantities, product) => {
      quantities[product.id] = 1;
      return quantities;
    }, {})
  );
  const { addToCart } = useCart();

  const openProduct = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const addSelectedToCart = () => {
    addToCart(selectedProduct, quantity);
    setSelectedProduct(null);
  };

  const updateCardQuantity = (productId, amount) => {
    setCardQuantities((current) => ({
      ...current,
      [productId]: Math.max(1, (current[productId] || 1) + amount),
    }));
  };

  const addCardToCart = (event, product) => {
    event.stopPropagation();
    addToCart(product, cardQuantities[product.id] || 1);
  };

  return (
    <section id="shop" className="bg-white px-5 py-20 text-[#5b301c]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="para-14 font-bold uppercase tracking-[0.22em] text-[#b87336]">
              Shop Flavours
            </p>
            <h2 className="heading-60 mt-3 font-black text-[#4a2415]">
              Choose Your Bowl
            </h2>
          </div>
          <p className="para-14 max-w-md font-medium text-[#7a4b31]">
            Pick a flavour, view details, adjust quantity, and add it to your
            Firebase cart.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="group text-left"
            >
              <div
                className="rounded-lg border border-[#eadcc6] p-5 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_22px_55px_rgba(88,48,28,0.12)]"
                style={{ backgroundColor: product.bg }}
              >
                <button
                  type="button"
                  onClick={() => openProduct(product)}
                  className="block w-full text-left"
                >
                  <div className="relative mx-auto h-64 w-full">
                    <Image
                      src={product.image}
                      alt={`${product.name} ${product.flavour}`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>
                </button>
                <div className="mt-5">
                  <p className="para-14 font-bold uppercase tracking-[0.16em] text-[#9b6536]">
                    {product.name}
                  </p>
                  <button
                    type="button"
                    onClick={() => openProduct(product)}
                    className="text-left"
                  >
                    <h3 className="subheading-20 mt-1 font-black text-[#3d1e12]">
                      {product.flavour}
                    </h3>
                  </button>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-black text-[#4a2415]">
                      {"\u20B9"}
                      {product.price}.00
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateCardQuantity(product.id, -1)}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#5a2a18]"
                        aria-label={`Decrease ${product.flavour} quantity`}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="min-w-6 text-center text-base font-black text-[#4a2415]">
                        {cardQuantities[product.id] || 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateCardQuantity(product.id, 1)}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5a2a18] text-white"
                        aria-label={`Increase ${product.flavour} quantity`}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={(event) => addCardToCart(event, product)}
                    className="mt-5 w-full rounded-md bg-[#f2a03b] px-4 py-3 text-sm font-black text-[#2b150c] transition hover:bg-[#ffb45a]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1b0d08]/70 px-5 py-8 backdrop-blur-sm">
          <div className="relative grid w-full max-w-4xl overflow-hidden rounded-lg bg-[#fffdf8] shadow-2xl md:grid-cols-[0.9fr_1.1fr]">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#5a2a18] text-white"
              aria-label="Close product details"
            >
              <X size={20} />
            </button>

            <div
              className="relative min-h-[420px] p-8"
              style={{ backgroundColor: selectedProduct.bg }}
            >
              <Image
                src={selectedProduct.image}
                alt={`${selectedProduct.name} ${selectedProduct.flavour}`}
                fill
                sizes="(max-width: 768px) 90vw, 380px"
                className="object-contain p-8"
              />
            </div>

            <div className="p-7 md:p-10">
              <p className="para-14 font-bold uppercase tracking-[0.22em] text-[#b87336]">
                {selectedProduct.name}
              </p>
              <h3 className="heading-60 mt-2 font-black text-[#4a2415]">
                {selectedProduct.flavour}
              </h3>
              <p className="para-14 mt-5 font-medium text-[#6f442d]">
                {selectedProduct.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {selectedProduct.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="para-14 rounded-md border border-[#d8b98b] px-4 py-2 font-semibold text-[#6a3c25]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between border-y border-[#eadcc6] py-5">
                <span className="text-2xl font-black text-[#4a2415]">
                  {"\u20B9"}
                  {selectedProduct.price}.00
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4eadb] text-[#5a2a18]"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="min-w-8 text-center text-xl font-black text-[#4a2415]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5a2a18] text-white"
                    aria-label="Increase quantity"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={addSelectedToCart}
                className="mt-8 w-full rounded-lg bg-[#5a2a18] px-6 py-4 text-sm font-black text-white transition hover:bg-[#6f351f]"
              >
                Add {quantity} to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
