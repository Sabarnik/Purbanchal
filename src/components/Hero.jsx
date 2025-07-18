import React, { useRef, useEffect, useState } from 'react';

const HeroSection = () => {
  const videoRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => console.log('Autoplay prevented:', error));
    }
  }, []);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setTimeout(() => setShowContent(true), 300);
  };

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        {videoEnded ? (
          <div className="relative w-full h-full">
            <img
              src="/hero-fallback.jpg"
              alt="Fallback"
              className={`w-full h-full object-contain transition-opacity duration-1000 ${
                showContent ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start pl-8 pr-8 md:pl-36 md:pr-16 text-left">
              <h1
                className={`text-orange-600 text-[2.5rem] md:text-[4rem] leading-tight font-bold mb-4 transition-all duration-700 ease-out delay-100 ${
                  showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transition: 'opacity 700ms ease-out, transform 700ms ease-out' }}
              >
                Strong foundations<br />start here.
              </h1>

              <p
                className={`text-neutral-800 text-base md:text-lg font-medium mb-6 max-w-[32rem] transition-all duration-700 ease-out delay-200 ${
                  showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transition:
                    'opacity 700ms ease-out 200ms, transform 700ms ease-out 200ms',
                }}
              >
                Trusted for quality, engineered for durability & crafted for every kind of project.
              </p>

              <button
                className={`bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-700 ease-out delay-300 shadow-md hover:shadow-lg hover:scale-105 transform ${
                  showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transition:
                    'opacity 700ms ease-out 300ms, transform 700ms ease-out 300ms, background-color 300ms ease-out, box-shadow 300ms ease-out',
                }}
              >
                Let's Discuss
              </button>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-black">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="w-full h-full object-cover"
            >
              <source src="hero1-bg.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="relative z-10 -mt-20">
  <div className="mx-auto bg-white rounded-xl shadow-lg py-10 px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
    <div>
      <h3 className="text-orange-600 text-3xl md:text-4xl font-extrabold countup" data-target="25">25+</h3>
      <p className="text-sm md:text-base text-gray-700 mt-1">Years Excellence</p>
    </div>
    <div>
      <h3 className="text-orange-600 text-3xl md:text-4xl font-extrabold countup" data-target="1000">1000+</h3>
      <p className="text-sm md:text-base text-gray-700 mt-1">Clients Served</p>
    </div>
    <div>
      <h3 className="text-orange-600 text-3xl md:text-4xl font-extrabold countup" data-target="500">500+</h3>
      <p className="text-sm md:text-base text-gray-700 mt-1">Projects Completed</p>
    </div>
    <div>
      <h3 className="text-orange-600 text-3xl md:text-4xl font-extrabold countup" data-target="100">100%</h3>
      <p className="text-sm md:text-base text-gray-700 mt-1">Quality Assured</p>
    </div>
  </div>

  <script dangerouslySetInnerHTML={{
    __html: `
    document.addEventListener('DOMContentLoaded', () => {
      const countUpElements = document.querySelectorAll('.countup');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startCountUp(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      countUpElements.forEach(el => observer.observe(el));
      
      function startCountUp(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const suffix = element.textContent.match(/[^0-9]/g)?.join('') || '';
        const duration = 2000; // 2 seconds
        const startTime = performance.now();
        
        function updateCount(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const value = Math.floor(progress * target);
          
          element.textContent = value + suffix;
          
          if (progress < 1) {
            requestAnimationFrame(updateCount);
          }
        }
        
        requestAnimationFrame(updateCount);
      }
    });
    `
  }} />
</section>
    </>
  );
};

export default HeroSection;
