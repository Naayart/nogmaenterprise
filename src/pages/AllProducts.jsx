import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import tombrownsingle from "../assets/images/Tombrown-Single.jpg";
import tombrowncontainer from "../assets/images/Tom brown Small Container.jpg";
import sheaButterB from "../assets/images/Sheabutter-Big size.jpg";
import sheaButterS from "../assets/images/Sheabutter-Small.jpg";
import sheaButterM from "../assets/images/Sheabutter-Medium.jpg";
import peanutImg from "../assets/images/Peanut-1.png";
import peanutButterImg from "../assets/images/Groundnut paste.png";
import peanutButterM from "../assets/images/Peanut Butter-Medium.jpg";
import peanutButterS from "../assets/images/Peanut Butter-Small.jpg";
import liquidSoapImg from "../assets/images/Liquid Soap.png";
import barSoapImg from "../assets/images/Bar-soap.jpeg";
import powderedPepperS from "../assets/images/Pepper -Small.jpg";
import powderedPepperB from "../assets/images/Pepper- BigSize.jpg";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const products = [
  {
    id: 1,
    image: sheaButterB,
    category: "Care",
    name: "Shea Butter 10kg",
    price: "₵250.00",
  },

   {
    id: 2,
    image: sheaButterS,
    category: "Care",
    name: "Shea Butter 400g",
    price: "₵40.00",
  },
   {
    id: 3,
    image: sheaButterM,
    category: "Care",
    name: "Shea Butter 1kg",
    price: "₵65.00",
  },
  {
    id: 4,
    image: peanutButterImg,
    category: "Food",
    name: "Groundnut Paste 10kg ",
    price: "₵400.00",
  },

  {
    id: 5,
    image: peanutButterM,
    category: "Food",
    name: "Groundnut Paste 1kg",
    price: "₵60.00",
  }, 

   {
    id: 6,
    image: peanutButterS,
    category: "Food",
    name: "Groundnut Paste 0.6kg",
    price: "₵30.00",
  }, 

  {
    id: 7,
    image: peanutImg,
    category: "Food",
    name: "Peanut 500g",
    price: "₵25.00",
  },
  {
    id: 8,
    image: liquidSoapImg,
    category: "Wellness",
    name: "Liquid Soap 65liters",
    price: "₵60.00",
  },
  {
    id: 8,
    image: liquidSoapImg,
    category: "Wellness",
    name: "Liquid Soap 2liters",
    price: "₵25.00",
  },
  {
    id: 9,
    image: barSoapImg,
    category: "Wellness",
    name: "Bar Soap",
    price: "₵8.00",
  },
  {
    id: 10,
    image: powderedPepperS,
    category: "Food",
    name: "Powdered Pepper 100g",
    price: "₵20.00",
  },
   {
    id: 11,
    image: powderedPepperB,
    category: "Food",
    name: "Powdered Pepper 600g",
    price: "₵60.00",
  },
  {
    id:12,
    image:tombrownsingle,
    category:"Food",
    name: "Tom Brown 1.3kg",
    price: "₵70.00",
  },

  {
    id:13,
    image:tombrowncontainer,
    category:"Food",
    name: "Tom Brown 0.9kg",
    price: "₵25.00",
  },
];

// Derive unique categories from products
const categories = [
  "All",
  ...Array.from(new Set(products.map((p) => p.category)))
];

function parsePrice(priceStr) {
  // Remove non-numeric characters and parse as float
  return parseFloat(priceStr.replace(/[^\d.]/g, ""));
}

export default function AllProduct({ cart }){
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Search and filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Sync selectedCategory with URL param
  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory("All");
    }
  }, [categoryParam]);

  // Filter products by selected category, search, and price
  const filteredProducts = products.filter((p) => {
    // Category filter
    const categoryMatch =
      selectedCategory === "All" || p.category === selectedCategory;
    // Search filter
    const nameMatch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    // Price filter
    const price = parsePrice(p.price);
    const min = minPrice ? parseFloat(minPrice) : 0;
    const max = maxPrice ? parseFloat(maxPrice) : Infinity;
    const priceMatch = price >= min && price <= max;
    return categoryMatch && nameMatch && priceMatch;
  });

  // Handle category click: update URL
  const handleCategoryClick = (cat) => {
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <>
      <Navbar cart={cart} />
      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 pt-4 pb-4 font-Monserrat">
        <div className="w-full flex justify-center">
          <label className="block text-base font-semibold text-[#19213a] mb-2 font-heading text-center">Shop</label>
        </div>
        <div className="w-full flex justify-center mb-8">
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 items-center">
            {/* Search */}
            <div className="flex justify-center">
              <div className="relative">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
                  <FiSearch size={18} />
                </span>
                <input
                  type="text"
                  placeholder="Search by name or keyword..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#9CC40C] text-sm max-w-xs"
                  style={{ minWidth: '0', width: '220px' }}
                />
              </div>
            </div>
            {/* Price Filter */}
            <div className="flex gap-2 items-end">
              <div>
                <label className="block text-sm font-semibold text-[#19213a] mb-1 font-heading">Min Price</label>
                <input
                  type="number"
                  min="0"
                  placeholder="₵ Min"
                  value={minPrice}
                  onChange={e => setMinPrice(e.target.value)}
                  className="w-24 px-3 pr-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#9CC40C]"
                />
              </div>
              <span className="text-gray-500 font-bold mb-2">-</span>
              <div>
                <label className="block text-sm font-semibold text-[#19213a] mb-1 font-heading">Max Price</label>
                <input
                  type="number"
                  min="0"
                  placeholder="₵ Max"
                  value={maxPrice}
                  onChange={e => setMaxPrice(e.target.value)}
                  className="w-24 px-3 pr-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#9CC40C]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 pt-2">
        <h2 className="text-2xl font-bold mb-4 text-[#19213a] text-center font-heading">Explore Categories</h2>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 mt-12 ">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`relative bg-transparent border-none outline-none px-2 py-1 text-lg font-medium transition-colors duration-200 font-accent 
                ${selectedCategory === cat
                  ? "text-black after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-1 after:bg-[#8BC34A] after:rounded after:content-[''] after:w-full after:mx-auto after:block"
                  : "text-[#222] hover:text-[#F09A1A]"}
              `}
              style={{ minWidth: '60px' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>
      {/* Product Cards Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-8 text-[#04542C] font-heading">Our Products</h2>
        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-500 py-12">No products found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={() => {}} />
            ))}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}