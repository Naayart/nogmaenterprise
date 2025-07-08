import logo from "../assets/images/logo.jpeg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar({ cart }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/#products", label: "Products", isAnchor: true },
    { to: "/contact", label: "Contact" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#B4E4AC]/95 backdrop-blur-md shadow-lg px-6 py-4 z-50">
      <div className="flex flex-row items-center justify-between">
        {/* Logo + Company Name */}
        <div className="flex items-center space-x-4">
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
            <span className="text-[#D5A20A] text-1xl tracking-wide">
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
        <div className="hidden md:flex flex-row items-center space-x-6 text-lg font-medium text-gray-700 hover:[&>a]:text-[#046404] hover:underline">
          {navLinks.map((link) =>
            link.isAnchor ? (
              <a
                key={link.to}
                href={link.to}
                className="hover:text-[#046404] hover:underline"
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "text-gray-700" : undefined
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </div>

        {/* Auth + Cart (Desktop) */}
        <div className="hidden md:flex flex-row items-center space-x-5">
          <div className="flex items-center space-x-2 text-[#043424] font-semibold">
            <NavLink to="/login" className={({ isActive }) => isActive ? "underline text-[#046404]" : "hover:underline hover:text-[#046404]"}>
              Login
            </NavLink>
            <span>/</span>
            <NavLink to="/register" className={({ isActive }) => isActive ? "underline text-[#046404]" : "hover:underline hover:text-[#046404]"}>
              Signup
            </NavLink>
          </div>
          <button
            className="relative"
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

      {/* Side Drawer (Mobile) */}
      {drawerOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu overlay"
          />
          {/* Drawer */}
          <div className="fixed top-0 left-0 h-full w-64 bg-[#B4E4AC] shadow-lg z-50 flex flex-col p-6 animate-slide-in">
            <button
              className="self-end mb-6 text-[#046404] focus:outline-none"
              aria-label="Close menu"
              onClick={() => setDrawerOpen(false)}
            >
              <FiX size={28} />
            </button>
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col space-y-6 text-lg font-medium text-gray-700">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    {link.isAnchor ? (
                      <a
                        href={link.to}
                        className="hover:text-[#046404] hover:underline"
                        onClick={() => setDrawerOpen(false)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          isActive ? "text-[#046404] underline" : undefined
                        }
                        onClick={() => setDrawerOpen(false)}
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-10 flex flex-col space-y-4">
              <div className="flex items-center space-x-2 text-[#043424] font-semibold">
                <NavLink to="/login" className={({ isActive }) => isActive ? "underline text-[#046404]" : "hover:underline hover:text-[#046404]"} onClick={() => setDrawerOpen(false)}>
                  Login
                </NavLink>
                <span>/</span>
                <NavLink to="/register" className={({ isActive }) => isActive ? "underline text-[#046404]" : "hover:underline hover:text-[#046404]"} onClick={() => setDrawerOpen(false)}>
                  Signup
                </NavLink>
              </div>
              <ShoppingCart />
            </div>
          </div>
        </>
      )}
      {/* Drawer animation */}
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
