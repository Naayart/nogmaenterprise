import React from "react";

export default function TestimonialCard({ message, author, image }) {
  return (
    <div className="bg-white border-2 border-green-700 rounded-xl p-6 m-2 shadow-md text-green-700 max-w-xs min-h-[180px] flex flex-col items-center">
      {image && (
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400 mb-2"
        />
      )}
      <div className="italic">{message}</div>
      <div className="mt-4 font-bold text-yellow-400">{author}</div>
    </div>
  );
} 