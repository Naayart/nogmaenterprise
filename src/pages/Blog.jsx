import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { FiCalendar, FiUser, FiTag, FiArrowRight, FiSearch } from "react-icons/fi";
import BlogCard from "../components/BlogCard";

export const blogPosts = [
    {
      id: 1,
      title: "The Journey of Shea Butter: From Tree to Your Home",
      excerpt: "Discover the traditional process of harvesting and processing shea butter in northern Ghana, and how Nogma.H Enterprise maintains these age-old techniques while ensuring modern quality standards.",
      content: "Shea butter has been a cornerstone of Ghanaian beauty and wellness traditions for centuries. At Nogma.H Enterprise, we take pride in preserving these traditional methods while ensuring our products meet the highest quality standards. Our shea butter is harvested from wild shea trees in the northern regions of Ghana, where the climate and soil conditions create the perfect environment for producing premium-grade shea nuts...",
      author: "Helen Akunyanra",
      date: "2024-01-15",
      category: "Product Stories",
      readTime: "5 min read",
      image: "https://media.istockphoto.com/id/2176675162/photo/shea-nuts.webp?a=1&b=1&s=612x612&w=0&k=20&c=8rT7Vz0Tu7cNNV79hSSYtqOyNN3JgkZsUtTPG8K5TTg=",
      tags: ["Shea Butter", "Traditional Methods", "Ghana"]
    },
    {
      id: 2,
      title: "Empowering Women Through Soap Making: Our Training Program",
      excerpt: "Learn about our comprehensive training program that has empowered over 5,000 women in the Tolon District with valuable skills in soap production and entrepreneurship.",
      content: "Since 2021, our soap-making training program has been transforming lives across the Tolon District. We believe that education and skill development are the keys to sustainable community growth. Our program goes beyond just teaching the technical aspects of soap production - we also provide business development training, marketing strategies, and ongoing support to help participants establish their own successful enterprises...",
      author: "Helen Akunyanra",
      date: "2024-01-10",
      category: "Community Impact",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1509100226070-1744f3cd5642?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvYXAlMjBtYWtpbmclMjB3aXRoJTIwYSUyMGJsYWNrJTIwd29tZW58ZW58MHx8MHx8fDA%3D",
      tags: ["Training", "Women Empowerment", "Entrepreneurship"]
    },
    {
      id: 3,
      title: "The Health Benefits of Groundnut Paste: A Ghanaian Superfood",
      excerpt: "Explore the nutritional benefits of groundnut paste and how this traditional Ghanaian food staple contributes to healthy living and sustainable nutrition.",
      content: "Groundnut paste, also known as peanut butter in some regions, is more than just a delicious spread - it's a nutritional powerhouse that has been part of Ghanaian diets for generations. Rich in protein, healthy fats, and essential vitamins, our groundnut paste is made from carefully selected peanuts grown in the fertile soils of northern Ghana...",
      author: "Helen Akunyanra",
      date: "2024-01-05",
      category: "Health & Wellness",
      readTime: "4 min read",
      image: "https://cdn.pixabay.com/photo/2024/07/01/04/15/ai-generated-8864296_960_720.png",
      tags: ["Nutrition", "Groundnut Paste", "Healthy Living"]
    },
    {
      id: 4,
      title: "From Dream to Reality: The Story of Nogma.H Enterprise",
      excerpt: "Follow the inspiring journey of how a simple dream in northern Ghana grew into a thriving enterprise that empowers thousands of women and serves communities across Ghana.",
      content: "Every great enterprise begins with a dream, and Nogma.H Enterprise is no exception. What started as a vision in 2019 has grown into a thriving business that not only produces quality products but also creates opportunities for community development. The journey hasn't been without challenges, but through determination, community support, and unwavering commitment to quality, we've built something truly special...",
      author: "Helen Akunyanra",
      date: "2023-12-28",
      category: "Company Story",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1655720357872-ce227e4164ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMHdvbWVuJTIwaW4lMjBhJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      tags: ["Entrepreneurship", "Success Story", "Community"]
    },
    {
      id: 5,
      title: "Sustainable Production: Our Commitment to Environmental Responsibility",
      excerpt: "Discover how Nogma.H Enterprise implements sustainable practices in our production processes, from sourcing raw materials to packaging and waste management.",
      content: "At Nogma.H Enterprise, we believe that business success and environmental responsibility go hand in hand. Our commitment to sustainable production practices is reflected in every aspect of our operations, from the way we source our raw materials to how we package and distribute our products. We work closely with local farmers who practice sustainable agriculture, ensuring that our ingredients are not only of the highest quality but also produced in ways that protect our environment for future generations...",
      author: "Helen Akunyanra",
      date: "2023-12-20",
      category: "Sustainability",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1585962485475-e411a40a1a6b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Sustainability", "Environment", "Green Business"]
    },
    {
      id: 6,
      title: "Tom Brown: The Perfect Start to Your Day",
      excerpt: "Learn about the traditional Ghanaian breakfast staple, Tom Brown, and how our version combines traditional recipes with modern nutritional science for optimal health benefits.",
      content: "Tom Brown is more than just a breakfast cereal - it's a cultural institution in Ghana that has been nourishing families for generations. Our Tom Brown is made from carefully selected maize, groundnuts, and other nutritious ingredients, all sourced from local farmers. The traditional preparation methods we use ensure that all the natural nutrients are preserved, making it an excellent choice for a healthy start to your day...",
      author: "Helen Akunyanra",
      date: "2023-12-15",
      category: "Product Stories",
      readTime: "5 min read",
      image: "https://africangoodsmarket.shop/cdn/shop/files/koko2_c92a9392-de8c-4686-a61c-e62b72d381c9.png?v=1713884341&width=1946",
      tags: ["Tom Brown", "Breakfast", "Traditional Food"]
    }
  ];

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export default function Blog({ cart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Product Stories", "Community Impact", "Health & Wellness", "Company Story", "Sustainability"];

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar cart={cart} />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#046404] via-[#2D5A27] to-[#4A7C59] py-24 pt-28 mt-15">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg font-Playfair mt-5">
            Our Blog
          </h1>
          <p className="text-2xl text-[#F5F5DC] font-medium max-w-3xl mx-auto leading-relaxed font-Playfair">
            Stories of empowerment, community impact, and the journey of Nogma.H Enterprise
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-20">
          {/* Search and Filter Section */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Search Bar */}
                <div className="flex-1">
                  <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D5A20A] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? "bg-[#D5A20A] text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-[#D5A20A] hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} formatDate={formatDate} />
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-[#046404] mb-2">No articles found</h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or category filter to find what you're looking for.
                </p>
              </div>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-20">
            <div className="bg-gradient-to-r from-[#046404] to-[#2D5A27] rounded-3xl shadow-2xl p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4 font-heading">
                Stay Updated
              </h3>
              <p className="text-[#F5F5DC] mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest stories, product updates, and community impact news directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#D5A20A] outline-none"
                />
                <button className="bg-[#D5A20A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#046404] transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
} 