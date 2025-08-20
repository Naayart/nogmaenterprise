import React from "react";

export default function TestimonialCard({ message, author, image, index }) {
  return (
    <div
      className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-green-400
        transition-all duration-500 hover:scale-105 hover:shadow-2xl
        animate-fadeIn"
      style={{
        animationDelay: `${index * 150}ms`,
        animationDuration: "800ms",
        animationFillMode: "both",
      }}
    >
      
        <img
          src={image}
          alt={author}
          className="
            w-14 h-14 rounded-full object-cover border-2 border-yellow-400 mb-3
            transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3
          "
        />
      
      <p className="italic text-green-700 text-center leading-relaxed">{message}</p>
      <h4 className="mt-4 font-bold text-yellow-500">{author}</h4>
    </div>
  );
}
