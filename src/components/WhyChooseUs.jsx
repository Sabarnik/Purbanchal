import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-lg md:text-2xl text-orange-500 font-semibold mb-3 animate-fadeIn">
            ← Why Choose Us? →
          </h2>
          <p className="animate-fadeIn delay-100">
            <span className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Purbanchal Cement is the foundation of India's growth, trusted by
              builders big and small for its unmatched quality and reliability
            </span>
          </p>
        </div>

        {/* Main Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 animate-slideUp">
          {/* Left Blue Panel */}
          <div className="relative bg-[#3366BB] text-white p-8 space-y-6">
            {/* Orange Tab (left side) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-2 bg-orange-500 rounded-r animate-pulse-slow" />

            {/* Items */}
            {[
              {
                icon: "https://cdn-icons-png.flaticon.com/512/3522/3522658.png",
                title: "Quality That Speaks Volumes",
                desc: "Our cement delivers strength that lasts and performance you can trust.",
              },
              {
                icon: "https://cdn-icons-png.flaticon.com/512/4776/4776924.png",
                title: "Price Meets Performance",
                desc: "Premium strength, smart pricing, because your project deserves the best without the extra cost.",
              },
              {
                icon: "https://cdn-icons-png.flaticon.com/512/10033/10033835.png",
                title: "Experience That Builds Confidence",
                desc: "Over 20 years of expertise means we know how to deliver cement that never lets you down.",
              },
              {
                icon: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
                title: "Innovation That Powers Progress",
                desc: "We stay ahead with cutting-edge tech and continuous R&D, ensuring every batch is better than the last.",
              },
              {
                icon: "https://cdn-icons-png.flaticon.com/512/1570/1570887.png",
                title: "Service That Has Your Back",
                desc: "From start to finish, our dedicated team is here to support your project hassle-free and always reliable.",
              },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-4 group transition-all duration-300 hover:scale-[1.02] hover:pl-2"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-6 h-6 mt-1 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                />
                <div>
                  <h3 className="font-bold text-white mb-1 group-hover:text-orange-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image Panel - Fixed overlay cropping */}
          <div className="relative group min-h-[500px] md:min-h-full overflow-hidden">
            {/* Orange Tab (right side) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-2 bg-orange-500 rounded-l z-20 animate-pulse-slow" />
            <div className="relative h-full w-full">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="why-choose-us.png"
                  alt="Construction site"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#003c88]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2.5s infinite;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;