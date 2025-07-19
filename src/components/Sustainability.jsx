import React from "react";

const SustainabilitySection = () => {
  return (
    <section className="bg-white py-16 px-4 relative">
      {/* Right-side background pattern */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('/esg-pattern.png')] bg-no-repeat bg-right bg-contain opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Heading */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <h2 className="text-lg md:text-2xl text-orange-500 font-semibold mb-3">
            ← Cementing ESG Commitments →
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Committed to eco-friendly practices, energy-efficient processes, and
          community well-being to build a greener, safer tomorrow.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
          {[
            {
              title: "Environment",
              img: "environment.png",
              alt: "Environment",
              overlayText:
                "Reducing carbon footprint through sustainable manufacturing",
              gradientFrom: "from-green-500/20",
              gradientTo: "to-green-900/70",
            },
            {
              title: "Social",
              img: "social.png",
              alt: "Social",
              overlayText: "Empowering communities through inclusive growth",
              gradientFrom: "from-blue-500/20",
              gradientTo: "to-blue-900/70",
            },
            {
              title: "Governance",
              img: "governance.png",
              alt: "Governance",
              overlayText:
                "Ethical leadership with transparent business practices",
              gradientFrom: "from-purple-500/20",
              gradientTo: "to-purple-900/70",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg aspect-square group"
            >
              {/* Orange border effect */}
              <div className="absolute inset-0 border-b-8 border-r-8 border-orange-500 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none"></div>

              {/* Image container with proper aspect ratio */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: "center top" }}
                />
              </div>

              {/* Fading gradient overlay (on hover) */}
              <div className={`absolute inset-0 bg-gradient-to-t ${card.gradientFrom} ${card.gradientTo} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

              {/* Default Title (disappears on hover) */}
              <div className="absolute bottom-0 left-0 p-6 w-full transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-white text-xl md:text-2xl font-bold text-left">
                  {card.title}
                </h3>
              </div>

              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                <h3 className="text-white text-2xl md:text-3xl font-bold text-left mb-3">
                  {card.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base font-medium text-left">
                  {card.overlayText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;