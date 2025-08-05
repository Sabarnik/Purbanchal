import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 3200, label: "MTPA", sub: "Annual Cement Capacity" },
  { value: 850, label: "Dealer Network", sub: "Dealers Across Regions" },
  { value: 320, label: "Retailer Network", sub: "Retail Touchpoints" },
  { value: 1000, label: "Customers", sub: "Customer Success" },
];

const buttonLabels = ["Surya Concreate", "Surya PPC", "Surya OPC", "Buy Fresh Bulk Cement"];

const Addition = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [activeButton, setActiveButton] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Lines */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-white to-[#f1f5f9]">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40 L40 0" stroke="#e2e8f0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-2">
          {/* Left Text */}
          <div className="md:w-2/3">
            <p className="text-sm text-orange-500 font-semibold mb-1 flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              The Strength You Trust. The Name You Know.
              <span className="w-2 h-0.5 bg-orange-500 inline-block"></span>
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#3366BB] mb-1">
              Purbanchal Cement Limited
            </h1>
            <h2 className="text-lg text-orange-600 font-semibold mb-2">
              Bharosa Wahi, Pehchan Nai!
            </h2>
            <p className="text-gray-600 max-w-xl mb-3">
              We deliver lasting strength and unmatched versatility adapting seamlessly to all construction needs.
            </p>
            <p className="text-gray-600 max-w-xl mb-3">
              From high-rises to homes, every mix of our cement stands for<span className="font-bold"> durability, reliability,</span> and <span className="font-bold">trust</span>.
            </p>
            <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 text-lg font-medium">
              Talk to Our Team
            </button>
          </div>

          {/* Orange Gradient Divider */}
          <div className="hidden md:block w-[2px] h-[140px] bg-gradient-to-b from-orange-500 via-orange-400 to-transparent mx-6" />

          {/* Top Right Buttons */}
          <div className="md:w-1/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
            {buttonLabels.map((label, index) => (
              <button
                key={index}
                onClick={() => setActiveButton(index)}
                className={`w-full h-[56px] box-border text-center rounded-lg text-base font-medium transition-all duration-200 border-2 whitespace-nowrap
                ${
                  activeButton === index
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-transparent shadow-md"
                    : "bg-white border-gray-300 text-[#3366BB] hover:shadow-md hover:border-orange-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Gradient Section */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-white to-[#002e6d] pt-2 pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-stretch gap-4">
          {/* Video Card - Enhanced with overlay */}
          <div className="lg:w-[70%] w-full relative rounded-xl overflow-hidden shadow-2xl aspect-[16/9] lg:h-[360px] clip-left transition-all duration-300 hover:shadow-2xl group">
            <img
              src={`${__IMAGE_BASE_PATH__}/additional.png`}
              alt="Construction"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            
            {/* Play Button and Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-6 text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white/90 hover:bg-white text-[#3366BB] p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg mb-4 group-hover:shadow-xl"
              >
                <FaPlay className="h-6 w-6" />
              </button>
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 drop-shadow-md">
                Building Trust with Every Bag
              </h3>
              <p className="text-white/90 text-sm sm:text-base max-w-md leading-snug drop-shadow-md">
                Discover our manufacturing process and commitment to quality that goes into every bag of Purbanchal Cement
              </p>
            </div>
          </div>

          {/* Stats Card */}
          <div
            ref={ref}
            className="lg:w-[30%] w-full h-[360px] bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-xl shadow-2xl p-5 text-white flex flex-col justify-center gap-3 clip-left transition-all duration-300 hover:shadow-2xl"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/90 text-orange-700 rounded-xl px-3 py-2.5 shadow-sm flex items-center gap-3 transition-all duration-200 hover:bg-white hover:shadow-md"
              >
                <div className="text-xl font-extrabold w-20 text-center bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg px-1 py-1.5">
                  {inView ? (
                    <CountUp 
                      end={stat.value} 
                      duration={2} 
                      suffix="+" 
                      className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700"
                    />
                  ) : (
                    <span className="text-gray-400">0+</span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm sm:text-base">{stat.label}</div>
                  <div className="text-xs text-orange-800/90">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Local Video */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-3xl w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl font-bold z-10"
            >
              ×
            </button>

            {/* Local Video */}
            <video
              controls
              autoPlay
              className="w-full h-auto"
            >
              <source src={`${__IMAGE_BASE_PATH__}/additional.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Addition;