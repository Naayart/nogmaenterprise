import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import liquidSoapImg from "../assets/images/Liquid Soap.png";
import barSoapImg from "../assets/images/Bar-soap.jpeg";
import powderedPepperImg from "../assets/images/Powdered pepper.jpeg";
import profilePicture from "../assets/images/Profile Picture.jpeg";
import { useState, useEffect } from "react";

const images = [
  { src: liquidSoapImg, alt: "Liquid Soap" },
  { src: barSoapImg, alt: "Bar Soap" },
  { src: powderedPepperImg, alt: "Powdered Pepper" },
];

export default function About({ cart }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar cart={cart} />

      {/* Hero Section */}
      <div className="relative bg-[#046404] py-24 px-6 text-white text-center font-Playfair mt-15">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold italic drop-shadow-lg mb-4">
          Crafting Natural Products. Empowering Local Skills.
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-[#F5F5DC] max-w-3xl mx-auto leading-relaxed mb-10">
          From handmade soap to peanut butter, to powdered pepper, every product
          carries a story and every training empowers a life. This is Nogma H. Enterprise.
        </p>

        {/* Rotating Product Image */}
        <div className="mx-auto w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-3xl overflow-hidden shadow-xl border-4 border-white transition-all duration-700 mb-8">
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Optional Call-to-Action */}
        <button className="bg-white text-[#046404] px-6 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-[#f0f0f0] transition">
          Learn More About Our Journey
        </button>
      </div>

      {/* Main Content Section */}
      <div className="bg-white min-h-screen py-20 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 lg:pr-12">
            <div className="bg-[#68BC44] rounded-2xl shadow-2xl p-10 relative overflow-hidden font-Open">
              <h2 className="text-4xl font-bold text-[#046404] mb-6 text-left font-heading">
                The Rise of Nogma H Enterprise
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <p className="text-lg text-gray-700 mb-4 italic max-w-2xl">
                    From a dream in northern Ghana to empowering thousands,
                    Nogma.H Enterprise is a story of vision, community, and
                    hope...
                  </p>
                  <p className="text-base text-[#2c2929] font-semibold italic max-w-2xl">
                    Support Nogma.H Enterprise: every product and service is a
                    step toward a brighter future for all.
                  </p>
                </div>
                <div className="flex-1 flex justify-center">
                  <img
                    src={images[current].src}
                    alt={images[current].alt}
                    className="rounded-2xl shadow-xl w-[250px] md:w-[350px] h-[250px] md:h-[350px] object-cover border-4 border-white transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet The Founder */}
      <section className="bg-[#046404] py-24 text-white px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Meet The Founder
          </h2>
          <p className="text-xl text-[#F5F5DC] max-w-3xl mx-auto leading-relaxed">
            The visionary leader behind Nogma H Enterprise, bringing authentic
            Ghanaian products and community empowerment to you
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/3 flex justify-center">
              <img
                src={profilePicture}
                alt="Ms. Helen, Founder"
                className="rounded-3xl object-cover border-4 border-white shadow-2xl w-full h-[450px] max-w-[350px]"
              />
            </div>
            <div className="flex-1 text-[#F5F5DC]">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Helen Akunyanra
              </h3>
              <p className="text-[#D5A20A] font-semibold text-xl mb-6">
                Founder & CEO
              </p>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  As the visionary founder of{" "}
                  <strong className="text-[#D5A20A]">
                    Nogma H. Enterprise
                  </strong>
                  , Hajia Helen leads a fast-growing brand...
                </p>
                <p>
                  Her journey began in 2019, starting with Tombrown, powdered
                  pepper, and groundnut paste.
                </p>
                <p>
                  In 2021, she introduced liquid soap, training over{" "}
                  <strong className="text-[#D5A20A]">5,000 people</strong> in
                  Tolon.
                </p>
                <p>
                  She was named{" "}
                  <strong className="text-[#D5A20A]">Best Exhibitor</strong> at
                  Farmers' Day 2021.
                </p>
                <p>
                  Her goal is to become the{" "}
                  <strong className="text-[#D5A20A]">
                    leading female entrepreneur
                  </strong>{" "}
                  in Northern Ghana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="bg-white py-24 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#046404] mb-6 font-heading">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming communities through quality products and empowerment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Quality & Healthy Products",
              color: "#D5A20A",
              text: "Ms. Helen's innovative spirit led her to experiment with peanut butter... affordable products for her community.",
            },
            {
              title: "Empowering Communities",
              color: "#046404",
              text: "By mentoring secondary school leavers and exposing them to production processes...",
            },
            {
              title: "Supporting Local Business",
              color: "#D5A20A",
              text: "Ms. Helen collaborates with other Ghanaian entrepreneurs... uplifts the local economy.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`bg-white rounded-3xl shadow-xl p-8 border-t-8`}
              style={{ borderTopColor: card.color }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: card.color }}
              >
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
                    d={
                      i === 0
                        ? "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        : i === 1
                        ? "M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                        : "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"
                    }
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#046404] mb-4 text-center font-heading">
                {card.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
