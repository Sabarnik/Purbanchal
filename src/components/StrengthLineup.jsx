/* global __IMAGE_BASE_PATH__ */
import React, { useEffect, useRef, useState } from 'react';

const StrengthLineup = () => {
  const logoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      const smallMobile = window.innerWidth <= 480;
      setIsMobile(mobile);
      setIsSmallMobile(smallMobile);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && logoRef.current) {
          logoRef.current.style.transform = 'scale(1.5)';
          logoRef.current.style.opacity = '0';

          setTimeout(() => {
            if (!logoRef.current) return;
            logoRef.current.style.transition =
              'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.4)';
            logoRef.current.style.transform = 'scale(1)';
            logoRef.current.style.opacity = '1';
          }, 100);

          setTimeout(() => {
            if (!logoRef.current) return;
            logoRef.current.style.transition = 'all 0.3s ease';
          }, 1000);
        }
      },
      { threshold: 0.5 }
    );

    if (logoRef.current) observer.observe(logoRef.current);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (logoRef.current) observer.unobserve(logoRef.current);
    };
  }, []);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    minHeight: isSmallMobile ? 'auto' : '100vh',
    backgroundImage: `url("${__IMAGE_BASE_PATH__}/product_display_bg.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 70%',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: isSmallMobile ? '40px 15px 20px' : '60px 20px 0',
    fontFamily: "'Arial', 'Helvetica', sans-serif",
    boxSizing: 'border-box',
    overflow: 'hidden'
  };

  const headerSectionStyle = {
    textAlign: 'center',
    marginBottom: isSmallMobile ? '5px' : '10px',
    zIndex: 2,
    width: '100%'
  };

  const lineStyle = {
    width: isSmallMobile ? '15px' : 'clamp(20px, 5vw, 40px)',
    height: '2px',
    backgroundColor: '#000',
    margin: '0 5px'
  };

  const titleStyle = {
    fontSize: isSmallMobile ? '1.8rem' : 'clamp(1.5rem, 6.5vw, 2.5rem)',
    fontWeight: 'bold',
    color: '#000',
    margin: '0 5px',
    whiteSpace: 'nowrap'
  };

  const subtitleStyle = {
    fontSize: isSmallMobile ? '0.85rem' : 'clamp(0.9rem, 3.5vw, 1.1rem)',
    color: '#555',
    maxWidth: isSmallMobile ? '95%' : '90%',
    margin: isSmallMobile ? '8px auto 0' : '10px auto 0',
    lineHeight: '1.4'
  };

  const logoStyle = {
    width: isSmallMobile ? '90px' : isMobile ? '120px' : '180px',
    height: 'auto',
    margin: isSmallMobile ? '15px 0' : '20px 0',
    transform: 'scale(1)',
    opacity: '0.85',
    transition: 'all 0.3s ease',
    zIndex: 2,
    filter: 'contrast(1.3) brightness(0.8) sepia(0.1) saturate(0.9)',
    mixBlendMode: 'multiply',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.3)',
    borderRadius: '2px',
    position: 'relative'
  };

  const bagsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: isSmallMobile ? '10px' : isMobile ? '15px' : '25px',
    zIndex: 2,
    width: '100%',
    flexWrap: 'wrap',
    marginBottom: isSmallMobile ? '1vh' : '2vh',
    paddingBottom: isSmallMobile ? '20px' : '40px'
  };

  const bagStyle = (w, _h, mb, scale = 1) => ({
    width: isSmallMobile ? `${w * 0.6}px` : isMobile ? `${w * 0.7}px` : `${w}px`,
    height: 'auto',
    marginBottom: isSmallMobile ? `${mb * 0.5}px` : mb,
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    transform: `scale(${scale})`,
    transformOrigin: 'bottom center'
  });

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    display: 'block'
  };

  const handleMouseEnter = (e) => {
    if (isMobile) return; // Disable hover effects on mobile
    const scale = parseFloat(e.currentTarget.dataset.scale || '1') * 1.05;
    e.currentTarget.style.transform = `translateY(-10px) scale(${scale})`;
  };

  const handleMouseLeave = (e) => {
    if (isMobile) return; // Disable hover effects on mobile
    const scale = e.currentTarget.dataset.scale || '1';
    e.currentTarget.style.transform = `scale(${scale})`;
  };

  return (
    <div style={containerStyle}>
      <div style={headerSectionStyle}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >
          <span style={lineStyle} />
          <h1 style={titleStyle}>The Strength Lineup</h1>
          <span style={lineStyle} />
        </div>
        <p style={subtitleStyle}>Versatile strength for every build you envision</p>
      </div>

      <img
        ref={logoRef}
        src={`${__IMAGE_BASE_PATH__}/surya-logo.png`}
        alt="Surya Cement Logo"
        style={logoStyle}
        loading="eager"
      />

      <div style={bagsContainerStyle}>
        <div
          style={bagStyle(isMobile ? 130 : 190, isMobile ? 170 : 260, 0)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={`${__IMAGE_BASE_PATH__}/left.png`}
            alt="Surya Concretec Cement"
            style={imageStyle}
            loading="lazy"
          />
        </div>
        <div
          style={bagStyle(isMobile ? 160 : 230, isMobile ? 210 : 310, isMobile ? 0 : -30)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={`${__IMAGE_BASE_PATH__}/middle.png`}
            alt="Surya Gold Cement"
            style={imageStyle}
            loading="lazy"
          />
        </div>
        <div
          style={bagStyle(isMobile ? 150 : 220, isMobile ? 190 : 300, isMobile ? 0 : -10, 1.1)}
          data-scale="1.1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={`${__IMAGE_BASE_PATH__}/right.png`}
            alt="Surya OPC Cement"
            style={imageStyle}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default StrengthLineup;