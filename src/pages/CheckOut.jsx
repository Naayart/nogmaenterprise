import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Checkout({ cart = [] }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
    delivery: "standard",
    payment: "cod", // cod = cash on delivery
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
    const qty = item.qty || 1;
    return sum + (isNaN(price) ? 0 : price * qty);
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit order logic here
    alert("Order placed! (Implement submission logic)");
  };

  return (
    <>
      <Navbar cart={cart} />
      <div className="pt-24 px-4 md:px-8 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center mb-2">Checkout</h1>
          <p className="text-center text-gray-500 mb-8">Home &mdash; <span className="text-black font-semibold">Checkout</span></p>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Billing Info */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="name" onChange={handleChange} value={form.name} required placeholder="Full Name" className="border rounded p-3 w-full" />
                <input name="email" onChange={handleChange} value={form.email} type="email" required placeholder="Email Address" className="border rounded p-3 w-full" />
                <input name="phone" onChange={handleChange} value={form.phone} required placeholder="Phone Number" className="border rounded p-3 w-full" />
                <input name="city" onChange={handleChange} value={form.city} required placeholder="City / Town" className="border rounded p-3 w-full" />
              </div>
              <textarea name="address" onChange={handleChange} value={form.address} required placeholder="Full Address" className="border rounded p-3 w-full mt-4" rows={3} />

              {/* Delivery Method */}
              <h2 className="text-xl font-bold mt-8 mb-2">Delivery Method</h2>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="delivery" value="standard" checked={form.delivery === "standard"} onChange={handleChange} />
                  Standard (₵0)
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="delivery" value="express" onChange={handleChange} />
                  Express (₵20)
                </label>
              </div>

              {/* Payment Method */}
              <h2 className="text-xl font-bold mt-8 mb-2">Payment Method</h2>
              <div className="flex gap-4 mb-10">
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" value="cod" checked={form.payment === "cod"} onChange={handleChange} />
                  Cash on Delivery
                </label>
                <label className="flex items-center gap-2 ">
                  <input type="radio" name="payment" value="card" onChange={handleChange} />
                  Card (Coming Soon)
                </label>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <ul className="divide-y divide-gray-200 mb-4">
                {cart.map((item, idx) => {
                  const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
                  const qty = item.qty || 1;
                  return (
                    <li key={idx} className="flex justify-between py-2">
                      <span>{item.name} x {qty}</span>
                      <span>₵{(price * qty).toFixed(2)}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="flex justify-between font-bold text-lg border-t pt-4">
                <span>Total:</span>
                <span>₵{(total + (form.delivery === "express" ? 20 : 0)).toFixed(2)}</span>
              </div>
              <button type="submit" className="mt-6 w-full bg-[#8BC34A] text-white py-3 rounded font-bold hover:bg-[#689F38] transition">
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
