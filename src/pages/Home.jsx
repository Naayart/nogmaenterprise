import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import tombrown from "../assets/images/Tom brown.jpeg";
import sheaButterImg from "../assets/images/Sheabutter.jpeg";
import peanutImg from "../assets/images/Peanut.jpeg";
import peanutButterImg from "../assets/images/Groundnut paste.png";
import liquidSoapImg from "../assets/images/Liquid Soap.jpeg";
import barSoapImg from "../assets/images/Bar-soap.jpeg";
import powderedPepperImg from "../assets/images/Powdered pepper.jpeg";
import watermarkLogo from "../assets/images/logo.jpeg";

const images = [
  { src: tombrown, alt: "Tom Brown" },
  { src: sheaButterImg, alt: "Shea Butter" },
  { src: peanutButterImg, alt: "Peanut Butter" },
];

const products = [
  {
    id: 1,
    image: sheaButterImg,
    category: "Wellness",
    name: "Sheabutter",
    price: "₵20.00",
  },
  {
    id: 2,
    image: peanutButterImg,
    category: "Food",
    name: "Groundnut paste",
    price: "₵10.00",
  },
  {
    id: 3,
    image: peanutImg,
    category: "Food",
    name: "Peanut",
    price: "₵25.00",
  },
  {
    id: 4,
    image: liquidSoapImg,
    category: "Wellness",
    name: "Liquid Soap",
    price: "₵15.00",
  },
  {
    id: 5,
    image: barSoapImg,
    category: "Wellness",
    name: "Bar Soap",
    price: "₵8.00",
  },
  {
    id: 6,
    image: powderedPepperImg,
    category: "Food",
    name: "Powdered Pepper",
    price: "₵12.00",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative min-h-[70vh] flex flex-col md:flex-row items-center justify-between px-8 py-16 overflow-hidden bg-[#222]">
        {/* Logo as background */}
        <img
          src={watermarkLogo}
          alt="Logo background"
          className="absolute inset-0 m-auto w-[90vw] max-w-5xl opacity-10 pointer-events-none select-none z-0"
          style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        />
        {/* Text Content */}
        <div className="max-w-xl z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow">
            Experience the <span className="text-[#FFD233]">Richness</span> Ghanaian Products
          </h1>
          <p className="text-lg text-white/90 mb-8 drop-shadow">
            Naturally healthy and organic products delivered directly to your doorstep. Proudly made in Ghana.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#FFD233] text-[#222] font-bold px-6 py-3 rounded-md shadow hover:bg-[#e6b800] transition">Shop Now</button>
            <button className="bg-white/10 border border-white text-white font-bold px-6 py-3 rounded-md hover:bg-white/20 transition">Learn More</button>
          </div>
        </div>
        {/* Image Slider */}
        <div className="relative mt-10 md:mt-0 md:ml-10">
          <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-8 border-[#FFD233] z-0"></div>
          <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-8 border-[#7c0a02] z-0"></div>
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="relative rounded-2xl shadow-lg w-[320px] md:w-[380px] z-10 transition-all duration-700 object-cover"
          />
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((img, idx) => (
              <button
                key={img.alt}
                className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-[#FFD233] ${
                  idx === current ? "bg-[#FFD233] scale-110" : "bg-white/40"
                }`}
                onClick={() => setCurrent(idx)}
                aria-label={`Show ${img.alt}`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Product Cards Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-[#19213a]">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
}
