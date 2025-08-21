import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts, formatDate } from "./Blog";

export default function BlogDetail({ cart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Blog Not Found</h2>
          <button
            onClick={() => navigate("/blog")}
            className="bg-[#046404] text-white px-6 py-2 rounded"
          >
            Back to Blog
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen pt-24 pb-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8">
          <button
            onClick={() => navigate("/blog")}
            className="mb-4 text-[#046404] hover:underline"
          >
            ← Back to Blog
          </button>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <div className="flex items-center space-x-4">
              <span>{post.author}</span>
              <span>{formatDate(post.date)}</span>
            </div>
            <span className="text-[#D5A20A] font-medium">{post.readTime}</span>
          </div>
          <h1 className="text-3xl font-bold text-[#046404] mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>
        </div>
      </div>
    </>
  );
}
