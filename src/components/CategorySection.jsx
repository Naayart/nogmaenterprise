import { useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom"; // ✅ Import Link
import CategoryCard from "./CategoryCard";

import LiquidSoap from "../assets/images/Liquid Soap.png";
import BarSoap from "../assets/images/Bar-soap.jpeg";
import PowderedPepper from "../assets/images/Powdered pepper.jpeg";
import GroundnutPaste from "../assets/images/Groundnut Paste.png";
import TomBrown from "../assets/images/Tom brown.png";
import SheaButter from "../assets/images/Sheabutter-Big size.jpg";

export default function CategorySection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (Math.ceil(container.scrollLeft) >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#046404] mb-4 font-heading">
            Explore Our Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our wide range of authentic Ghanaian products carefully
            selected for quality and taste.
          </p>
        </div>

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#D5A20A] text-white p-2 rounded-full shadow-md hover:scale-110 transition"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#D5A20A] text-white p-2 rounded-full shadow-md hover:scale-110 transition"
        >
          <FiChevronRight size={24} />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 gap-8 px-4 lg:justify-center"
        >
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/all-product?category=${encodeURIComponent(category.title)}`} // ✅ Link to AllProduct with category param
              className="snap-start shrink-0"
            >
              <CategoryCard
                imageSrc={category.image}
                title={category.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
