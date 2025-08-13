import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductSlider({ products }) {
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  const navigate = useNavigate();

  function getSlidesToShow() {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full bg-white py-6 overflow-x-auto scrollbar-hide">
      <div className="flex gap-6 px-4 md:px-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 flex flex-col items-center bg-white rounded-3xl shadow-lg w-[220px] md:w-[250px] lg:w-[270px] transition-all duration-300 group hover:shadow-2xl hover:scale-105"
          >
            {/* Product Image */} 
            <div className="w-full flex items-center justify-center pt-6 pb-3 px-4">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain w-full h-36 md:h-44 lg:h-52 rounded-xl  group-hover:scale-105 transition-transform duration-300 drop-shadow"
              />
            </div>

            {/* Product Info */}
            <div className="w-full px-5 pb-5 flex flex-col items-center">
              <div className="text-xs text-green-700 mb-1 uppercase tracking-wide font-semibold font-accent opacity-70">
                {product.category}
              </div>
              <div className="font-bold text-lg text-black text-center truncate font-heading mb-1">
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
                <span className="text-green-700 font-bold">
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
    </div>
  );
}
