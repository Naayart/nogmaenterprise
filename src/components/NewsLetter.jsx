export default function NewsLetter() {
  return (
    <div className="bg-[#4C6C3C] px-6 py-10 text-center space-y-6">
      {/* Header */}
      <h1 className="text-white font-extrabold text-3xl space-x-2">
        <span>Join</span>
        <span>Our</span>
        <span>Newsletter</span>
      </h1>

      {/* Description */}
      <p className="text-gray-200 max-w-xl mx-auto font-medium text-base">
        Subscribe to get special offers, free giveaways, and updates on new Ghanaian products!
      </p>

      {/* Form */}
      <form className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full sm:w-72 px-4 py-2 rounded-sm text-black bg-white placeholder-gray-500 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-[#D5A20A] text-white font-semibold px-6 py-2 rounded-sm hover:bg-yellow-600 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
