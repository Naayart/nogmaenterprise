import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, addToCart }) {
  const navigate = useNavigate();
  const handleBuyNow = (e) => {
    e.stopPropagation(); // Prevent card click propagation if needed
    addToCart(product);
  };

  const handleCardClick = () => {
    navigate(`/product-detail?id=${product.id}`);
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer min-h-[370px]"
      onClick={handleCardClick}
    >
      <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-medium font-accent">
            {product.category}
          </div>
          <div className="font-bold text-lg text-[#19213a] text-center truncate font-heading">
            {product.name}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-2 gap-2">
          <span className="text-[#048404] font-bold text-xl mb-1 font-accent">
            {product.price}
          </span>
          <button
            onClick={handleBuyNow}
            className="px-6 py-2  bg-[#A424F4] text-white hover:bg-[#C4B4E4] transition-colors duration-200 shadow-sm text-base flex items-center justify-center font-medium font-accent"
            aria-label="Add to cart"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}