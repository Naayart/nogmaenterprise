import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import liquidSoapImg from "../assets/images/Liquid Soap.png";
import barSoapImg from "../assets/images/Bar-soap.jpeg";
import powderedPepperImg from "../assets/images/Powdered pepper.jpeg";
import { useState, useEffect } from "react";
import profilePicture from "../assets/images/Profile Picture.jpeg";

const images = [
  { src: liquidSoapImg, alt: "Liquid Soap" },
  { src: barSoapImg, alt: "Bar Soap" },
  { src: powderedPepperImg, alt: "Powdered Pepper" },
];

export default function About({ cart }) {
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
      <Navbar cart={cart} />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#046404] via-[#2D5A27] to-[#4A7C59] py-24 pt-20 mt-15">
        <div className="container mx-auto px-4 text-center font-Playfair">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg font-heading italic">
            Our Story
          </h1>
          <p className="text-2xl text-[#F5F5DC] font-medium max-w-3xl mx-auto leading-relaxed">
            A journey of passion, community impact, and sustainable growth in
            the heart of Ghana
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Story Content */}
            <div className="flex-1 lg:pr-12">
              <div className="bg-[#68BC44] rounded-2xl shadow-2xl p-10 relative overflow-hidden font-Open">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B4E4AC] rounded-full -translate-y-16 translate-x-16"></div>

                <h2 className="text-4xl md:text-4xl font-bold text-[#046404] mb-0 text-left font-heading">
                  The Rise of Nogma H Enterprise
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Text Content Left */}
                  <div className="flex-1">
                    <p className="text-lg text-gray-700 mb-4 max-w-2xl italic mt-0">
                      From a dream in northern Ghana to empowering thousands, Nogma.H Enterprise is a story of vision, community, and hope. What began with small batches of soap in a home kitchen has grown into a movement for quality, empowerment, and sustainable impact.
                    </p>
                    <p className="text-base text-[#2c2929] font-semibold max-w-2xl italic">
                      Support Nogma.H Enterprise: every product and service is a step toward a brighter future for all.
                    </p>
                  </div>
                  {/* Image Carousel Right */}
                  <div className="flex-1 flex justify-center">
                    <div className="relative mb-7">
                      <img
                        src={images[current].src}
                        alt={images[current].alt}
                        className="relative rounded-2xl shadow-xl w-[250px] md:w-[350px] h-[250px] md:h-[350px] object-cover border-4 border-white z-10 transition-all duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Meet The Founder Section */}
      <section className="bg-gradient-to-br from-[#046404] via-[#2D5A27] to-[#1a2e05] py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Meet The Founder
            </h2>
            <p className="text-xl text-[#F5F5DC] max-w-3xl mx-auto leading-relaxed">
              The visionary leader behind Nogma H Enterprise, bringing authentic
              Ghanaian products and community empowerment to you
            </p>
          </div>

          <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Founder Image */}
              <div className="w-full lg:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl  z-0"></div>
                  <img
                    src={profilePicture}
                    alt="Ms. Helen, Founder of Nogma H Enterprise"
                    className="relative rounded-3xl object-cover border-4 border-white shadow-2xl w-full h-[450px] max-w-[350px] z-10"
                  />
                </div>
              </div>

              {/* Founder Info */}
              <div className="flex-1 text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                  Helen Akunyanra
                </h3>
                <p className="text-[#D5A20A] font-semibold text-xl mb-6">
                  Founder & CEO
                </p>
                <div className="space-y-4 text-lg leading-relaxed text-[#F5F5DC]">
                  <p>
                    As the visionary founder of{" "}
                    <strong className="text-[#D5A20A]">
                      Nogma H. Enterprise
                    </strong>
                    , Hajia Helen Akunyanra leads a fast-growing Ghanaian brand
                    producing local food and household essentials.
                  </p>
                  <p>
                    Her entrepreneurial journey began in 2019, inspired by a
                    dream and supported by her mentor, Mr. Joseph Payre. She
                    started with Tombrown, powdered pepper, and groundnut paste.
                  </p>
                  <p>
                    In 2021, another dream led her to introduce liquid soap,
                    training over{" "}
                    <strong className="text-[#D5A20A]">5,000 people</strong> in
                    the Tolon District. Her products have received FDA approval.
                  </p>
                  <p>
                    She was named{" "}
                    <strong className="text-[#D5A20A]">Best Exhibitor</strong>{" "}
                    at Farmers' Day in Watugu (2021). She has received training
                    from Kosmos Innovation Center, TVET Ghana, and the Canadian
                    Youth Programme.
                  </p>
                  <p>
                    She currently manages 7 workers and is building a production
                    space for Tombrown. She works with a board of directors to
                    grow her business. Her goal is to become the{" "}
                    <strong className="text-[#D5A20A]">
                      leading female entrepreneur
                    </strong>{" "}
                    in Northern Ghana and expand globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#046404] mb-6 font-heading">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming communities through quality products and empowerment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-t-8 border-[#D5A20A] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D5A20A] to-[#FFD233] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#046404] mb-4 text-center font-heading">
                Quality & Healthy Products
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Ms. Helen's innovative spirit led her to experiment with peanut
                butter made from peanut, catering to those who would require
                them. She is dedicated to producing high-quality, healthy, and
                affordable products for her community.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-t-8 border-[#046404] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#046404] to-[#2D5A27] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#046404] mb-4 text-center font-heading">
                Empowering Communities
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                By mentoring secondary school leavers and exposing them to
                production processes, Ms. Helen ensures the development of a
                skilled workforce. She offers hands-on training in soap making
                and other entrepreneurial skills, inspiring the next generation
                especially women.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-t-8 border-[#D5A20A] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D5A20A] to-[#FFD233] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#046404] mb-4 text-center font-heading">
                Supporting Local Business
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Ms. Helen collaborates with other Ghanaian entrepreneurs,
                promoting local products such as her niche shea butter, powdered
                pepper, and Ghana-made cleaning products alongside her own. Her
                work uplifts the local economy and fosters community growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
