import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiEye } from "react-icons/fi";

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
    }, 3500);
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

  // Navigation to all products
  const handleView = () => {
    navigate('/all-product');
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
  };
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  // Highlight the center product
  const visibleProducts = getVisibleProducts();
  const centerIdx = Math.floor(visibleProducts.length / 2);

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-center gap-6">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-gradient-to-br from-[#FFD233] to-[#046404] shadow-lg hover:scale-110 hover:from-[#046404] hover:to-[#FFD233] transition absolute left-0 top-1/2 -translate-y-1/2 z-10 border-4 border-white"
          aria-label="Previous products"
        >
          <FiChevronLeft className="text-white text-2xl" />
        </button>
        {/* Product Cards */}
        <div className="flex gap-8 w-full justify-center">
          {visibleProducts.map((product, idx) => (
            <div
              key={product.id}
              className={`relative flex flex-col items-center justify-between min-w-[210px] max-w-[270px] flex-1 cursor-pointer rounded-3xl overflow-visible transition-all duration-400 group 
                ${idx === centerIdx ? "scale-105 shadow-2xl z-20 border-4 border-[#FFD233] bg-gradient-to-br from-[#fffbe6] to-[#f7f7fa]" : "scale-95 opacity-80 z-10 bg-gradient-to-br from-[#f7f7fa] to-[#fffbe6]"}
              `}
              style={{ boxShadow: idx === centerIdx ? '0 8px 32px 0 rgba(34,34,34,0.18)' : undefined }}
              onClick={handleView}
            >
              {/* Decorative background */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#FFD233]/30 to-[#046404]/10 rounded-full blur-2xl z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#046404]/20 to-[#FFD233]/10 rounded-full blur-2xl z-0"></div>
              {/* Product Image */}
              <div className="w-full flex items-center justify-center pt-8 pb-4 px-4 z-10">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`object-contain w-full h-40 md:h-48 lg:h-56 transition-transform duration-300 group-hover:scale-105 drop-shadow-xl ${idx === centerIdx ? "" : "grayscale"}`}
                />
              </div>
              {/* Product Info */}
              <div className="w-full px-6 pb-6 flex flex-col items-center z-10">
                <div className="text-xs text-[#046404] mb-1 uppercase tracking-wide font-semibold font-accent">
                  {product.category}
                </div>
                <div className="font-bold text-lg text-[#19213a] text-center truncate font-heading mb-1">
                  {product.name}
                </div>
                <span className="text-[#048404] font-bold text-xl mb-2 font-accent">
                  {product.price}
                </span>
                <button
                  onClick={handleView}
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#FFD233] to-[#046404] text-white font-semibold shadow hover:from-[#046404] hover:to-[#FFD233] hover:scale-105 transition-all duration-200 mt-2"
                  aria-label="View all products"
                >
                  <FiEye /> View All
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-gradient-to-br from-[#FFD233] to-[#046404] shadow-lg hover:scale-110 hover:from-[#046404] hover:to-[#FFD233] transition absolute right-0 top-1/2 -translate-y-1/2 z-10 border-4 border-white"
          aria-label="Next products"
        >
          <FiChevronRight className="text-white text-2xl" />
        </button>
      </div>
    </div>
  );
} 