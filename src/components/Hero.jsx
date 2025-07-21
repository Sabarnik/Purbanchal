import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';

// Animation delays (ms)
const ANIMATION_DELAYS = {
  content: 100,
  bags: [500, 1000, 1500],
  logo: 2200,
};

const useIntersection = (ref, threshold = 0.5) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isIntersecting;
};

const CountUp = React.memo(({ target, suffix = '', children }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef();
  const isVisible = useIntersection(ref);

  useEffect(() => {
    if (!started && isVisible) setStarted(true);
  }, [isVisible, started]);

  useEffect(() => {
    if (!started) return;
    let animFrame;
    const start = performance.now();
    const duration = 1400;

    const animate = (now) => {
      const elapsed = Math.min(now - start, duration);
      const next = Math.floor((elapsed / duration) * target);
      setCount(next < target ? next : target);
      if (elapsed < duration) {
        animFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, [started, target]);

  return (
    <div ref={ref} className="transition-all duration-500 ease-out transform hover:scale-105 px-2">
      <h3 className="text-orange-600 text-3xl sm:text-4xl md:text-5xl font-extrabold">
        {count}
        {suffix}
      </h3>
      <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-1">{children}</p>
    </div>
  );
});

const HeroSection = () => {
  const videoRef = useRef(null);
  const statsSectionRef = useRef(null);

  const [videoEnded, setVideoEnded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showBags, setShowBags] = useState([false, false, false]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleAutoplayFallback = useCallback(() => {
    setVideoEnded(true);
    setShowContent(true);
    setShowBags([true, true, true]);
    setTimeout(() => setShowLogo(true), ANIMATION_DELAYS.logo);
  }, []);

  const handleVideoEnd = useCallback(() => {
    setVideoEnded(true);
    setTimeout(() => setShowContent(true), ANIMATION_DELAYS.content);
    ANIMATION_DELAYS.bags.forEach((delay, idx) =>
      setTimeout(() => setShowBags((prev) => {
        const updated = [...prev];
        updated[idx] = true;
        return updated;
      }), delay)
    );
    setTimeout(() => setShowLogo(true), ANIMATION_DELAYS.logo);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.loop = false;
    video.play().catch(() => handleAutoplayFallback());
    video.addEventListener('ended', handleVideoEnd);
    return () => video.removeEventListener('ended', handleVideoEnd);
  }, [handleAutoplayFallback, handleVideoEnd]);

  const getAnimationClass = useCallback((show, delay = 0) =>
    [
      'transition-all duration-1000 ease-[cubic-bezier(0.33,1,0.68,1)]',
      show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      delay ? `delay-${delay}` : ''
    ].join(' ')
  , []);

  const bagAnimationClass = useCallback((idx, show) =>
    [
      'transform transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]',
      show ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-75 translate-x-20',
      idx > 0 ? `delay-${idx * 300}` : ''
    ].join(' ')
  , []);

  const bagSources = useMemo(
    () => [
      '/purbanchal/left.png',
      '/purbanchal/middle.png',
      '/purbanchal/right.png'
    ],
    []
  );

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-container relative w-full h-[80vh] sm:h-screen overflow-hidden pt-[80px] sm:pt-[112px]">
        {/* Video BG */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="hero-video w-full h-full object-cover"
          >
            <source src="hero2-bg.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div
            className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.33,1,0.68,1)] ${
              videoEnded
                ? 'bg-gradient-to-r from-slate-800/80 via-slate-700/60 to-transparent'
                : 'bg-black/20'
            }`}
          />
        </div>

        {/* Main CONTENT */}
        <div className="hero-content absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:pl-36 lg:pr-16 text-left sm:text-center md:text-left">
          <h1
            className={`hero-title ${getAnimationClass(showContent, 100)} mx-auto md:mx-0`}
            style={{
              willChange: 'transform, opacity',
              background: 'linear-gradient(90deg,#f97316 0%,#ea580c 50%,#c2410c 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              fontSize: 'clamp(1.75rem, 4vw, 3.5rem)',
              lineHeight: '1.2',
              fontWeight: 'bold',
              marginBottom: '1rem',
              maxWidth: isMobile ? '90%' : '100%',
            }}
          >
            Strong foundations
            <br />
            start here.
          </h1>
          <p
            className={`hero-subtitle ${getAnimationClass(showContent, 200)} mx-auto md:mx-0`}
            style={{
              willChange: 'transform, opacity',
              color: 'rgb(245 245 245)',
              fontSize: 'clamp(0.875rem, 1.5vw, 1.25rem)',
              fontWeight: 500,
              marginBottom: '1.5rem',
              maxWidth: isMobile ? '90%' : '32rem',
            }}
          >
            Trusted for quality, engineered for durability & crafted for every kind of project.
          </p>
          <div className={`${getAnimationClass(showContent, 300)} mx-auto md:mx-0`}>
            <button
              className="
                px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold shadow-md text-sm sm:text-base
                hover:shadow-lg hover:scale-105 transform
              "
              style={{
                willChange: 'transform, opacity',
                background: 'linear-gradient(90deg,#f97316 0%,#ea580c 100%)',
                color: 'white',
                fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
                fontWeight: 600,
              }}
            >
              Let's Discuss
            </button>
          </div>
        </div>

        {/* BAGS + LOGO - Hidden on mobile */}
        {!isMobile && (
          <div className="absolute bottom-4 sm:bottom-8 md:bottom-16 w-full z-30 pointer-events-none">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col items-end">
              {/* Surya Logo */}
              <div
                className={[
                  'surya-logo mb-2 sm:mb-4 md:mb-6',
                  'transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]',
                  showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'
                ].join(' ')}
                style={{ willChange: 'transform, opacity' }}
              >
                <img
                  src="/purbanchal/surya-logo.png"
                  alt="Surya Logo"
                  className="w-12 sm:w-16 md:w-24 lg:w-40 h-70 object-contain drop-shadow-lg"
                />
              </div>

              {/* Cement Bags - With size adjustments */}
              <div className="flex space-x-1 sm:space-x-2 md:space-x-4">
                {bagSources.map((src, i) => {
                  let sizeClass = '';
                  if (i === 0) sizeClass = 'w-16 sm:w-22 md:w-26 lg:w-37 xl:w-48'; // Left bag - 15% larger
                  if (i === 1) sizeClass = 'w-15 sm:w-21 md:w-25 lg:w-35 xl:w-46'; // Middle bag - 10% larger
                  if (i === 2) sizeClass = 'w-14 sm:w-19 md:w-23 lg:w-32 xl:w-42'; // Right bag - original size

                  return (
                    <img
                      key={src}
                      src={src}
                      alt={`Cement Bag ${i + 1}`}
                      className={`bag-animation object-contain ${bagAnimationClass(i, showBags[i])} ${sizeClass}`}
                      style={{ willChange: 'transform, opacity' }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* STATISTICS SECTION */}
      <section ref={statsSectionRef} className="stats-section relative z-10 -mt-0 px-4">
        <div className="mx-auto bg-white rounded-xl shadow-lg py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 text-center max-w-7xl">
          <CountUp target={25} suffix="+">Years Excellence</CountUp>
          <CountUp target={1000} suffix="+">Clients Served</CountUp>
          <CountUp target={500} suffix="+">Projects Completed</CountUp>
          <CountUp target={100} suffix="%">Quality Assured</CountUp>
        </div>
      </section>

      {/* EMBEDDED RESPONSIVE STYLE */}
      <style jsx>{`
        @media (max-width: 640px) {
          .hero-container { 
            overflow-x: hidden;
            height: 80vh !important;
          }
          .hero-content {
            align-items: center !important;
            text-align: center !important;
          }
        }
        @media (max-width: 480px) {
          .hero-container {
            height: 70vh !important;
            padding-top: 64px !important;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;