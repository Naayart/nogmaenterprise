import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiEye } from "react-icons/fi";

export default function ProductSlider({ products }) {
  const [current, setCurrent] = useState(0);
  const slidesToShow =
    window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const navigate = useNavigate();
  const CARD_WIDTH = 270 + 32;
  const maxIndex = products.length - slidesToShow;
  const safeCurrent = Math.max(
    0,
    Math.min(current, maxIndex >= 0 ? maxIndex : 0)
  );
  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
          className="p-3 rounded-full bg-green-700 shadow-lg hover:scale-110 transition absolute left-0 top-1/2 -translate-y-1/2 z-10 border-4 border-white"
          aria-label="Previous products"
          disabled={safeCurrent === 0}
        >
          <FiChevronLeft className="text-white text-2xl" />
        </button>
        <div
          className="flex gap-8 w-full justify-start transition-transform duration-500"
          style={{ transform: `translateX(-${safeCurrent * CARD_WIDTH}px)` }}
        >
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`relative flex flex-col items-center justify-between min-w-[210px] max-w-[270px] flex-1 cursor-pointer rounded-3xl transition-all duration-400 group ${
                idx === safeCurrent + Math.floor(slidesToShow / 2)
                  ? "scale-105 shadow-2xl z-20 bg-white border-2 border-yellow-400"
                  : "scale-95 opacity-80 z-10 bg-white border"
              }`}
              onClick={() => navigate("/all-product")}
            >
              <div className="w-full flex items-center justify-center pt-8 pb-4 px-4 z-10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-40 md:h-48 lg:h-56 transition-transform duration-300 group-hover:scale-105 drop-shadow-xl"
                />
              </div>
              <div className="w-full px-6 pb-6 flex flex-col items-center z-10">
                <div className="text-xs text-green-700 mb-1 uppercase tracking-wide font-semibold font-accent">
                  {product.category}
                </div>
                <div className="font-bold text-lg text-green-900 text-center truncate font-heading mb-1">
                  {product.name}
                </div>
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < (product.rating || 0)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <polygon points="10,1 12.59,7.36 19.51,7.36 13.97,11.63 16.56,17.99 10,13.72 3.44,17.99 6.03,11.63 0.49,7.36 7.41,7.36" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-green-700 font-bold text-xl">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
                
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() =>
            setCurrent((prev) =>
              Math.min(prev + 1, maxIndex >= 0 ? maxIndex : 0)
            )
          }
          className="p-3 rounded-full bg-green-700 shadow-lg hover:scale-110 transition absolute right-0 top-1/2 -translate-y-1/2 z-10 border-4 border-white"
          aria-label="Next products"
          disabled={safeCurrent === maxIndex || products.length <= slidesToShow}
        >
          <FiChevronRight className="text-white text-2xl" />
        </button>
      </div>
    </div>
  );
}
