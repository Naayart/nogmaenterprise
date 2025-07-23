import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

// Import all product images
import tombrownsingle from "../assets/images/Tombrown-Single.jpg";
import tombrowncontainer from "../assets/images/Tom brown Small Container.jpg";
import sheaButterB from "../assets/images/Sheabutter-Big size.jpg";
import sheaButterS from "../assets/images/Sheabutter-Small.jpg";
import sheaButterM from "../assets/images/Sheabutter-Medium.jpg";
import peanutImg from "../assets/images/Peanut-1.png";
import peanutButterImg from "../assets/images/Groundnut Paste.png";
import peanutButterM from "../assets/images/Peanut Butter-Medium.jpg";
import peanutButterS from "../assets/images/Peanut Butter-Small.jpg";
import liquidSoapImg from "../assets/images/Liquid Soap.png";
import barSoapImg from "../assets/images/Bar-soap.jpeg";
import powderedPepperS from "../assets/images/Pepper -Small.jpg";
import powderedPepperB from "../assets/images/Pepper- BigSize.jpg";

const products = [
  {
    id: 1,
    image: sheaButterB,
    category: "Care",
    name: "Shea Butter 10kg",
    price: "₵250.00",
    description: "Pure, natural shea butter sourced from Ghana. Perfect for skin care, hair treatment, and cosmetic use. Rich in vitamins A and E, providing deep moisturization and healing properties."
  },
  {
    id: 2,
    image: sheaButterS,
    category: "Care",
    name: "Shea Butter 400g",
    price: "₵40.00",
    description: "Premium shea butter in a convenient 400g size. Ideal for daily skin care routines, massage therapy, and natural beauty treatments."
  },
  {
    id: 3,
    image: sheaButterM,
    category: "Care",
    name: "Shea Butter 1kg",
    price: "₵65.00",
    description: "High-quality shea butter perfect for both personal use and small-scale production. Versatile ingredient for natural skincare products."
  },
  {
    id: 4,
    image: peanutButterImg,
    category: "Food",
    name: "Groundnut Paste 10kg",
    price: "₵400.00",
    description: "Rich, creamy groundnut paste made from premium Ghanaian peanuts. Perfect for cooking, baking, and as a nutritious spread."
  },
  {
    id: 5,
    image: peanutButterM,
    category: "Food",
    name: "Groundnut Paste 1kg",
    price: "₵60.00",
    description: "Delicious groundnut paste in a family-friendly size. Great for sandwiches, cooking, and healthy snacking."
  },
  {
    id: 6,
    image: peanutButterS,
    category: "Food",
    name: "Groundnut Paste 0.6kg",
    price: "₵30.00",
    description: "Convenient size groundnut paste for small households. Made with care using traditional methods."
  },
  {
    id: 7,
    image: peanutImg,
    category: "Food",
    name: "Peanut 500g",
    price: "₵25.00",
    description: "Fresh, roasted Ghanaian peanuts. Perfect for snacking, cooking, or making your own groundnut paste."
  },
  {
    id: 8,
    image: liquidSoapImg,
    category: "Wellness",
    name: "Liquid Soap 65liters",
    price: "₵60.00",
    description: "Gentle, effective liquid soap suitable for all skin types. Made with natural ingredients and available in bulk for commercial use."
  },
  {
    id: 9,
    image: liquidSoapImg,
    category: "Wellness",
    name: "Liquid Soap 2liters",
    price: "₵25.00",
    description: "Family-size liquid soap with natural cleansing properties. Safe for daily use and gentle on sensitive skin."
  },
  {
    id: 10,
    image: barSoapImg,
    category: "Wellness",
    name: "Bar Soap",
    price: "₵8.00",
    description: "Traditional bar soap made with natural ingredients. Long-lasting and effective for daily hygiene."
  },
  {
    id: 11,
    image: powderedPepperS,
    category: "Food",
    name: "Powdered Pepper 100g",
    price: "₵20.00",
    description: "Finely ground pepper powder with rich flavor and aroma. Perfect for seasoning and cooking."
  },
  {
    id: 12,
    image: powderedPepperB,
    category: "Food",
    name: "Powdered Pepper 600g",
    price: "₵60.00",
    description: "Premium powdered pepper in bulk size. Ideal for restaurants, food businesses, and large households."
  },
  {
    id: 13,
    image: tombrownsingle,
    category: "Food",
    name: "Tom Brown 1.3kg",
    price: "₵70.00",
    description: "Nutritious Tom Brown cereal made from roasted corn and groundnuts. Perfect for breakfast and weaning foods."
  },
  {
    id: 14,
    image: tombrowncontainer,
    category: "Food",
    name: "Tom Brown 0.9kg",
    price: "₵25.00",
    description: "Convenient size Tom Brown cereal. Rich in nutrients and perfect for growing children and adults alike."
  }
];

export default function ProductDetail({ addToCart, cart }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  // Get product ID from URL query parameter
  const productId = searchParams.get("id");
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <>
        <Navbar cart={cart} />
        <div className="min-h-screen bg-gray-50 pt-24 px-4">
          <div className="max-w-4xl mx-auto text-center py-12">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <button 
              onClick={() => navigate('/all-product')}
              className="bg-[#046404] text-white px-6 py-3 rounded-md hover:bg-[#035403] transition-colors"
            >
              Back to Products
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    // Add the product to cart with quantity
    const productWithQuantity = { ...product, qty: quantity };
    addToCart(productWithQuantity);
  };

  const handleQuantityChange = (delta) => {
    const newQuantity = Math.max(1, quantity + delta);
    setQuantity(newQuantity);
  };

  return (
    <>
      <Navbar cart={cart} />
      <div className="min-h-screen bg-gradient-to-r from-green-700 to-yellow-600 pt-24 px-4">
        <div className="max-w-6xl mx-auto py-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <button 
              onClick={() => navigate('/all-product')}
              className="text-[#cad8ca] hover:text-[#ecf0ec] font-medium flex items-center gap-2"
            >
              ← Back to Products
            </button>
          </div>

          {/* Product Details */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto rounded-xl object-contain bg-white shadow-sm"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-sm text-gray-500 uppercase tracking-wide font-accent">
                    {product.category}
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold text-[#19213a] mb-4 font-heading">
                  {product.name}
                </h1>
                
                <div className="text-2xl font-bold text-[#048404] mb-6 font-accent">
                  {product.price}
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-[#19213a] mb-3 font-heading">
                    Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-medium text-gray-700">Quantity:</label>
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 border-x border-gray-300 font-medium">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(1)}
                        className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-[#C18217] text-white py-3 px-6  hover:bg-[#FBD968] transition-colors font-medium font-accent text-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}