import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import LiquidSoap from "../assets/images/Liquid Soap.png";
import BarSoap from "../assets/images/Bar-soap.jpeg";
import PowderedPepper from "../assets/images/Powdered pepper.jpeg";
import GroundnutPaste from "../assets/images/Groundnut Paste.png";
import TomBrown from "../assets/images/Tom brown.png";
import SheaButter from "../assets/images/Sheabutter-Big size.jpg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CategorySection() {
  const categories = [
    { id: 1, image: LiquidSoap, title: "Wellness" },
    { id: 2, image: BarSoap, title: "Wellness" },
    { id: 3, image: PowderedPepper, title: "Food" },
    { id: 4, image: GroundnutPaste, title: "Food" },
    { id: 5, image: TomBrown, title: "Food" },
    { id: 6, image: SheaButter, title: "Care" },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#046404] mb-4 font-heading">
            Explore Our Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our wide range of authentic Ghanaian products carefully
            selected for quality and taste.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">         
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView="auto"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            speed={800} // smoother slide speed
          >
            {categories.map((category, index) => (
              <SwiperSlide key={category.id} className="!w-72">
                <Link
                  to={`/all-product?category=${encodeURIComponent(
                    category.title
                  )}`}
                >
                  <CategoryCard
                    imageSrc={category.image}
                    title={category.title}
                    delay={index * 100}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
