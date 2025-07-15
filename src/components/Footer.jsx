import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import logo from "../assets/images/logo.jpeg";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#046404] via-[#1a2e05] to-[#046404] opacity-95"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
        backgroundSize: '60px 60px'
      }}></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Top Section - Brand Story */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Brand Identity - Left Side */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img src={logo} alt="Nogma.H Enterprise Logo" className="w-16 h-16 rounded-2xl shadow-lg border-4 border-[#D5A20A]" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#D5A20A] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white font-heading">Nogma.H</h3>
                  <p className="text-[#D5A20A] font-semibold">Enterprise</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  "From a dream in northern Ghana to empowering thousands. Every product tells a story of community, quality, and hope."
                </p>
                <div className="flex items-center space-x-2 text-[#D5A20A]">
                  <span className="text-sm font-semibold">✓ FDA Approved</span>
                  <span className="text-sm font-semibold">✓ 5000+ Trained</span>
                </div>
              </div>
            </div>

            {/* Quick Links - Center */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold text-white mb-6 font-heading">Explore</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-[#D5A20A] font-semibold mb-3">Products</h5>
                  <ul className="space-y-2">
                    <li><Link to="/all-product" className="text-gray-300 hover:text-[#D5A20A] transition-colors text-sm">All Products</Link></li>
                    <li><Link to="/product-detail?id=1" className="text-gray-300 hover:text-[#D5A20A] transition-colors text-sm">Shea Butter</Link></li>
                    <li><Link to="/product-detail?id=4" className="text-gray-300 hover:text-[#D5A20A] transition-colors text-sm">Groundnut Paste</Link></li>
                    <li><Link to="/product-detail?id=13" className="text-gray-300 hover:text-[#D5A20A] transition-colors text-sm">Tom Brown</Link></li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-[#D5A20A] font-semibold mb-3">Company</h5>
                  <ul className="space-y-2">
                    <li><Link to="/about" className="text-gray-300 hover:text-[#D5A20A] transition-colors text-sm">Our Story</Link></li>
                    <li><Link to="/blog" className="text-gray-300 hover:text-[#D5A20A] transition-colors text-sm">Blog</Link></li>
                    <li><Link to="/contact" className="text-gray-300 hover:text-[#D5A20A] transition-colors text-sm">Contact</Link></li>
                    <li><span className="text-gray-300 text-sm">Training</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact & Social - Right Side */}
            <div className="lg:col-span-1 font-Roboto">
              <h4 className="text-xl font-bold text-white mb-6 font-heading">Connect</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#D5A20A] rounded-full flex items-center justify-center">
                    <FiMapPin className="text-white" />
                  </div>
                  <div>
                    <a href="https://maps.google.com/?q=Tamale,Ghana" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-[#D5A20A] transition-colors cursor-pointer">Tamale, Ghana</a>
                    <p className="text-gray-300 text-sm">Northern Region</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#D5A20A] rounded-full flex items-center justify-center">
                    <FiPhone className="text-white" />
                  </div>
                  <div>
                    <a href="tel:+233505944839" className="text-white font-semibold hover:text-[#D5A20A] transition-colors cursor-pointer">+233 50 594 4839</a>
                    <p className="text-gray-300 text-sm">Call us anytime</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#D5A20A] rounded-full flex items-center justify-center">
                    <FiMail className="text-white" />
                  </div>
                  <div>
                    <a href="mailto:akunyarahelenakunyara@gmail.com" className="text-white font-semibold hover:text-[#D5A20A] transition-colors cursor-pointer">akunyarahelenakunyara@gmail.com</a>
                    <p className="text-gray-300 text-sm">We'll respond quickly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section - Impact Statement */}
          <div className="border-t border-white/20 pt-12 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <span className="text-[#D5A20A] font-bold">★</span>
                <span className="text-white font-semibold">Empowering 5000+ Women</span>
                <span className="text-[#D5A20A] font-bold">★</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 font-heading">
                "Every product has a purpose, every sale has an impact"
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                When you choose Nogma.H Enterprise, you're not just buying quality products - you're supporting dreams, 
                empowering communities, and helping build a brighter future for Ghana.
              </p>
            </div>
          </div>

          {/* Bottom Section - Social & Copyright */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <span className="text-gray-300 text-sm">Follow our journey:</span>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-[#D5A20A] rounded-full flex items-center justify-center hover:bg-white hover:text-[#046404] transition-all duration-300 transform hover:scale-110">
                    <FaFacebookF size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#D5A20A] rounded-full flex items-center justify-center hover:bg-white hover:text-[#046404] transition-all duration-300 transform hover:scale-110">
                    <FaInstagram size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#D5A20A] rounded-full flex items-center justify-center hover:bg-white hover:text-[#046404] transition-all duration-300 transform hover:scale-110">
                    <FaLinkedinIn size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#D5A20A] rounded-full flex items-center justify-center hover:bg-white hover:text-[#046404] transition-all duration-300 transform hover:scale-110">
                    <FaTiktok size={16} />
                  </a>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-gray-300 text-sm">
                  © {new Date().getFullYear()} Nogma.H Enterprise. Made with love in Ghana
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Empowering communities, one product at a time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
