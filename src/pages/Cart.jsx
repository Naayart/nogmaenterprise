import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"; // FIXED

export default function Cart({ cart = [], setCart }) {
  const handleRemove = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };
  const handleQty = (index, delta) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, qty: Math.max(1, (item.qty || 1) + delta) }
          : item
      )
    );
  };
  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
    const qty = item.qty || 1;
    return sum + (isNaN(price) ? 0 : price * qty);
  }, 0);

  return (
    <>
      
      <div className="min-h-screen bg-[#fff] pt-24 px-2 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center mb-2 mt-4">
            Shopping Cart
          </h1>
          <div className="text-center text-gray-500 mb-10">
            Home &mdash;{" "}
            <span className="text-black font-semibold">Shopping Cart</span>
          </div>
          {cart.length === 0 ? (
            <div className="text-center text-gray-500">Your cart is empty.</div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
              <div className="hidden md:grid grid-cols-12 gap-4 border-b pb-4 mb-4">
                <div className="col-span-5 font-bold text-lg">Products</div>
                <div className="col-span-2 font-bold text-lg text-center">
                  Price
                </div>
                <div className="col-span-3 font-bold text-lg text-center">
                  Quantity
                </div>
                <div className="col-span-2 font-bold text-lg text-right">
                  Total
                </div>
              </div>
              <ul className="divide-y divide-gray-200">
                {cart.map((item, idx) => {
                  const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
                  const qty = item.qty || 1;
                  return (
                    <li
                      key={idx}
                      className="grid grid-cols-2 md:grid-cols-12 gap-4 items-center py-4"
                    >
                      {/* Product info */}
                      <div className="col-span-1 md:col-span-5 flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded bg-gray-100"
                        />
                        <div>
                          <div className="font-semibold text-[#2D5A27]">
                            {item.name}
                          </div>
                          <div className="text-gray-500 text-sm">
                            {item.category}
                          </div>
                        </div>
                      </div>
                      {/* Price */}
                      <div className="hidden md:block col-span-2 text-center font-bold text-[#2D5A27]">
                        ₵{price.toFixed(2)}
                      </div>
                      {/* Quantity controls */}
                      <div className="col-span-1 md:col-span-3 flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleQty(idx, -1)}
                          className="w-8 h-8 rounded bg-gray-100 text-xl font-bold hover:bg-gray-200"
                        >
                          -
                        </button>
                        <span className="px-3 text-lg font-semibold">
                          {qty}
                        </span>
                        <button
                          onClick={() => handleQty(idx, 1)}
                          className="w-8 h-8 rounded bg-gray-100 text-xl font-bold hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                      {/* Total */}
                      <div className="col-span-1 md:col-span-2 text-right font-bold text-[#2D5A27]">
                        ₵{(price * qty).toFixed(2)}
                      </div>
                      {/* Remove */}
                      <div className="col-span-1 flex justify-end">
                        <button
                          onClick={() => handleRemove(idx)}
                          className="text-gray-400 hover:text-red-500 text-2xl font-bold"
                        >
                          &times;
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
              {/* Cart summary */}
              <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-6 ">
                <Link
                  to={"/all-product"}
                  className="px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded uppercase tracking-wider hover:bg-gray-200 w-full md:w-auto mb-2 mt-20 md:mb-0"
                >
                  Continue Shopping
                </Link>
                <div className="bg-gray-50 rounded-lg p-6 w-full md:w-1/3 md:ml-auto">
                  <div className="font-bold text-lg mb-2">Cart Total</div>
                  {/* <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span className="font-bold text-red-600">₵{total.toFixed(2)}</span>
                  </div> */}
                  <div className="flex justify-between mb-4">
                    <span>Total</span>
                    <span className="font-bold text-red-600">
                      ₵{total.toFixed(2)}
                    </span>
                  </div>
                  <Link
                    to={{ pathname: "/checkout", state: { cart } }} 
                    className="w-full py-3 px-4 bg-[#8BC34A] text-white font-bold rounded hover:bg-[#689F38] transition"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </>
  );
}
