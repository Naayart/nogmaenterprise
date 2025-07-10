import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
    <Navbar />
    <section className="min-h-screen bg-[#F09A1A] py-16 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-white mb-2 text-center">Get in Touch</h1>
      <p className="text-lg text-gray-300 mb-10 text-center">
        Have questions about our products or services? We're here to help!
      </p>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-[#999eac] rounded-2xl p-8 flex flex-col gap-6 shadow">
          <h2 className="text-xl font-bold text-black mb-4">Contact Information</h2>
          <div className="flex items-center gap-4 text-[#FFD233]">
            <FiMail size={28} />
            <div>
              <div className="font-bold text-lg text-white">Email</div>
              <div className="text-black">akunyarahelenakunyara@gmail.com</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[#FFD233]">
            <FiPhone size={28} />
            <div>
              <div className="font-bold text-lg text-white">Phone</div>
              <div className="text-black">+233 50 594 4839 / +233 25 686 9185</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[#FFD233]">
            <FiMapPin size={28} />
            <div>
              <div className="font-bold text-lg text-white">Address</div>
              <div className="text-black">Tamale<br /> Ghana</div>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <form className="bg-[#999eac] rounded-2xl p-8 flex flex-col gap-4 shadow">
          <h2 className="text-xl font-bold text-black mb-4">Send us a Message</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-black mb-1">First Name *</label>
              <input type="text" className="w-full rounded bg-[#bdc0c9] text-black  px-3 py-2 border border-gray-600 focus:outline-none focus:border-[#FFD233]" placeholder="John" required />
            </div>
            <div>
              <label className="block text-black mb-1">Last Name *</label>
              <input type="text" className="w-full rounded bg-[#bdc0c9] text-black px-3 py-2 border border-gray-600 focus:outline-none focus:border-[#caba7f]" placeholder="Doe" required />
            </div>
            <div>
              <label className="block text-black mb-1">Email Address *</label>
              <input type="email" className="w-full rounded bg-[#bdc0c9] text-black  px-3 py-2 border border-gray-600 focus:outline-none focus:border-[#FFD233]" placeholder="john@example.com" required />
            </div>
            <div>
              <label className="block text-black mb-1">Phone Number</label>
              <input type="tel" className="w-full rounded bg-[#bdc0c9] text-black  px-3 py-2 border border-gray-600 focus:outline-none focus:border-[#FFD233]" placeholder="+233 20 123 4567" />
            </div>
          </div>
          <div>
            <label className="block text-black mb-1">Subject *</label>
            <input type="text" className="w-full rounded bg-[#bdc0c9] text-black  px-3 py-2 border border-gray-600 focus:outline-none focus:border-[#FFD233]" placeholder="How can we help you?" required />
          </div>
          <div>
            <label className="block text-black mb-1">Message *</label>
            <textarea className="w-full rounded bg-[#bdc0c9] text-black  px-3 py-2 border border-gray-600 focus:outline-none focus:border-[#FFD233]" rows={4} placeholder="Type your message here..." required />
          </div>
          <button type="submit" className="mt-2 bg-[#686356] text-[#222] font-bold px-6 py-3 rounded-md shadow hover:bg-[#e6b800] transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
    <NewsLetter />
    <Footer />
    </>
  );
}