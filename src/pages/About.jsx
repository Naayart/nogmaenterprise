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
      <div className="relative bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center justify-center text-center bg-[url(https://media.istockphoto.com/id/1142656815/photo/african-woman-mashing-cassava-flour-in-wooden-pod.jpg?s=1024x1024&w=is&k=20&c=hYur-dldEtSOSrBo88_A0wF8bOk6qcwBYf1W-jDK91c=)] mt-15 py-24 px-4">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 p-6 md:p-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-md">
            The Rise of Nogma H Enterprise
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-4  leading-relaxed drop-shadow">
            From a dream in Northern Ghana to empowering thousands, Nogma.H
            Enterprise is a story of vision, community, and hope... Crafting
            Natural Products and Empowering Local Skills.
          </p>
          <p className="text-base md:text-lg text-yellow-300 font-semibold italic">
            Support Nogma.H Enterprise: every product and service is a step
            toward a brighter future for all.
          </p>
        </div>
      </div>

      {/* Meet The Founder */}
      <section className=" py-24 text-black px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
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
              <h3 className="text-3xl md:text-4xl font-bold mb-4 ">
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#046404] mb-6">
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
              <h3 className="text-2xl font-bold text-[#046404] mb-4 text-center">
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
