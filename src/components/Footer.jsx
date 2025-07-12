import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import logo from "../assets/images/logo.jpeg";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#046404] text-white px-6 pt-14 pb-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-green-900 pb-10">
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center mb-4">
            <img src={logo} alt="Nogma.H Enterprise Logo" className="w-14 h-14 rounded-full shadow-lg mr-3 border-4 border-[#D5A20A] bg-white object-cover" />
            <span className="text-2xl font-extrabold font-heading text-[#D5A20A] tracking-wide">Nogma.H <span className="text-white">Enterprise</span></span>
          </div>
          <p className="text-sm text-gray-300 mb-5 max-w-xs">
            Trusted Ghanaian products: tombrown, shea butter, peanut butter. Empowering women through wellness and soap-making training.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform"><FaFacebookF className="text-[#D5A20A] hover:text-white" size={24} /></a>
            <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform"><FaInstagram className="text-[#D5A20A] hover:text-white" size={24} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform"><FaLinkedinIn className="text-[#D5A20A] hover:text-white" size={24} /></a>
            <a href="#" aria-label="TikTok" className="hover:scale-110 transition-transform"><FaTiktok className="text-[#D5A20A] hover:text-white" size={24} /></a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-bold text-md uppercase text-[#D5A20A] mb-4 tracking-wider font-heading">Shop</h3>
          <ul className="space-y-2 text-gray-200">
            <li><Link to={'/view-product'} className="hover:text-[#FFD233] transition-colors">Products</Link></li>
            <li>Tom brown</li>
            <li>Peanut butter</li>
            <li>Powdered Pepper</li>
            <li>Liquid Soap</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-md uppercase text-[#D5A20A] mb-4 tracking-wider font-heading">Company</h3>
          <ul className="space-y-2 text-gray-200">
            <li><Link to={'/about'} className="hover:text-[#FFD233] transition-colors">About Us</Link></li>
            <li>Blog</li>
            <li><Link to={'/contact'} className="hover:text-[#FFD233] transition-colors">Contact</Link></li>
            <li>Careers</li>
            <li>Wholesale</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-bold text-md uppercase text-[#D5A20A] mb-4 tracking-wider font-heading">Help</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Shipping & Returns</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Track Order</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-400 mt-8 pt-4">
        &copy; {new Date().getFullYear()} Nogma.H Enterprise. All rights reserved.
      </div>
    </footer>
  );
}
