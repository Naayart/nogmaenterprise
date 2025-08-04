import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import { useState, useEffect } from "react";
import TestimonialSection from "../components/TestimonialSection";
import tombrown from "../assets/images/Tom brown.png";
import sheaButterImg from "../assets/images/Sheabutter.png";
import peanutButterImg from "../assets/images/Groundnut Paste.png";
import watermarkLogo from "../assets/images/logo.jpeg";
import { Link, useLocation } from "react-router-dom";
import CategorySection from "../components/CategorySection";
import FeaturedProductSection from "../components/FeaturedProductSection";



const images = [
  { src: tombrown, alt: "Tom Brown" },
  { src: sheaButterImg, alt: "Shea Butter" },
  { src: peanutButterImg, alt: "Peanut Butter" },
];

export default function Home({ addToCart, cart }) {
  const [current, setCurrent] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      3000
    );
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    if (location.state && location.state.scrollTo === "featured-products") {
      const section = document.getElementById("featured-products");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  
  return (
    <>
      <Navbar cart={cart} />
      <section className="relative min-h-[70vh] flex flex-col md:flex-row items-center justify-between px-8 py-16 overflow-hidden  pt-20 mt-15">
        <img
          src={watermarkLogo}
          alt="Logo background"
          className="absolute inset-0 m-auto w-[90vw] max-w-5xl opacity-10 pointer-events-none select-none z-0 mt-15"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div className="max-w-xl z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight ">
            Natural Ghanaian Goodness{" "}
            <span className="text-yellow-400">From</span> Kitchen to Care!
          </h1>
          <p className="text-lg text-gray-600 mb-8 ">
            Healthy products proudly made in Ghana.
          </p>
          <div className="flex gap-4">
            <Link
              to="/all-product"
              className="bg-yellow-400 text-green-900 font-bold px-6 py-3 rounded shadow hover:bg-yellow-500 transition font-Montserrat italic"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="bg-white border border-green-700 text-green-700 font-bold px-6 py-3 rounded-md hover:bg-green-50 transition font-Montserrat italic"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="relative mt-10 md:mt-0 md:ml-10">
          <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-4 border-yellow-400 z-0"></div>
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="relative rounded-2xl shadow-xl w-[320px] md:w-[380px] z-10 transition-all duration-1000 object-cover"
          />
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((img, idx) => (
              <button
                key={img.alt}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  idx === current
                    ? "bg-yellow-400 border-yellow-400 scale-125 shadow"
                    : "bg-white/30 border-white/40"
                }`}
                onClick={() => setCurrent(idx)}
                aria-label={`Show ${img.alt}`}
              />
            ))}
          </div>
        </div>
      </section>
      <CategorySection />
      <FeaturedProductSection addToCart={addToCart} />
      <TestimonialSection />
       <NewsLetter />
      <Footer />
    </>
  );
}
