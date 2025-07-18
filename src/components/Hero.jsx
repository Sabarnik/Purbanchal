import React, { useRef, useEffect, useState } from 'react';

const HeroSection = () => {
  const videoRef = useRef(null);
  const statsSectionRef = useRef(null);

  const [videoEnded, setVideoEnded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [showBags, setShowBags] = useState({
    bag1: false,
    bag2: false,
    bag3: false,
  });
  const [showLogo, setShowLogo] = useState(false);

  const ANIMATION_DELAYS = {
    content: 100,
    bags: [500, 1000, 1500],
    logo: 2200,
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.loop = false;

    video.play().catch((error) => {
      console.log('Autoplay prevented:', error);
      handleAutoplayFallback();
    });

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  useEffect(() => {
    if (!statsSectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.5 }
    );

    observer.observe(statsSectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleAutoplayFallback = () => {
    setVideoEnded(true);
    setShowContent(true);
    setShowBags({ bag1: true, bag2: true, bag3: true });
    setTimeout(() => setShowLogo(true), ANIMATION_DELAYS.logo);
  };

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setTimeout(() => setShowContent(true), ANIMATION_DELAYS.content);
    ANIMATION_DELAYS.bags.forEach((delay, index) => {
      setTimeout(() => {
        setShowBags((prev) => ({ ...prev, [`bag${index + 1}`]: true }));
      }, delay);
    });
    setTimeout(() => setShowLogo(true), ANIMATION_DELAYS.logo);
  };

  const CountUp = ({ target, suffix, children }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
      if (!elementRef.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(elementRef.current);
      return () => observer.disconnect();
    }, [hasAnimated]);

    useEffect(() => {
      if (!hasAnimated) return;

      const duration = 2000;
      const startTime = performance.now();

      const animateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(progress * target));

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    }, [hasAnimated, target]);

    return (
      <div
        ref={elementRef}
        className="transition-all duration-500 ease-out transform hover:scale-105"
      >
        <h3 className="text-orange-600 text-3xl md:text-4xl font-extrabold">
          {count}
          {suffix}
        </h3>
        <p className="text-sm md:text-base text-gray-700 mt-1">{children}</p>
      </div>
    );
  };

  const getAnimationClass = (shouldShow, delay = 0) => `
    transition-all duration-1000 ease-[cubic-bezier(0.33,1,0.68,1)] 
    ${shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
    ${delay ? `delay-${delay}` : ''}
  `;

  const getBagAnimationClass = (bagNumber, shouldShow) => `
    transform transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]
    ${shouldShow ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-75 translate-x-20'}
    ${bagNumber > 1 ? `delay-${(bagNumber - 1) * 300}` : ''}
  `;

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden pt-[112px]">
        {/* Video Background */}
        <div className="absolute inset-0">
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
          <div
            className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.33,1,0.68,1)] ${
              videoEnded
                ? 'bg-gradient-to-r from-slate-800/80 via-slate-700/60 to-transparent'
                : 'bg-black/20'
            }`}
          />
        </div>

        {/* Content Section */}
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-8 pr-8 md:pl-36 md:pr-16 text-left">
          <h1
            className={getAnimationClass(showContent, 100)}
            style={{
              willChange: 'transform, opacity',
              background: 'linear-gradient(90deg, #f97316 0%, #ea580c 50%, #c2410c 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              fontSize: '2.5rem',
              lineHeight: '1.2',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            Strong foundations
            <br />
            start here.
          </h1>

          <p
            className={getAnimationClass(showContent, 200)}
            style={{
              willChange: 'transform, opacity',
              color: 'rgb(245 245 245)',
              fontSize: '1rem',
              fontWeight: '500',
              marginBottom: '1.5rem',
              maxWidth: '32rem',
            }}
          >
            Trusted for quality, engineered for durability & crafted for every kind of project.
          </p>

          <button
            className={`
              px-6 py-3 rounded-md font-semibold shadow-md
              ${getAnimationClass(showContent, 300)}
              hover:shadow-lg hover:scale-105 transform
            `}
            style={{
              willChange: 'transform, opacity',
              background: 'linear-gradient(90deg, #f97316 0%, #ea580c 100%)',
              color: 'white',
            }}
          >
            Let's Discuss
          </button>
        </div>

        {/* Cement Bags + Logo - Aligned with max-w-7xl */}
        <div className="absolute bottom-8 md:bottom-16 w-full z-30 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-end items-end space-x-4 relative">
            {/* Logo above cement bags */}
            <div
              className={`
                absolute -top-90 right-0 z-30
                transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]
                ${showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'}
              `}
              style={{ willChange: 'transform, opacity' }}
            >
              <img
                src="/purbanchal/surya-logo.png"
                alt="Company Logo"
                className="w-32 md:w-40 h-90 object-contain drop-shadow-lg"
              />
            </div>

            {/* Cement Bags */}
            {[1, 2, 3].map((bagNumber) => (
              <img
                key={bagNumber}
                src={`/purbanchal/${bagNumber === 1 ? 'left' : bagNumber === 2 ? 'middle' : 'right'}.png`}
                alt={`Cement Bag ${bagNumber}`}
                className={`
                  w-28 md:w-36 lg:w-44 object-contain
                  ${getBagAnimationClass(bagNumber, showBags[`bag${bagNumber}`])}
                `}
                style={{ willChange: 'transform, opacity' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsSectionRef} className="relative z-10 -mt-0">
        <div className="mx-auto bg-white rounded-xl shadow-lg py-10 px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-7xl">
          <CountUp target={25} suffix="+">
            Years Excellence
          </CountUp>
          <CountUp target={1000} suffix="+">
            Clients Served
          </CountUp>
          <CountUp target={500} suffix="+">
            Projects Completed
          </CountUp>
          <CountUp target={100} suffix="%">
            Quality Assured
          </CountUp>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
