"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  ChefHat,
  Clock3,
  CookingPot,
  Leaf,
  Milk,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    icon: Milk,
    title: "Mix",
    text: "Take 1 heaped scoop (~15 g) and mix with 1 cup of milk.",
  },
  {
    icon: ChefHat,
    title: "Stir",
    text: "Stir well until smooth, with no lumps left in the cup.",
  },
  {
    icon: CookingPot,
    title: "Cook",
    text: "Cook on low flame for 3-4 minutes, stirring occasionally.",
  },
  {
    icon: Sparkles,
    title: "Serve",
    text: "Add more milk for desired consistency and serve warm.",
  },
];

const benefits = [
  "Higher Iron absorption",
  "Easier to digest",
  "Lower Glycemic impact",
  "Boosts Calcium naturally",
  "Reduced Anti-Nutrients",
];

const nutrition = [
  ["Energy", "388.03 kcal", "77.6 kcal"],
  ["Protein", "8.34 g", "1.67 g"],
  ["Calcium", "450 mg", "0.10 mg"],
  ["Iron", "0.48 mg", "0.10 mg"],
];

const ingredients = [
  "Sprouted Ragi",
  "Oats",
  "Green Gram",
  "Rice",
  "Almonds",
  "Cocoa Powder",
  "Jaggery",
  "Natural Flavour",
  "Rock Salt",
];

export default function ProductCard() {
  const sectionRef = useRef(null);
  const detailRef = useRef(null);
  const productVisualRef = useRef(null);
  const detailSlotRef = useRef(null);
  const detailContentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const getProductTravel = () => {
        const product = productVisualRef.current.getBoundingClientRect();
        const slot = detailSlotRef.current.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        const scrollX = window.scrollX || window.pageXOffset;

        const productCenterX = product.left + scrollX + product.width / 2;
        const productCenterY = product.top + scrollY + product.height / 2;
        const slotCenterX = slot.left + scrollX + slot.width / 2;
        const slotCenterY = slot.top + scrollY + slot.height / 2;

        return {
          x: slotCenterX - productCenterX,
          y: slotCenterY - productCenterY,
        };
      };

      gsap.to(productVisualRef.current, {
        x: () => getProductTravel().x,
        y: () => getProductTravel().y,
        scale: 1.2,
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: detailRef.current,
          start: "top 88%",
          end: "top 18%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.fromTo(
        detailContentRef.current.querySelectorAll(".detail-copy"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: detailRef.current,
            start: "top 58%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="bg-[#fffdf8] px-5 py-20 text-[#5b301c]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="para-14 font-bold uppercase tracking-[0.22em] text-[#b87336]">
            Product Spotlight
          </p>
          <h2 className="heading-60 mt-3 font-black text-[#4a2415]">
            Ragi Malt Choco Almond
          </h2>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.86fr_1.22fr_0.92fr]">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#5a2a18] text-[#fff4df]">
                <Clock3 size={26} />
              </span>
              <div>
                <h3 className="subheading-20 font-black text-[#3d1e12]">
                  Ready in 4 Mins
                </h3>
                <p className="para-14 mt-1 font-medium text-[#7a4b31]">
                  Quick, warm, and smooth for everyday nourishment.
                </p>
              </div>
            </div>

            <div className="space-y-7">
              {steps.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4eadb] text-[#6b351f]">
                    <Icon size={22} strokeWidth={1.9} />
                  </div>
                  <div>
                    <h4 className="subheading-20 font-black text-[#4a2415]">
                      {title}
                    </h4>
                    <p className="para-14 mt-1 font-medium text-[#6f442d]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[590px] w-full max-w-[590px] items-center justify-center">
            <div
              ref={productVisualRef}
              className="relative z-20 h-[560px] w-full max-w-[540px] will-change-transform"
            >
              <Image
                src="/product.png"
                alt="The Health Farm Ragi Malt Choco Almond pack"
                fill
                sizes="(max-width: 768px) 92vw, 540px"
                className="object-contain"
              />
            </div>
          </div>

          <div className="space-y-6 lg:pt-5">
            <div>
              <h3 className="subheading-20 font-black text-[#3d1e12]">
                Why Sprouted is Better?
              </h3>
              <ul className="mt-5 space-y-3">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="para-14 flex items-center gap-3 font-semibold text-[#6a3c25]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4eadb] text-[#6b351f]">
                      <Leaf size={16} strokeWidth={1.9} />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="subheading-20 font-black text-[#3d1e12]">
                Nutritional Transparency
              </h3>

              <div className="mt-5 overflow-hidden rounded-lg border border-[#5b301c] bg-white">
                <table className="w-full text-left text-sm font-bold text-[#5b301c]">
                  <thead className="bg-[#5b301c] text-[#fff8eb]">
                    <tr>
                      <th className="px-4 py-3">Nutrient</th>
                      <th className="px-4 py-3">Per 100g</th>
                      <th className="px-4 py-3">Per Serving</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nutrition.map(([name, per100g, serving]) => (
                      <tr key={name} className="border-t border-[#eadcc6]">
                        <td className="px-4 py-3">{name}</td>
                        <td className="px-4 py-3">{per100g}</td>
                        <td className="px-4 py-3">{serving}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={detailRef}
          className="grid min-h-[760px] items-center gap-14 pt-24 lg:grid-cols-[0.88fr_1.12fr]"
        >
          <div
            ref={detailSlotRef}
            className="relative flex min-h-[560px] items-center justify-center"
            aria-hidden="true"
          >
            <div className="h-[620px] w-full max-w-[560px]" />
          </div>

          <div ref={detailContentRef} className="max-w-2xl">
            <p className="detail-copy para-14 font-bold uppercase tracking-[0.22em] text-[#b87336]">
              Ingredients & Info
            </p>
            <h3 className="detail-copy heading-60 mt-3 font-black text-[#4a2415]">
              Made With Familiar Goodness
            </h3>
            <p className="detail-copy para-14 mt-5 max-w-xl font-medium text-[#6f442d]">
              A quick chocolate ragi malt blend built around sprouted grains,
              almonds, cocoa, and lightly sweet jaggery for a smooth warm bowl.
            </p>

            <div className="detail-copy mt-9">
              <h4 className="subheading-20 font-black text-[#3d1e12]">
                Ingredients
              </h4>
              <div className="mt-5 flex flex-wrap gap-3">
                {ingredients.map((ingredient) => (
                  <span
                    key={ingredient}
                    className="para-14 rounded-md border border-[#d8b98b] px-4 py-2 font-semibold text-[#6a3c25]"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
