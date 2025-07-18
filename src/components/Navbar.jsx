import logo from "../assets/images/logo.jpeg";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Navbar({ cart }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/#products", label: "Products", isProducts: true },
    { to: "/contact", label: "Contact" },
    { to: "/blog", label: "Blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProductsClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const section = document.getElementById("featured-products");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: "featured-products" } });
    }
  };

  return (
    <nav
      className="h-15 fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/10 backdrop-blur-md shadow transition-all duration-300"

    >
      <div className="flex flex-row items-center justify-between h-full">
        {/* Logo + Company Name */}
        <div className="flex items-center space-x-4 font-Open">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
          <Link
            to={"/"}
            className="text-1xl md:text-2xl font-extrabold text-[#046404] flex flex-col leading-tight"
          >
            <div className="flex space-x-1">
              <span>Nogma</span>
              <span>
                {" "}
                <span className="text-[#D5A20A]">.</span>H
              </span>
            </div>
            <span className="text-[#D5A20A] text-xl tracking-wide">
              Enterprise
            </span>
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden ml-auto text-[#046404] focus:outline-none"
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
        >
          <FiMenu size={28} />
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex flex-row items-center space-x-6 text-lg font-semibold font-Outfit italic">
          {navLinks.map((link) =>
            link.isAnchor ? (
              <a
                key={link.to}
                href={link.to}
                className="text-gray-600 hover:text-[#9CC40C] transition-colors duration-200"
              >
                {link.label}
              </a>
            ) : link.isProducts ? (
              <a
                key={link.to}
                href="#featured-products"
                onClick={handleProductsClick}
                className="text-gray-600 hover:text-[#9CC40C] transition-colors duration-200"
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9CC40C] font-semibold"
                    : "text-gray-600 hover:text-[#9CC40C] transition-colors duration-200"
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </div>

        {/* Cart (Desktop) */}
        <div className="hidden md:flex flex-row items-center space-x-5">
          <button
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
            aria-label="View cart"
          >
            <ShoppingCart />
            {cart && cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-xs font-bold rounded-full px-2 py-0.5">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-64 bg-[#B4E4AC] shadow-lg z-50 flex flex-col p-6 animate-slide-in">
            <button
              className="self-end mb-6 text-[#046404] focus:outline-none"
              onClick={() => setDrawerOpen(false)}
            >
              <FiX size={28} />
            </button>
            <nav>
              <ul className="flex flex-col space-y-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    {link.isAnchor ? (
                      <a
                        href={link.to}
                        className="text-gray-600 hover:text-blue-600"
                        onClick={() => setDrawerOpen(false)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-600 hover:text-blue-600"
                        }
                        onClick={() => setDrawerOpen(false)}
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col space-y-4">
                <button
                  className="relative cursor-pointer"
                  onClick={() => {
                    setDrawerOpen(false);
                    navigate("/cart");
                  }}
                >
                  <ShoppingCart />
                  {cart && cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-xs font-bold rounded-full px-2 py-0.5">
                      {cart.length}
                    </span>
                  )}
                </button>
              </div>
            </nav>
          </div>
        </>
      )}

      {/* Animation */}
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s cubic-bezier(0.4,0,0.2,1) forwards;
        }
      `}</style>
    </nav>
  );
}
