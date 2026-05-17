import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[620px] overflow-hidden bg-[#2a150c] text-white md:min-h-screen"
    >
      <Image
        src="/herobg.png"
        alt="Chocolate ragi malt bowl with almonds on a wooden table"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center center" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,12,6,0.88)_0%,rgba(43,18,9,0.74)_34%,rgba(42,18,9,0.2)_68%,rgba(20,8,4,0.16)_100%)]" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-7xl items-center px-6 pb-14 pt-28 md:min-h-screen md:px-10 md:pt-32 lg:px-14">
        <div className="max-w-[620px]">
          <h1 className="text-[44px] font-extrabold leading-[0.98] tracking-[-0.025em] text-white drop-shadow-xl sm:text-6xl md:text-[76px] lg:text-[72px]">
            Nourish Your Soul with{" "}
            <span className="text-[#f29a38]">Ancient Grains</span>
          </h1>

          <p className="mt-5 max-w-[540px] text-base font-semibold leading-relaxed text-white/82 md:text-lg">
            Discover our range of nutritious, delicious instant food products
            crafted with traditional grains and natural ingredients. Quick to
            prepare, perfect for your busy lifestyle.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-lg bg-[#f2a03b] px-7 py-3.5 text-sm font-extrabold text-[#251208] shadow-[0_14px_30px_rgba(0,0,0,0.25)] transition hover:bg-[#ffb457]"
            >
              View Products
            </a>
            <a
              href="#about"
              className="rounded-lg border border-white/45 bg-white/5 px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm transition hover:bg-white/12"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
