import React from "react";
import TestimonialCard from "./TestimonialCard";
import profilePic from "../assets/images/Profile Picture.jpeg";
import peanutPic from "../assets/images/Peanut.jpeg";
import sheaPic from "../assets/images/Sheabutter.png";

const testimonials = [
  {
    message: "Nogma's products are top-notch! My skin has never felt better.",
    author: "Helen A.",
    image: profilePic,
  },
  {
    message: "Fast delivery and excellent customer service. Highly recommend!",
    author: "Kwame B.",
    image: peanutPic,
  },
  {
    message: "I love the natural ingredients. Will buy again!",
    author: "Ama S.",
    image: sheaPic,
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-white py-12 px-4 text-center">
      <div className="text-4xl md:text-5xl font-bold text-green-700 font-heading mb-2">
        What Our Customers Say
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-15">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
} 