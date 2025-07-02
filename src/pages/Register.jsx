import { Link } from "react-router";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

export default function Register() {
  return (
    <>
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#046404]">Create Your Account</h1>
          <p className="text-sm text-gray-700 mt-2 font-semibold">
            Already have an account?{" "}
            <Link to={'/login'} className="text-[#D5A20A] font-semibold hover:underline cursor-pointer ">
              Sign in
            </Link>
          </p>
        </div>

        {/* Form */}
        <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
          {/* Full Name */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Enter Your Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#046404] focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Enter Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#046404] focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Create Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#046404] focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#046404] focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#046404] text-white py-2 rounded-md hover:bg-green-700 font-semibold"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
     <NewsLetter />
     <Footer />
    </>


  );
}
