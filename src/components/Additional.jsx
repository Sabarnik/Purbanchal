import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 3200, label: "MTPA", sub: "Cement Capacity" },
  { value: 850, label: "Dealer Network", sub: "Pan Regional Reach" },
  { value: 320, label: "Retailer Network", sub: "Retail Chain Points" },
  { value: 1000, label: "Customers", sub: "Customer Success" },
];

const buttonLabels = ["Surya Concreate", "Surya PPC", "Surya OPC", "Buy Fresh Bulk Cement"];

const Addition = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [activeButton, setActiveButton] = useState(null);

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-4 items-start mb-2">
          {/* Left Text */}
          <div className="md:w-2/3">
            <p className="text-sm text-orange-500 font-semibold mb-1 flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              Where Strength Meets Trust
              <span className="w-2 h-0.5 bg-orange-500 inline-block"></span>
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">
              Purbanchal Cement Limited
            </h1>
            <h2 className="text-lg text-orange-600 font-semibold mb-2">
              Bharosa Wahi, Pehchan Nai!
            </h2>
            <p className="text-gray-600 max-w-xl mb-3">
              We deliver lasting strength and unmatched versatility, adapting
              to every foundation, from high-rises to homes, with consistent
              durability, reliability, and trust in every mix.
            </p>
            <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 text-lg font-medium">
              Let&apos;s Discuss
            </button>
          </div>

          {/* Orange Gradient Divider */}
          <div className="hidden md:block w-[2px] h-[140px] bg-gradient-to-b from-orange-500 via-orange-400 to-transparent mx-6" />

          {/* Sleek Top Right Buttons */}
         <div className="md:w-1/3 grid grid-cols-2 gap-3">
  {buttonLabels.map((label, index) => (
    <button
      key={index}
      onClick={() => setActiveButton(index)}
      className={`min-w-[240px] h-[56px] box-border text-center rounded-lg text-base font-medium transition-all duration-200 border-2 whitespace-nowrap
      ${
        activeButton === index
          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-transparent shadow-md"
          : "bg-white border-gray-300 text-blue-900 hover:shadow-md hover:border-orange-300"
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-stretch gap-4">
          {/* Video Card */}
          <div className="lg:w-[70%] w-full relative rounded-xl overflow-hidden shadow-2xl aspect-[16/9] lg:h-[360px] clip-left transition-all duration-300 hover:shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=2070&q=80"
              alt="Construction"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300 hover:bg-black/30">
              <button className="bg-white/90 hover:bg-white text-blue-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg">
                <FaPlay className="h-5 w-5" />
              </button>
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
    </section>
  );
};

export default Addition;