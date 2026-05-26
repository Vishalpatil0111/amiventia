import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/utils/Whatsapp";
import Navbar from "./components/navbar/NavbarClient";
import { CartProvider } from "./components/utils/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Amiventia - Wholesome Instant Foods for a Healthier You",
  description: "Discover nutritious, delicious instant food products crafted with traditional grains and natural ingredients. 100% healthy and natural.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
