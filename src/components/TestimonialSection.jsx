import React from "react";
import TestimonialCard from "./TestimonialCard";
import Leticia from "../assets/images/Leticia-Saaka.png";
import Lena from "../assets/images/Lena-Sewu.jpeg";
import Barrister from "../assets/images/Barrister-Deborah.jpeg";

const testimonials = [
  {
    message: "Nogma's products are top-notch! My skin has never felt better.",
    author: "Leticia Saaka.",
    image: Leticia,
  },
  {
    message: "Fast delivery and excellent customer service. Highly recommend!",
    author: "Lena Sewu.",
    image: Lena,
  },
  {
    message: "I love the natural ingredients. Will buy again!",
    author: "Barrister Deborah.",
    image: Barrister,
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