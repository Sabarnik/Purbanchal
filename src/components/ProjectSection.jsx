/* global __IMAGE_BASE_PATH__ */
import React from "react";

const ProjectsSection = () => {
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

      <div className="diagonal-lines-bg"></div>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-lg md:text-2xl text-orange-500 font-semibold mb-3 animate-fadeIn">
            ← Our Projects →
          </h2>
          <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our journey through impactful real estate projects that reflect strength, quality, and attention to detail built to stand the test of time.
          </p>
        </div>

        {/* Project 1 */}
        <div className="relative cut-effect">
          <div className="flex flex-col lg:flex-row bg-[#2a5ba7] rounded-xl overflow-hidden mb-12 shadow-xl project-card">
            <div className="lg:w-1/2 relative overflow-hidden">
              <img
                src={`${__IMAGE_BASE_PATH__}/project1.png`}
                alt="Project Image"
                className="w-full h-full object-cover project-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 project-overlay" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 project-badge">
                <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium">
                  Featured Project
                </span>
              </div>
            </div>
            <div className="lg:w-1/2 p-8 md:p-10 text-white flex flex-col justify-center project-content">
              <h2 className="text-3xl font-bold mb-3 project-title">Ark - 1</h2>
              <p className="font-semibold text-orange-400 mb-5 project-subtitle">
                By Imperial Group
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-orange-400 font-medium project-detail">
                  📍 Guwahati, Assam
                </div>
                <div className="flex items-center gap-2 text-orange-400 font-medium project-detail">
                  📞 +91 12345 67890
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative cut-effect">
          <div className="flex flex-col lg:flex-row-reverse bg-[#2a5ba7] rounded-xl overflow-hidden mb-12 shadow-xl project-card">
            <div className="lg:w-1/2 relative overflow-hidden">
              <img
                src={`${__IMAGE_BASE_PATH__}/project1.png`}
                alt="Project Image"
                className="w-full h-full object-cover transform -scale-x-100 project-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 project-overlay" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 project-badge">
                <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium">
                  New Launch
                </span>
              </div>
            </div>
            <div className="lg:w-1/2 p-8 md:p-10 text-white flex flex-col justify-center project-content">
              <h2 className="text-3xl font-bold mb-3 project-title">Ark - 2</h2>
              <p className="font-semibold text-orange-400 mb-5 project-subtitle">
                By Imperial Group
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-orange-400 font-medium project-detail">
                  📍 Guwahati, Assam
                </div>
                <div className="flex items-center gap-2 text-orange-400 font-medium project-detail">
                  📞 +91 12345 67890
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
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
