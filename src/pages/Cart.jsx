import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cart({ cart = [], setCart }) {
  const handleRemove = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };
  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#F7E5A4] pt-24 px-4">
      <h1 className="text-3xl font-bold mb-8 text-[#2D5A27] text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <ul className="divide-y divide-gray-200">
            {cart.map((item, idx) => (
              <li key={idx} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <div className="font-semibold text-[#2D5A27]">{item.name}</div>
                    <div className="text-gray-500 text-sm">{item.category}</div>
                    <div className="text-[#FFD233] font-bold">{item.price}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(idx)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <span className="font-bold text-lg text-[#2D5A27]">Total:</span>
            <span className="font-bold text-lg text-[#FFD233]">₵{total.toFixed(2)}</span>
          </div>
          <button className="w-full mt-8 py-3 bg-[#D4AF37] text-white font-bold rounded hover:bg-[#B8860B] transition">
            Checkout
          </button>
        </div>
      )}
      <Footer />
    </div>
    </>
  );
}
