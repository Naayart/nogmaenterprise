import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard({ product, addToCart }) {
  const handleBuyNow = (e) => {
    e.stopPropagation(); // Prevent card click propagation if needed
    addToCart(product);
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 group cursor-pointer min-h-[370px]"
    >
      <div className="w-full aspect-[4/3] bg-[#F9F9F9] flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-medium">
            {product.category}
          </div>
          <div className="font-bold text-lg text-[#19213a] mb-2 truncate">
            {product.name}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-[#2D5A27] font-bold text-xl">
            {product.price}
          </span>
          <button
            onClick={handleBuyNow}
            className="p-2 rounded-full bg-[#8BC34A] text-white hover:bg-[#689F38] transition-colors duration-200 shadow-sm text-base flex items-center justify-center"
            aria-label="Add to cart"
          > 
          Add to Cart</button>
        </div>
      </div>
    </div>
  );
}