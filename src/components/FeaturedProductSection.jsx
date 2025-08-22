import ProductSlider from "./ProductSlider";
import { Link, useNavigate } from "react-router-dom";
import sheaButterB from "../assets/images/Sheabutter-Big size.jpg";
import peanutButterImg from "../assets/images/Groundnut Paste.png";
import peanutImg from "../assets/images/Peanut-1.png";
import liquidSoapImg from "../assets/images/Liquid Soap.png";

export default function FeaturedProductSection({ cart, addToCart }) {
  const featuredProducts = [
    {
      id: 1,
      image: sheaButterB,
      category: "Care",
      name: "Sheabutter",
      price: "₵200.00",
      oldPrice: "₵250.00",
      discount: 20,
      rating: 4,
    },
    {
      id: 2,
      image: peanutButterImg,
      category: "Food",
      name: "Groundnut paste",
      price: "₵400.00",
      oldPrice: "₵420.00",
      discount: 17,
      rating: 5,
    },
    {
      id: 3,
      image: peanutImg,
      category: "Food",
      name: "Peanut",
      price: "₵25.00",
      oldPrice: "₵30.00",
      discount: 17,
      rating: 4,
    },
    {
      id: 4,
      image: liquidSoapImg,
      category: "Wellness",
      name: "Liquid Soap 65liters",
      price: "₵65.00",
      oldPrice: "₵70.00",
      discount: 17,
      rating: 4,
    },
  ];

  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product-detail/${product.id}`, { state: { product } });
  };

  return (
    <section id="featured-products" className="max-w-7xl mx-auto px-4 py-12 bg">
      {/* Section Heading */}
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-bold text-green-700 font-heading mb-2">
          Featured Products
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Discover our top picks just for you, our products are authentic, high
          quality, and proudly made in Ghana.
        </p>
        <div className="text-right max-w-7xl mx-auto">
          <Link
            to="/all-product"
            className="inline-flex items-center gap-2 text-green-700 font-semibold text-lg
              bg-gradient-to-r from-green-500 to-green-700 bg-clip-text 
              transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:from-yellow-400 hover:to-green-800 group"
          >
            View All Products
            <span className="inline-block transform transition-transform animate-wiggle">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Product Slider */}
      <div>
        <ProductSlider
          products={featuredProducts.slice(0, 4)}
          addToCart={addToCart}   //use App's addToCart function
          onProductClick={handleProductClick}
        />
      </div>
    </section>
  );
}