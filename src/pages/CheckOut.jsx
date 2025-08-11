import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import emailjs from "@emailjs/browser"; 

export default function Checkout({ cart = [] }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
    delivery: "standard",
    payment: "cod",
  });

  const [sending, setSending] = useState(false);

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
    setSending(true);

    const orderItems = cart
      .map((item) => `${item.name} x${item.qty || 1}`)
      .join(", ");

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: `${form.address}, ${form.city}`,
      delivery: form.delivery,
      payment: form.payment,
      total: (total + (form.delivery === "express" ? 20 : 0)).toFixed(2),
      items: orderItems,
    };

    emailjs
      .send(
        "service_onkhafp",
        "template_nny1u2s",
        templateParams,
        "1BZlt3DgCz3Hay6Rw"
      )
      .then((res) => {
        alert("Order placed and email sent successfully!");
        setSending(false);
      })
      .catch((err) => {
        alert("There was an error sending your order.");
        setSending(false);
      });
  };

  return (
    <>
      <Navbar cart={cart} />
      <div className="pt-24 px-4 md:px-8 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center mb-2 text-[#046404]">
            Checkout
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Home &mdash;{" "}
            <span className="text-black font-semibold">Checkout</span>
          </p>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Billing Info */}
            <div className="md:col-span-2 bg-white rounded-3xl shadow-lg p-8 border border-[#046404]/10">
              <h2 className="text-2xl font-bold mb-4 text-[#046404]">
                Billing Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  onChange={handleChange}
                  value={form.name}
                  required
                  placeholder="Full Name"
                  className="border border-[#046404]/30 rounded p-3 w-full focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  name="email"
                  onChange={handleChange}
                  value={form.email}
                  type="email"
                  required
                  placeholder="Email Address"
                  className="border border-[#046404]/30 rounded p-3 w-full focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  name="phone"
                  onChange={handleChange}
                  value={form.phone}
                  required
                  placeholder="Phone Number"
                  className="border border-[#046404]/30 rounded p-3 w-full focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  name="city"
                  onChange={handleChange}
                  value={form.city}
                  required
                  placeholder="City / Town"
                  className="border border-[#046404]/30 rounded p-3 w-full focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <textarea
                name="address"
                onChange={handleChange}
                value={form.address}
                required
                placeholder="Full Address"
                className="border border-[#046404]/30 rounded p-3 w-full mt-4 focus:ring-2 focus:ring-yellow-400"
                rows={3}
              />

              {/* Delivery Method */}
              <h2 className="text-xl font-bold mt-8 mb-2 text-[#046404]">
                Delivery Method
              </h2>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="delivery"
                    value="standard"
                    checked={form.delivery === "standard"}
                    onChange={handleChange}
                  />
                  <span className="text-[#046404]">Standard (₵0)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="delivery"
                    value="express"
                    checked={form.delivery === "express"}
                    onChange={handleChange}
                  />
                  <span className="text-yellow-600">Express (₵20)</span>
                </label>
              </div>

              {/* Payment Method */}
              <h2 className="text-xl font-bold mt-8 mb-2 text-[#046404]">
                Payment Method
              </h2>
              <div className="flex gap-4 mb-10">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={form.payment === "cod"}
                    onChange={handleChange}
                  />
                  <span className="text-[#046404]">Cash on Delivery</span>
                </label>
                <label className="flex items-center gap-2 ">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={form.payment === "card"}
                    onChange={handleChange}
                  />
                  <span className="text-yellow-600">Card (Coming Soon)</span>
                </label>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-[#F9FAFB] p-8 rounded-3xl shadow-lg border border-yellow-400/20">
              <h2 className="text-xl font-bold mb-4 text-[#046404]">
                Order Summary
              </h2>
              <ul className="divide-y divide-gray-200 mb-4">
                {cart.map((item, idx) => {
                  const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
                  const qty = item.qty || 1;
                  return (
                    <li key={idx} className="flex justify-between py-2">
                      <span>
                        {item.name} x {qty}
                      </span>
                      <span>₵{(price * qty).toFixed(2)}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="flex justify-between font-bold text-lg border-t pt-4">
                <span>Total:</span>
                <span>
                  ₵{(total + (form.delivery === "express" ? 20 : 0)).toFixed(2)}
                </span>
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-[#046404] text-white py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-[#046404] transition"
                disabled={sending}
              >
                {sending ? "Placing Order..." : "Place Order"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
