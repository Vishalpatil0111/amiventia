import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = ["Home", "Products", "Shop", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-[#f8ead4] px-5 pt-16 text-[#5b301c]">
      <div className="mx-auto grid max-w-7xl gap-10 border-b border-[#d8b98b] pb-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <h2 className="text-3xl font-black tracking-[-0.02em] text-[#4a2415]">
            Amiventia
          </h2>
          <p className="para-14 mt-4 max-w-sm font-medium text-[#7a4b31]">
            Wholesome instant foods crafted with traditional grains, natural
            ingredients, and everyday convenience.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Mail, Phone].map((Icon, index) => (
              <a
                key={index}
                href="#contact"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#6b351f] transition hover:bg-[#f2a03b] hover:text-[#2a120a]"
                aria-label="Contact Amiventia"
              >
                <Icon size={19} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="subheading-20 font-black text-[#4a2415]">
            Explore
          </h3>
          <div className="mt-5 grid gap-3">
            {footerLinks.map((link) => (
              <a
                key={link}
                href={
                  link === "Home"
                    ? "#home"
                    : link === "Shop"
                    ? "#shop"
                    : `#${link.toLowerCase()}`
                }
                className="para-14 font-semibold text-[#7a4b31] transition hover:text-[#b87336]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="subheading-20 font-black text-[#4a2415]">
            Get in Touch
          </h3>
          <div className="mt-5 grid gap-4">
            <p className="para-14 flex gap-3 font-medium text-[#7a4b31]">
              <Mail className="mt-1 shrink-0 text-[#b87336]" size={18} />
              orders@amiventia.com
            </p>
            <p className="para-14 flex gap-3 font-medium text-[#7a4b31]">
              <Phone className="mt-1 shrink-0 text-[#b87336]" size={18} />
              +91 98765 43210
            </p>
            <p className="para-14 flex gap-3 font-medium text-[#7a4b31]">
              <MapPin className="mt-1 shrink-0 text-[#b87336]" size={18} />
              Made in India, delivered fresh.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-3 py-6 text-sm font-semibold text-[#7a4b31] md:flex-row md:items-center md:justify-between">
        <p>© 2026 Amiventia. All rights reserved.</p>
        <p>Crafted for wholesome everyday nourishment.</p>
      </div>
    </footer>
  );
}
