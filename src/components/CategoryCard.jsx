export default function CategoryCard({ imageSrc , title}) {
  

  return (
    <div className="flex-shrink-0 w-72 rounded-2xl overflow-hidden shadow-lg relative group transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
      <img src={imageSrc} alt={title} className="w-full h-80 object-cover block" />
      <div className="absolute bottom-0 left-0 w-full p-4 bg-[#D5A20A] bg-opacity-90">
        <h3 className="text-white text-xl font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  );
}