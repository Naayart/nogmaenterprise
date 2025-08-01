import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ProductSlider({ products }) {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Responsive slides to show
  const getSlidesToShow = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  React.useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CARD_WIDTH = 270 + 24;
  const maxIndex = products.length - slidesToShow;
  const safeCurrent = Math.max(
    0,
    Math.min(current, maxIndex >= 0 ? maxIndex : 0)
  );

  return (
    <div className="relative w-full bg-white py-6">
      <div className="flex items-center justify-center gap-2">
        {/* Left Arrow
        <button
          onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
          className="p-2 rounded-full bg-green-700 shadow-lg hover:scale-110 transition border-4 border-white disabled:opacity-40 absolute left-2 top-1/2 -translate-y-1/2 z-10"
          aria-label="Previous products"
          disabled={safeCurrent === 0}
        >
          <FiChevronLeft className="text-white text-2xl" />
        </button> */}

        {/* Slider */}
        <div
          className="flex gap-6 w-full overflow-x-auto scrollbar-hide scroll-smooth px-8"
          style={{
            transform: `translateX(-${safeCurrent * CARD_WIDTH}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`flex flex-col items-center bg-white rounded-3xl shadow-lg min-w-[220px] max-w-[270px] flex-1 mx-2 transition-all duration-300 group border-l-neutral hover:shadow-2xl hover:scale-105${
                idx === safeCurrent + Math.floor(slidesToShow / 2)
                  // ? "border-transparent scale-105 z-20"
                  // : "border-transparent opacity-90"
              } `}
            >
              {/* Product Image */}
              <div className="w-full flex items-center justify-center pt-6 pb-3 px-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-36 md:h-44 lg:h-52 rounded-xl bg-white group-hover:scale-105 transition-transform duration-300 drop-shadow"
                />
              </div>
              {/* Product Info */}
              <div className="w-full px-5 pb-5 flex flex-col items-center">
                <div className="text-xs text-green-700 mb-1 uppercase tracking-wide font-semibold font-accent">
                  {product.category}
                </div>
                <div className="font-bold text-lg text-green-900 text-center truncate font-heading mb-1">
                  {product.name}
                </div>
                {/* Rating */}
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < (product.rating || 0)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <polygon points="10,1 12.59,7.36 19.51,7.36 13.97,11.63 16.56,17.99 10,13.72 3.44,17.99 6.03,11.63 0.49,7.36 7.41,7.36" />
                    </svg>
                  ))}
                </div>
                {/* Price */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-green-700 font-bold text-xl">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
                {/* Add to Cart Button */}
                <button
                  className="w-[60%] py-2 mt-1 rounded-full bg-green-700 text-white font-semibold shadow hover:bg-yellow-500 hover:text-green-900 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add your add-to-cart logic here
                  }}
                >
                      Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {/* <button
          onClick={() =>
            setCurrent((prev) =>
              Math.min(prev + 1, maxIndex >= 0 ? maxIndex : 0)
            )
          }
          className="p-2 rounded-full bg-green-700 shadow-lg hover:scale-110 transition border-4 border-white disabled:opacity-40 absolute right-2 top-1/2 -translate-y-1/2 z-10"
          aria-label="Next products"
          disabled={safeCurrent === maxIndex || products.length <= slidesToShow}
        >
          
        </button> */}
      </div>
    </div>
  );
}
