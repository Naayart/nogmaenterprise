import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import { useState, useEffect } from "react";
import ProductSlider from "../components/ProductSlider";
import TestimonialSection from "../components/TestimonialSection";
import tombrown from "../assets/images/Tom brown.png";
import sheaButterImg from "../assets/images/Sheabutter.png";
import sheaButterImgM from "../assets/images/Sheabutter-Medium.jpg";
import peanutButterImg from "../assets/images/Groundnut Paste.png";
import peanutImg from "../assets/images/Peanut-1.png"; // or the correct filename
import liquidSoapImg from "../assets/images/Liquid Soap.png";
import barSoapImg from "../assets/images/Bar-soap.jpeg";
import powderedPepperImg from "../assets/images/Powdered Pepper.jpeg";
import watermarkLogo from "../assets/images/logo.jpeg";
import { Link, useLocation } from "react-router-dom";
import CategorySection from "../components/CategorySection";


const featuredProducts = [
  {
    id: 1,
    image: sheaButterImg,
    category: "Wellness",
    name: "Sheabutter",
    price: "₵20.00",
    oldPrice: "₵25.00",
    discount: 20,
    rating: 4,
  },
  {
    id: 2,
    image: peanutButterImg,
    category: "Food",
    name: "Groundnut paste",
    price: "₵10.00",
    oldPrice: "₵12.00",
    discount: 17,
    rating: 5,
  },
  {
    id: 3,
    image: peanutImg,
    category: "Food",
    name: "Peanut",
    price: "₵25.00",
    oldPrice: "₵30.00",
    discount: 17,
    rating: 4,
  },
  {
    id: 4,
    image: liquidSoapImg,
    category: "Wellness",
    name: "Liquid Soap",
    price: "₵15.00",
    oldPrice: "₵18.00",
    discount: 17,
    rating: 4,
  },
  {
    id: 5,
    image: barSoapImg,
    category: "Wellness",
    name: "Bar Soap",
    price: "₵8.00",
    oldPrice: "₵10.00",
    discount: 20,
    rating: 3,
  },
  {
    id: 6,
    image: powderedPepperImg,
    category: "Food",
    name: "Powdered Pepper",
    price: "₵12.00",
    oldPrice: "₵15.00",
    discount: 20,
    rating: 5,
  },
  {
    id: 7,
    image: tombrown,
    category: "Food",
    name: "Tombrown",
    price: "₵25.00",
    oldPrice: "₵30.00",
    discount: 17,
    rating: 4,
  },
  {
    id: 8,
    image: sheaButterImgM,
    category: "Wellness",
    name: "Sheabutter - Large",
    price: "₵35.00",
    oldPrice: "₵40.00",
    discount: 13,
    rating: 5,
  },
  {
    id: 9,
    image: peanutButterImg,
    category: "Food",
    name: "Groundnut paste - Family Pack",
    price: "₵18.00",
    oldPrice: "₵22.00",
    discount: 18,
    rating: 4,
  },
  {
    id: 10,
    image: barSoapImg,
    category: "Wellness",
    name: "Bar Soap - Scented",
    price: "₵10.00",
    oldPrice: "₵13.00",
    discount: 23,
    rating: 5,
  },
  {
    id: 11,
    image: powderedPepperImg,
    category: "Food",
    name: "Powdered Pepper - Hot",
    price: "₵14.00",
    oldPrice: "₵17.00",
    discount: 18,
    rating: 4,
  },
  {
    id: 12,
    image: tombrown,
    category: "Food",
    name: "Tombrown - Small Pack",
    price: "₵12.00",
    oldPrice: "₵15.00",
    discount: 20,
    rating: 3,
  },
];
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight font-Accent">
            Natural Ghanaian Goodness{" "}
            <span className="text-yellow-400">From</span> Kitchen to Care!
          </h1>
          <p className="text-lg text-white mb-8 font-Accent">
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
      <section
        id="featured-products"
        className="max-w-7xl mx-auto px-4 py-12 bg"
      >
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 ">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 font-heading text-center md:text-left">
            Featured Products
          </h2>
          <Link to="/all-product" className="text-green-700 hover:text-green-900">View All Products</Link>
        </div>
        <p>Discover top picks for you</p>
        <ProductSlider products={featuredProducts.slice(0, 4)} />
      </section>
      <TestimonialSection />
       <NewsLetter />
      <Footer />
    </>
  );
}
