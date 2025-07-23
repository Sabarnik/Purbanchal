/* global __IMAGE_BASE_PATH__ */
import React, { useEffect, useRef, useState } from 'react';

const StrengthLineup = () => {
  const logoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
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
    minHeight: '100vh',
    backgroundImage: `url("${__IMAGE_BASE_PATH__}/product_display_bg.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 70%',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '60px 20px 0',
    fontFamily: "'Arial', 'Helvetica', sans-serif",
    boxSizing: 'border-box',
    overflow: 'hidden'
  };

  const headerSectionStyle = {
    textAlign: 'center',
    marginBottom: '10px',
    zIndex: 2,
    width: '100%'
  };

  const lineStyle = {
    width: 'clamp(20px, 5vw, 40px)',
    height: '2px',
    backgroundColor: '#000',
    margin: '0 8px'
  };

  const titleStyle = {
    fontSize: 'clamp(1.5rem, 6.5vw, 2.5rem)',
    fontWeight: 'bold',
    color: '#000',
    margin: '0 5px',
    whiteSpace: 'nowrap'
  };

  const subtitleStyle = {
    fontSize: 'clamp(0.9rem, 3.5vw, 1.1rem)',
    color: '#555',
    maxWidth: '90%',
    margin: '10px auto 0'
  };

  const logoStyle = {
    width: isMobile ? '120px' : '180px',
    height: 'auto',
    margin: '20px 0',
    transform: 'scale(1)',
    opacity: '0.85',
    transition: 'all 0.3s ease',
    zIndex: 2,
    filter: 'contrast(1.3) brightness(0.8) sepia(0.1) saturate(0.9)',
    mixBlendMode: 'multiply',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.3)',
    borderRadius: '2px',
    position: 'relative',
    WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
    maskImage: 'linear-gradient(to right, black 60%, transparent 100%)'
  };

  const bagsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: isMobile ? '15px' : '25px',
    zIndex: 2,
    width: '100%',
    flexWrap: 'wrap',
    marginBottom: '2vh',
    paddingBottom: '40px'
  };

  const bagStyle = (w, _h, mb, scale = 1) => ({
    width: `clamp(${w * 0.7}px, ${w}px, ${w * 1.3}px)`,
    height: 'auto',
    marginBottom: mb,
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
    const scale = parseFloat(e.currentTarget.dataset.scale || '1') * 1.05;
    e.currentTarget.style.transform = `translateY(-10px) scale(${scale})`;
  };

  const handleMouseLeave = (e) => {
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
