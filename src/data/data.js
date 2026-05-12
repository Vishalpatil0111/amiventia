// src/data/products.js

export const products = [
  {
    id: "nagli-health-mix",
    title: "Nagli Health Mix",
    tag: "The Power of Ragi",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&q=80",

    shortDescription:
      "A wholesome blend of traditional ragi packed with essential nutrients.",

    longDescription:
      "Nagli Health Mix is crafted from 100% organic finger millet, known for its exceptional nutritional profile. This versatile mix can be prepared as a porridge, added to smoothies, or used in baking for a healthy twist.",

    badge: "Bestseller",

    nutrition: [
      { label: "Calories", value: "120" },
      { label: "Protein", value: "4g" },
      { label: "Fiber", value: "6g" },
      { label: "Iron", value: "15% DV" },
    ],

    ingredients: [
      "Organic Finger Millet",
      "Cardamom",
      "Dry Ginger",
    ],
  },

  {
    id: "multigrain-porridge",
    title: "Multigrain Porridge",
    tag: "Ancient Grain Goodness",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&q=80",

    shortDescription:
      "A balanced porridge mix made with ancient grains.",

    longDescription:
      "Our Multigrain Porridge combines carefully selected ancient grains to provide sustained energy, improved digestion, and a wholesome start to your day.",

    badge: "New",

    nutrition: [
      { label: "Calories", value: "140" },
      { label: "Protein", value: "5g" },
      { label: "Fiber", value: "7g" },
      { label: "Iron", value: "12% DV" },
    ],

    ingredients: [
      "Millet",
      "Wheat",
      "Oats",
      "Cardamom",
    ],
  },

  {
    id: "instant-millet-meal",
    title: "Instant Millet Meal",
    tag: "Pure & Nourishing",
    image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=800&q=80",

    shortDescription:
      "Light, nutritious and quick-to-prepare millet meal.",

    longDescription:
      "Instant Millet Meal is designed for busy lifestyles without compromising nutrition. Ready in minutes and rich in fiber and minerals.",

    badge: null,

    nutrition: [
      { label: "Calories", value: "110" },
      { label: "Protein", value: "3g" },
      { label: "Fiber", value: "5g" },
      { label: "Iron", value: "10% DV" },
    ],

    ingredients: [
      "Foxtail Millet",
      "Little Millet",
      "Dry Ginger",
    ],
  },

  
];
