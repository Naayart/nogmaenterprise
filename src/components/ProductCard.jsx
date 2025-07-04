import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard({ product }) {
  return (
    <div className="bg-[#19213a] rounded-xl shadow-md overflow-hidden flex flex-col">
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-sm text-gray-400 mb-1">{product.category}</div>
          <div className="font-bold text-lg text-white mb-2">{product.name}</div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-[#FFD233] font-bold text-lg">{product.price}</span>
          <FiShoppingCart className="text-[#FFD233] text-xl" />
        </div>
      </div>
    </div>
  );
}