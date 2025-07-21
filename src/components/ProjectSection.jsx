import React from "react";

const ProjectsSection = () => {
  // Inline styles for animations and visual effects
  const styles = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    .animate-fadeIn {
      animation: fadeIn 1s ease-in-out;
    }
    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    .project-card {
      transition: all 0.5s ease;
      position: relative;
      overflow: hidden;
      opacity: 0.95;
    }
    .project-card:hover {
      opacity: 1;
      transform: translateY(-4px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    .project-image {
      transition: transform 0.7s ease;
    }
    .project-card:hover .project-image {
      transform: scale(1.1);
    }
    .project-overlay {
      transition: opacity 0.5s ease;
    }
    .project-card:hover .project-overlay {
      opacity: 1;
    }
    .project-badge {
      transition: transform 0.5s ease;
    }
    .project-card:hover .project-badge {
      transform: translateY(0);
    }
    .project-content {
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    .project-card:hover .project-content {
      background-color: #2a5ba7;
    }
    .project-card:hover .project-title {
      color: #f97316;
    }
    .project-card:hover .project-subtitle {
      color: #fb923c;
    }
    .project-card:hover .project-description {
      color: #f3f4f6;
    }
    .project-icon {
      transition: transform 0.3s ease;
    }
    .project-card:hover .project-icon {
      transform: scale(1.1);
    }
    .project-card:hover .project-detail {
      color: #fb923c;
    }
    .view-all-btn {
      transition: all 0.5s ease;
      position: relative;
      overflow: hidden;
    }
    .view-all-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    .cut-effect {
      position: relative;
    }
    .cut-effect::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      height: 30px;
      background: #3366BB;
      clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
      z-index: 2;
    }
    .diagonal-lines-bg {
      position: absolute;
      inset: 0;
      background: 
        linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.08) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.08) 50%,
          rgba(255, 255, 255, 0.08) 75%,
          transparent 75%,
          transparent
        );
      background-size: 20px 20px;
      opacity: 0.5;
      z-index: 0;
    }
  `;

  return (
    <div className="bg-[#3366BB] w-full overflow-hidden relative">
      <style>{styles}</style>
      {/* Diagonal lines background pattern */}
      <div className="diagonal-lines-bg"></div>
      
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 transition-all duration-500 hover:scale-[1.01]">
          <h2 className="text-lg md:text-2xl text-orange-500 font-semibold mb-3 animate-fadeIn">
            ← Our Projects →
          </h2>
          <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-500 hover:text-opacity-90">
            Explore our journey through impactful real estate projects that
            reflect strength, quality, and attention to detail built to stand
            the test of time.
          </p>
        </div>

        {/* Project 1 (Image Left) */}
        <div className="relative cut-effect">
          <div className="flex flex-col lg:flex-row bg-[#2a5ba7] rounded-xl overflow-hidden mb-12 shadow-xl project-card">
            {/* Image */}
            <div className="lg:w-1/2 relative overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 w-full h-full">
                <img
                  src="project1.png"
                  alt="Project Image"
                  className="w-full h-full object-cover project-image"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 project-overlay" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 project-badge">
                <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium">
                  Featured Project
                </span>
              </div>
            </div>
            {/* Text Content */}
            <div className="lg:w-1/2 p-8 md:p-10 text-white flex flex-col justify-center project-content">
              <h2 className="text-3xl font-bold mb-3 transition-all duration-300 project-title">
                Ark - 1
              </h2>
              <p className="font-semibold text-orange-400 mb-5 transition-all duration-300 project-subtitle">
                By Imperial Group
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed transition-all duration-300 project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-orange-400 font-medium transition-all duration-300 project-detail">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-shrink-0 project-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Guwahati, Assam</span>
                </div>
                <div className="flex items-center gap-2 text-orange-400 font-medium transition-all duration-300 project-detail">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-shrink-0 project-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+91 12345 67890</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 (Image Right) */}
        <div className="relative cut-effect">
          <div className="flex flex-col lg:flex-row-reverse bg-[#2a5ba7] rounded-xl overflow-hidden mb-12 shadow-xl project-card">
            {/* Image */}
            <div className="lg:w-1/2 relative overflow-hidden">
  <div className="aspect-w-16 aspect-h-9 w-full h-full">
    <img
      src="project1.png"
      alt="Project Image"
      className="w-full h-full object-cover transform -scale-x-100"
    />
  </div>


              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 project-overlay" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 project-badge">
                <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium">
                  New Launch
                </span>
              </div>
            </div>
            {/* Text Content */}
            <div className="lg:w-1/2 p-8 md:p-10 text-white flex flex-col justify-center project-content">
              <h2 className="text-3xl font-bold mb-3 transition-all duration-300 project-title">
                Ark - 2
              </h2>
              <p className="font-semibold text-orange-400 mb-5 transition-all duration-300 project-subtitle">
                By Imperial Group
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed transition-all duration-300 project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-orange-400 font-medium transition-all duration-300 project-detail">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-shrink-0 project-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Guwahati, Assam</span>
                </div>
                <div className="flex items-center gap-2 text-orange-400 font-medium transition-all duration-300 project-detail">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-shrink-0 project-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+91 12345 67890</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 animate-fadeIn">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full view-all-btn">
            <span className="relative z-10">View All Projects</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;