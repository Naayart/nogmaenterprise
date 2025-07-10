import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductSlider({ products }) {
  const [current, setCurrent] = useState(0);
  const visibleCount = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const navigate = useNavigate();
  const intervalRef = useRef();

  // Responsive visible count
  const [slidesToShow, setSlidesToShow] = useState(visibleCount);
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [products.length]);

  // Calculate visible products
  const getVisibleProducts = () => {
    if (products.length <= slidesToShow) return products;
    let start = current;
    let end = start + slidesToShow;
    if (end > products.length) {
      return [
        ...products.slice(start),
        ...products.slice(0, end - products.length),
      ];
    }
    return products.slice(start, end);
  };

  // Navigation to View Products page, scroll to product
  const handleImageClick = (product) => {
    navigate(`/view-product?highlight=${encodeURIComponent(product.name)}`);
    // Optionally, you can use a hash or query param to scroll to the product
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
  };
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-center gap-6">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition absolute left-0 top-1/2 -translate-y-1/2 z-10"
          aria-label="Previous products"
        >
          <span className="text-2xl">&#8592;</span>
        </button>
        {/* Images Only */}
        <div className="flex gap-6 w-full justify-center">
          {getVisibleProducts().map((product) => (
            <div
              key={product.id}
              className="min-w-[180px] max-w-[260px] flex-1 cursor-pointer rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl hover:scale-[1.04] transition-all duration-300"
              onClick={() => handleImageClick(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-contain w-full h-48 md:h-56 lg:h-64 transition-transform duration-300 hover:scale-105 bg-[#F9F9F9]"
              />
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition absolute right-0 top-1/2 -translate-y-1/2 z-10"
          aria-label="Next products"
        >
          <span className="text-2xl">&#8594;</span>
        </button>
      </div>
      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {products.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full border-2 border-[#FFD233] transition-all duration-300 ${
              idx === current ? "bg-[#FFD233] scale-110" : "bg-white/40"
            }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 