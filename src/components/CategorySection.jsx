import CategoryCard from "./CategoryCard";
import LiquidSoap from "../assets/images/Liquid Soap.png";
import BarSoap from "../assets/images/Bar-soap.jpeg";
import PowderedPepper from "../assets/images/Powdered pepper.jpeg";
import GroundnutPaste from "../assets/images/Groundnut Paste.png";
import TomBrown from "../assets/images/Tom brown.png";
import SheaButter from "../assets/images/Sheabutter-Big size.jpg";




export default function CategorySection() {

    const categories = [
        {id: 1 , image: LiquidSoap, title: "Liquid Soap"},
        {id: 2 , image: BarSoap, title: "Bar Soap"},
        {id: 3 , image: PowderedPepper, title: "Powdered Pepper"},
        {id: 4 , image: GroundnutPaste, title: "Groundnut Paste"},
        {id: 5 , image: TomBrown, title: "TomBrown"},
        {id: 6 , image: SheaButter, title: "SheaButter"},       
    ]
  return (
    <section className="bg-green-100 py-20 px-4">
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

        <div className="flex overflow-x-auto pb-4 gap-8 px-4 scrollbar-hide lg:justify-center">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              imageSrc={category.image}
              title={category.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
