import logo from "../assets/images/logo.jpeg";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/contact", label: "Contact" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <nav className="bg-[#B4E4AC] shadow px-6 py-4 relative z-50">
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
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "text-gray-700" : undefined
              }
            >
              {link.label}
            </NavLink>
          ))}
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
          <ShoppingCart />
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
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        isActive ? "text-[#046404] underline" : undefined
                      }
                      onClick={() => setDrawerOpen(false)}
                    >
                      {link.label}
                    </NavLink>
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
