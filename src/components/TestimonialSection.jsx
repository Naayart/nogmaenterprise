import React from "react";
import TestimonialCard from "./TestimonialCard";
import Leticia from "../assets/images/Leticia-Saaka.png";
import Lena from "../assets/images/Lena-Sewu.jpeg";
import Barrister from "../assets/images/Barrister-Deborah.jpeg";
import Kwesi from "../assets/images/Mr. Kwesi.png";
import Akwesi from "../assets/images/Akwesi.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
  {
    message: "Beautiful packaging and fantastic results!",
    author: "Akwesi Ofori.",
    image: Akwesi,
  },
  {
    message: "Great value for money, will recommend to friends!",
    author: "Mr. Kwesi.",
    image: Kwesi,
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-white py-12 px-4 text-center mb-5">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-2">
          What Our Customers Say
          <p id="access" className="text-lg text-gray-600 mb-4">
            Read what people say about our products.
          </p>
        </h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop
        className="pb-8"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <TestimonialCard {...t} index={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
