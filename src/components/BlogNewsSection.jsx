import React, { useState, useEffect } from "react";

const blogImages = [
  "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
];

const newsImages = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1581093450021-3a73647c7cfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
];

const newsLinks = [
  "#sustainable-materials",
  "#construction-conference",
  "#bridge-techniques",
];

const BlogNewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prev) =>
          prev === newsImages.length - 1 ? 0 : prev + 1
        );
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="relative py-20 bg-[#f5f7fa]"
      style={{
        backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] z-0"></div>
      <div className="absolute inset-0 bg-white/80 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] gap-8 relative z-10 items-start">
        {/* Blog Section */}
        <div className="h-full">
          <h2 className="text-3xl font-bold text-orange-500 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            Blog
            <span className="w-2 h-2 rounded-full bg-orange-500" />
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Your go-to source for expert tips, ideas, and construction trends.
          </p>
          <div className="h-[420px] pr-3 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500/80 scrollbar-track-gray-100 hover:scrollbar-thumb-orange-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full space-y-6">
            {blogImages.map((src, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden group"
              >
                <img
                  src={src}
                  alt={`Blog ${idx}`}
                  className="w-full h-52 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e3a8a80] to-[#1e3a8a] flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {[
                      "5 Mistakes to Avoid While Building Your First Home",
                      "Why Planning is Crucial in Construction",
                      "Innovative Cement Use Cases",
                    ][idx]}
                  </h3>
                  <a
                    href="#"
                    className="text-white text-sm underline underline-offset-4 hover:text-orange-300 transition"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="hidden md:flex items-center justify-center h-[420px] my-auto relative">
          <div
            className="w-px h-3/4 bg-gradient-to-b from-transparent via-orange-400 to-transparent"
            style={{ boxShadow: "0 0 2px 0 rgba(249, 115, 22, 0.5)" }}
          ></div>
        </div>

        {/* News Section */}
        <div className="h-full">
          <h2 className="text-3xl font-bold text-orange-500 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            News & Events
            <span className="w-2 h-2 rounded-full bg-orange-500" />
          </h2>

          <p className="text-gray-700 text-lg mb-6">
            Your front-row seat to industry breakthroughs and upcoming events.
          </p>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[420px] flex flex-col">
            <div className="p-4 flex-1 flex items-center justify-center relative">
              {/* SVG CLIP FOR TOP-LEFT ONLY */}
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full z-0">
                <defs>
                  <clipPath id="topLeftClip" clipPathUnits="objectBoundingBox">
                    <path d="M0.1,0 Q0,0 0,0.1 L0,1 L1,1 L1,0 L0.1,0 Z" />
                  </clipPath>
                </defs>
              </svg>

              <a
                href={newsLinks[currentIndex]}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full max-w-sm relative z-10"
              >
                <img
                  src={newsImages[currentIndex]}
                  alt={`News ${currentIndex}`}
                  className="w-full h-full object-cover"
                  style={{ clipPath: "url(#topLeftClip)" }}
                />
              </a>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 pb-6">
              {newsImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "bg-orange-500 scale-110"
                      : "bg-blue-300 hover:bg-orange-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsSection;
