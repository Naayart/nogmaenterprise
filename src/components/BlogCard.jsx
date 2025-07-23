import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function BlogCard({ post, formatDate }) {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
        <div className="absolute top-4 left-4">
          <span className="bg-[#D5A20A] text-white px-3 py-1 rounded-full text-xs font-semibold">{post.category}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FiUser size={14} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FiCalendar size={14} />
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
          <span className="text-[#D5A20A] font-medium">{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-[#046404] mb-3 line-clamp-2 hover:text-[#D5A20A] transition-colors">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, i) => (
            <span key={i} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">{tag}</span>
          ))}
        </div>
        <Link to={`/blog/${post.id}`} className="flex items-center space-x-2 text-[#D5A20A] font-semibold hover:text-[#046404] transition-colors group">
          <span>Read More</span>
          <FiArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
} 