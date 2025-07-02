import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import logo from "../assets/images/logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-[#046404] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <div className="flex items-center mb-3">
            <img src={logo} alt="Nogma.H Enterprise Logo" className="w-10 h-10 rounded mr-3" />
            <span className="text-2xl font-bold text-[#D5A20A]">Nogma.H <span className="text-white">Enterprise</span></span>
          </div>
          <p className="text-sm mb-4">
            Delivering trusted food products like tombrown, shea butter, and peanut butter — while empowering women through practical trainings in wellness and liquid soap making.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Facebook"><FaFacebookF className="text-[#D5A20A] hover:text-white" size={20} /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="text-[#D5A20A] hover:text-white" size={20} /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn className="text-[#D5A20A] hover:text-white" size={20} /></a>
            <a href="#" aria-label="TikTok"><FaTiktok className="text-[#D5A20A] hover:text-white" size={20} /></a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-bold text-lg text-[#D5A20A] mb-3">Shop</h3>
          <ul className="space-y-2">
            <li>Tom brown</li>
            <li>Peanut butter</li>
            <li>Powdered Pepper</li>
            <li>Liquid Soap</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-lg text-[#D5A20A] mb-3">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Wholesale</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-bold text-lg text-[#D5A20A] mb-3">Help</h3>
          <ul className="space-y-2">
            <li>Shipping & Returns</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Track Order</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-200 mt-10 border-t border-green-700 pt-4">
        &copy; {new Date().getFullYear()} Nogma.H Enterprise. All rights reserved.
      </div>
    </footer>
  );
}
