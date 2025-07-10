import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import liquidSoapImg from "../assets/images/Liquid Soap.png";
import barSoapImg from "../assets/images/Bar-soap.jpeg";
import powderedPepperImg from "../assets/images/Powdered pepper.jpeg";
import { useState, useEffect } from "react";
import profilePicture from "../assets/images/Profile picture.jpeg";

const images = [
  { src: liquidSoapImg, alt: "Liquid Soap" },
  { src: barSoapImg, alt: "Bar Soap" },
  { src: powderedPepperImg, alt: "Powdered Pepper" },
];

export default function About() {
  const [current, setCurrent] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section - Added pt-24 to account for fixed navbar */}
      <div className="bg-gradient-to-br from-[#2D5A27] via-[#4A7C59] to-[#6B8E23] py-20 pt-24">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            The Rise of Nogma H Enterprise
          </h3>
          <p className="text-xl text-[#F5F5DC] font-medium">
            A Story of Community Impact and Sustainable Growth
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gradient-to-b from-[#F8F9FA] to-white min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Story Content */}
            <div className="flex-1 lg:pr-12">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#D4AF37]">
                <h1 className="text-4xl font-bold text-[#2D5A27] mb-8">
                  Our Story
                </h1>
                <p className="text-lg leading-relaxed text-[#4A5568]">
                  In the heart of northern Ghana, a visionary entrepreneur
                  recognized more than just the basic need for household
                  products. She saw a path to empowerment and community growth.
                  Nogma H Enterprise was founded with a passion for creating
                  high-quality, affordable, and locally produced goods that
                  support both hygiene and healthy living. What began with small
                  batches of liquid soap made in her home kitchen quickly gained
                  traction due to its exceptional quality, affordability, and
                  refreshing scent. As demand increased, so did her ambition.
                  Today, she also offers hands-on training in the production of
                  both liquid and bar soaps, catering to individuals who wish to
                  learn and start their own ventures. She is available for
                  personalized, one-on-one sessions designed to fit your
                  schedule. Just reach out and book her services. We invite you
                  to support Nogma H Enterprise. Once you experience our
                  products and services, we're confident you'll be glad you did.
                </p>
              </div>
            </div>

            {/* Image Carousel */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                {/* Gold border frames */}
                <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-4 border-[#D4AF37] z-0 shadow-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-4 border-[#B8860B] z-0 shadow-lg"></div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-[#D4AF37] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 border border-[#D4AF37]"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-[#D4AF37] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 border border-[#D4AF37]"
                  aria-label="Next image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                <img
                  src={images[current].src}
                  alt={images[current].alt}
                  className="relative rounded-2xl shadow-xl w-[320px] md:w-[380px] h-[320px] md:h-[380px] z-10 transition-all duration-700 object-cover border-2 border-white"
                />

                {/* Carousel Indicators */}
                <div className="flex justify-center mt-8 space-x-4">
                  {images.map((img, idx) => (
                    <button
                      key={img.alt}
                      className={`w-5 h-5 rounded-full transition-all duration-300 border-2 border-[#D4AF37] ${
                        idx === current
                          ? "bg-[#D4AF37] scale-125 shadow-lg"
                          : "bg-white/60 hover:bg-white"
                      }`}
                      onClick={() => setCurrent(idx)}
                      aria-label={`Show ${img.alt}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet The Founder Section */}
      <section className="bg-[#18212F] py-20 mt-0">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Meet The Founder
          </h2>
          <p className="text-lg text-[#F5F5DC] text-center mb-12 max-w-2xl mx-auto">
            The visionary leader behind Nogma H Enterprise, bringing authentic
            Ghanaian products and community empowerment to you
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl mx-auto bg-[#101828] rounded-2xl shadow-xl p-6 md:p-10 border-t-8 border-[#D4AF37]">
            {/* Founder Image */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <img
                src={profilePicture}
                alt="Ms. Helen, Founder of Nogma H Enterprise"
                className="rounded-xl object-cover border-4 border-[#D4AF37] bg-white shadow-lg w-full h-[400px] md:h-full max-h-[500px] mt-30"
              />
            </div>

            {/* Founder Info */}
            <div className="flex-1 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Helen Akunyanra
              </h3>
              <p className="text-[#D4AF37] font-semibold mb-4">Founder & CEO</p>
              <p className="text-base md:text-lg text-[#F5F5DC] leading-relaxed">
                As the visionary founder of Nogma H. Enterprise, Hajia Helen
                Akunyanra leads a fast-growing Ghanaian brand producing local
                food and household essentials. Her entrepreneurial journey began
                in 2019, inspired by a dream and supported by her mentor, Mr.
                Joseph Payre. She started with Tombrown, powdered pepper, and
                groundnut paste. In 2021, another dream led her to introduce
                liquid soap, training over 5,000 people in the Tolon District.
                Her products have received FDA approval. She was named Best
                Exhibitor at Farmers’ Day in Watugu (2021). She has received
                training from Kosmos Innovation Center, TVET Ghana, and the
                Canadian Youth Programme. She currently manages 7 workers and is
                building a production space for Tombrown. She works with a board
                of directors to grow her business. Her goal is to become the
                leading female entrepreneur in Northern Ghana and expand
                globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Subsection */}
      <section className="bg-[#18212F] py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Our Impact
          </h3>
          <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-stretch">
            {/* Card 1 */}
            <div className="flex-1 bg-[#232F3E] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-[#D4AF37]">
              <h4 className="text-xl font-bold text-white mb-3">
                Quality and Healthy Food Products
              </h4>
              <p className="text-[#F5F5DC] text-base">
                Ms. Helen's innovative spirit led her to experiment with peanut
                butter made from peanut, catering to those who would require
                them. She is dedicated to producing high-quality, healthy, and
                affordable products for her community.
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex-1 bg-[#232F3E] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-[#D4AF37]">
              <h4 className="text-xl font-bold text-white mb-3">
                Empowering the Youth and Community
              </h4>
              <p className="text-[#F5F5DC] text-base">
                By mentoring secondary school leavers and exposing them to
                production processes, Ms. Helen ensures the development of a
                skilled workforce. She offers hands-on training in soap making
                and other entrepreneurial skills, inspiring the next generation
                especially to the women.
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex-1 bg-[#232F3E] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-[#D4AF37]">
              <h4 className="text-xl font-bold text-white mb-3">
                Supporting and Promoting Local Businesses
              </h4>
              <p className="text-[#F5F5DC] text-base">
                Ms. Helen collaborates with other Ghanaian entrepreneurs,
                promoting local products such as her niche shea butter, powdered
                pepper, and Ghana-made cleaning products alongside her own. Her
                work uplifts the local economy and fosters community growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
}
