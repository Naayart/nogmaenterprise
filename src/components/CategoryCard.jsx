export default function CategoryCard({ imageSrc, title, delay = 0 }) {
  return (
    <div
      className={`
        flex-shrink-0 w-72 rounded-2xl overflow-hidden 
        shadow-lg relative group transform transition duration-300
        hover:shadow-2xl hover:-translate-y-2
        animate-fade-up
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-80 object-cover block transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4 bg-[#092518]/90 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#092518]/80">
        <h3 className="text-white text-xl font-bold text-center opacity-80 group-hover:opacity-100 group-hover:translate-y-[-2px] transition duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
}
