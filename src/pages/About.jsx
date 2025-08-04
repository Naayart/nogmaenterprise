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
      <div className="relative bg-white py-24 px-4 md:px-8 text-black font-Playfair overflow-hidden mt-15 ">
        {/* Decorative Gold Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-40 bg-gradient-to-r  blur-2xl opacity-60 pointer-events-none" />

        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold  font-Accent  drop-shadow-xl mb-6 tracking-tight"> 
              <span className="bg-gradient-to-r text-black bg-clip-text ">
                Crafting Natural Products.
              </span>
              <span className="text-yellow-400 font-extrabold text-4xl">Empowering </span>
              <span className=" text-black">Local Skills.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-gray-600 mb-8 font-Accent">
              From handmade soap to peanut butter, to powdered pepper, every product
              carries a story and every training empowers a life.
              <br />
              <span className="text-green-400 font-bold text-2xl">
                This is Nogma H. Enterprise.
              </span>
            </p>

            {/* Call-to-Action */}
            {/* <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#046404] px-8 py-3 text-lg font-bold rounded-full shadow-lg hover:from-white hover:to-yellow-200 hover:text-green-800 transition-colors duration-200 border-2 border-yellow-400">
              Learn More About Our Journey
            </button> */}
          </div>

          {/* Right Content: Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            {/* Rotating Product Image with Gold Glow */}
            <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group transition-all duration-700">
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none group-hover:scale-105 transition-transform duration-500"
                style={{
                  boxShadow: "0 0 40px 10px #FFD70055",
                }}
              />
              <img
                src={images[current].src}
                alt={images[current].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white py-20 px-4">
        <div className="container mx-auto">
          <div className="relative overflow-hidden bg-cover  min-h-[500px] flex items-center justify-center text-center bg-[url(https://media.istockphoto.com/id/1142656815/photo/african-woman-mashing-cassava-flour-in-wooden-pod.jpg?s=1024x1024&w=is&k=20&c=hYur-dldEtSOSrBo88_A0wF8bOk6qcwBYf1W-jDK91c=)] font-Open">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-16 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                The Rise of Nogma H Enterprise
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-4 italic">
                From a dream in Northern Ghana to empowering thousands, Nogma.H
                Enterprise is a story of vision, community, and hope...
              </p>
              <p className="text-base md:text-lg text-yellow-300 font-semibold italic">
                Support Nogma.H Enterprise: every product and service is a step
                toward a brighter future for all.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet The Founder */}
      <section className=" py-24 text-black px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Meet The Founder
          </h2>
          <p className="text-xl text-[#0f0f0d] max-w-3xl mx-auto leading-relaxed">
            The visionary leader behind Nogma H Enterprise, bringing authentic
            Ghanaian products and community empowerment to you
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl  p-8 md:p-12 border border-white/20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/3 flex justify-center">
              <img
                src={profilePicture}
                alt="Ms. Helen, Founder"
                className="rounded-3xl object-cover border-4 border-white shadow-2xl w-full h-[450px] max-w-[350px]"
              />
            </div>
            <div className="flex-1 text-[#1b1b19]">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Helen Akunyanra
              </h3>
              <p className="text-yellow-400 font-semibold text-xl mb-6">
                Founder & CEO
              </p>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  As the visionary founder of{" "}
                  <strong className="text-yellow-400">
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
                  <strong className="text-yellow-400">5,000 people</strong> in
                  Tolon.
                </p>
                <p>
                  She was named{" "}
                  <strong className="text-yellow-400">Best Exhibitor</strong> at
                  Farmers' Day 2021.
                </p>
                <p>
                  Her goal is to become the{" "}
                  <strong className="text-yellow-400">
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
