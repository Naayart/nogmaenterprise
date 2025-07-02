import logo from "../assets/images/logo.jpeg";
import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-[#B4E4AC] shadow px-10 py-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
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

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-lg font-medium text-gray-700 space-y-2 md:space-y-0 hover:[&>a]:text-[#046404]">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Products</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
        </div>

        {/* Auth + Cart */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-5 space-y-2 md:space-y-0">
          <div className="flex items-center space-x-2 text-[#043424] font-semibold">
            <Link to="/login" className="hover:underline hover:text-[#046404]">
              Login
            </Link>
            <span>/</span>
            <Link to="/register" className="hover:underline hover:text-[#046404]">
              Signup
            </Link>
          </div>
          <ShoppingCart />
        </div>
      </div>
    </nav>
  );
}
