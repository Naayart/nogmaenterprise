export default function NewsLetter() {
  return (
    <div className=" px-6 py-15 text-center space-y-6">
      {/* Header */}
      <h1 className="text-black  space-x-3 text-4xl md:text-5xl font-bold  font-heading mb-2">
        <span>Join</span>
        <span>Our</span>
        <span className="text-yellow-400">Newsletter</span>
      </h1>

      {/* Description */}
      <p className="text-gray-500 max-w-xl mx-auto font-medium text-base mb-4">
        Subscribe to our newsletter and be the first to know about our new products and special promotions.
      </p>

      {/* Form */}
      <form className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full sm:w-72 px-4 py-3 rounded-lg text-black bg-white placeholder-gray-500 focus:outline-none border"
        />
        <button className="bg-[#D5A20A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
      </form>
    </div>
  );
}

 <div className="mt-20">
            <div className=" rounded-3xl shadow-2xl p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4 font-heading">
                Stay Updated
              </h3>
              
              
            </div>
          </div>