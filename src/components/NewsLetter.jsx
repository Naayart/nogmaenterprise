import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

export default function NewsLetter() {
  const [state, handleSubmit] = useForm("mzzvlzvj"); // form ID link
  const emailRef = useRef(null);

useEffect(() => {
    if (state.succeeded) {
    toast.success("Thanks for subscribing!");
    if (emailRef.current) emailRef.current.value = ""; //Clear the input field
  }

  if (state.errors && state.errors.length > 0) {
    toast.error("Something went wrong. Try again.");
  }
}, [state.succeeded, state.errors]);
    

  return (
    <div className="px-6 py-15 text-center space-y-6">
      <h2 className="text-black space-x-3 text-4xl md:text-5xl font-bold font-heading mb-2">
        <span id="acess" className="text-green-700">Join</span>
        <span id="access">Our</span>
        <span className="text-yellow-400" id="access">Newsletter</span>
      </h2>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Subscribe to our newsletter and be the first to know about our new products and special promotions.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-1"
      >
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="w-full sm:w-72 px-4 py-3 rounded-lg text-black bg-white placeholder-gray-500 focus:outline-none border"
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-[#D5A20A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          {state.submitting ? "Subscribing..." : "Subscribe"}
        </button>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </form>
    </div>
  );
}
