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
          {/*  <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-medium font-Montserrat">
            {product.category}
          </div> */}
          <div className="font-bold text-lg text-[#19213a] text-center truncate font-Outfit">
            {product.name}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-2 gap-2">
          <span className="text-green-700 font-bold ">{product.price}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart();
            }}
            className="w-[60%] py-2 mt-1 rounded-full bg-green-700 text-white font-semibold shadow hover:bg-yellow-500 hover:text-green-900 transition-colors duration-200"
            aria-label="Add to cart"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
