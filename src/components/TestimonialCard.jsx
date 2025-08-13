import React from "react";

export default function TestimonialCard({ message, author, image, index }) {
  return (
    <div
      className={`
        bg-white/70 backdrop-blur-md border border-green-500/50 rounded-2xl 
        p-6 m-2 shadow-lg shadow-green-500/10 text-green-800
        max-w-xs min-h-[200px] flex flex-col items-center
        transform transition duration-300 ease-in-out
        hover:-translate-y-2 hover:shadow-green-500/30 hover:border-green-500
      `}
    >
      {image && (
        <img
          src={image}
          alt={author}
          className="
            w-14 h-14 rounded-full object-cover border-2 border-yellow-400 mb-3
            transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3
          "
        />
      )}
      <div className="italic text-green-700 text-center leading-relaxed">{message}</div>
      <div className="mt-4 font-bold text-yellow-500">{author}</div>
    </div>
  );
}
