/* global __IMAGE_BASE_PATH__ */
import React, { useEffect, useRef, useState } from 'react';

const StrengthLineup = () => {
  const logoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [activeInfoBox, setActiveInfoBox] = useState(null);

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

  const handleClick = (index) => {
    if (!isMobile) return;
    setActiveInfoBox(activeInfoBox === index ? null : index);
  };

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
    transformOrigin: 'bottom center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  });

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    display: 'block'
  };

  const productInfoStyle = (index) => ({
    position: isMobile ? 'static' : 'absolute',
    bottom: isMobile ? 'auto' : '-10px',
    left: '50%',
    transform: isMobile ? 'none' : 'translateX(-50%)',
    width: isSmallMobile ? '120px' : isMobile ? '150px' : '200px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    textAlign: 'center',
    opacity: isMobile ? (activeInfoBox === index ? 1 : 0) : 0,
    transition: 'all 0.3s ease',
    pointerEvents: 'none',
    zIndex: 3,
    marginTop: isMobile ? '10px' : 0,
    maxHeight: isMobile ? (activeInfoBox === index ? '500px' : '0') : 'auto',
    overflow: 'hidden'
  });

  const productTitleStyle = {
    fontSize: isSmallMobile ? '0.8rem' : '0.9rem',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '5px'
  };

  const productDescStyle = {
    fontSize: isSmallMobile ? '0.65rem' : '0.75rem',
    color: '#333',
    lineHeight: '1.3'
  };

  const handleMouseEnter = (e, index) => {
    if (isMobile) return;
    const scale = parseFloat(e.currentTarget.dataset.scale || '1') * 1.05;
    e.currentTarget.style.transform = `translateY(-10px) scale(${scale})`;
    
    // Show info box
    const infoBox = e.currentTarget.querySelector('.product-info');
    if (infoBox) {
      infoBox.style.opacity = '1';
      infoBox.style.bottom = '0px';
    }
  };

  const handleMouseLeave = (e, index) => {
    if (isMobile) return;
    const scale = e.currentTarget.dataset.scale || '1';
    e.currentTarget.style.transform = `scale(${scale})`;
    
    // Hide info box
    const infoBox = e.currentTarget.querySelector('.product-info');
    if (infoBox) {
      infoBox.style.opacity = '0';
      infoBox.style.bottom = '-10px';
    }
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
      <span className="inline-block hover:-translate-x-1 text-3xl transition-transform duration-300">←</span>{" "}        
          <h1 style={titleStyle}>Our Strength</h1>
        <span className="inline-block hover:translate-x-1 text-3xl transition-transform duration-300">→</span>
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
          onMouseEnter={(e) => handleMouseEnter(e, 0)}
          onMouseLeave={(e) => handleMouseLeave(e, 0)}
          onClick={() => handleClick(0)}
        >
          <img
            src={`${__IMAGE_BASE_PATH__}/left.png`}
            alt="Surya Concretec Cement"
            style={imageStyle}
            loading="lazy"
          />
          <div className="product-info" style={productInfoStyle(0)}>
            <div style={productTitleStyle}>Surya Concretec Cement</div>
            <div style={productDescStyle}>
              Super Dhalai PPC cement engineered for superior slab casting and long-term durability.
              BIS Certified | 50 kg | Best for roofs and foundations
            </div>
          </div>
        </div>
        <div
          style={bagStyle(isMobile ? 160 : 230, isMobile ? 210 : 310, isMobile ? 0 : -30)}
          onMouseEnter={(e) => handleMouseEnter(e, 1)}
          onMouseLeave={(e) => handleMouseLeave(e, 1)}
          onClick={() => handleClick(1)}
        >
          <img
            src={`${__IMAGE_BASE_PATH__}/middle.png`}
            alt="Surya Gold Cement"
            style={imageStyle}
            loading="lazy"
          />
          <div className="product-info" style={productInfoStyle(1)}>
            <div style={productTitleStyle}>Surya Gold PPC Cement</div>
            <div style={productDescStyle}>
              High-performance Portland Pozzolana Cement ideal for all weather construction.
              Smooth finish | Water-resistant | BIS Compliant
            </div>
          </div>
        </div>
        <div
          style={bagStyle(isMobile ? 150 : 220, isMobile ? 190 : 300, isMobile ? 0 : -10, 1.1)}
          data-scale="1.1"
          onMouseEnter={(e) => handleMouseEnter(e, 2)}
          onMouseLeave={(e) => handleMouseLeave(e, 2)}
          onClick={() => handleClick(2)}
        >
          <img
            src={`${__IMAGE_BASE_PATH__}/right.png`}
            alt="Surya OPC Cement"
            style={imageStyle}
            loading="lazy"
          />
          <div className="product-info" style={productInfoStyle(2)}>
            <div style={productTitleStyle}>Surya Gold OPC Cement</div>
            <div style={productDescStyle}>
              Ordinary Portland Cement (Grade 53) for fast-setting and strong structures.
              Ideal for RCC work | High strength | Rapid development
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrengthLineup;