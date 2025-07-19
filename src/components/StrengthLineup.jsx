import React from 'react';

const StrengthLineup = () => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundImage: 'url("/purbanchal/product_display_bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '80px',
    fontFamily: "'Arial', 'Helvetica', sans-serif"
  };

  const headerSectionStyle = {
    textAlign: 'center',
    marginBottom: '40px',
    zIndex: 2
  };

  const lineStyle = {
    width: '60px',
    height: '2px',
    backgroundColor: '#000',
    margin: '0 20px'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '10px'
  };

  const subtitleStyle = {
    fontSize: '1.1rem',
    color: '#555'
  };

  const bagsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: '40px',
    zIndex: 2
  };

  const bagStyle = (width, height, marginBottom) => ({
    width,
    height,
    marginBottom,
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  });

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'block',
    filter: 'none'
  };

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'none';
  };

  return (
    <div style={containerStyle}>
      <div style={headerSectionStyle}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={lineStyle}></span>
          <h1 style={titleStyle}>The Strength Lineup</h1>
          <span style={lineStyle}></span>
        </div>
        <p style={subtitleStyle}>Versatile strength for every build you envision</p>
      </div>

      <div style={bagsContainerStyle}>
        {/* Left Bag */}
        <div
          style={bagStyle(isMobile ? '120px' : '180px', isMobile ? '160px' : '240px', 0)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="/purbanchal/left.png"
            alt="Surya Concretec Cement"
            style={imageStyle}
            loading="lazy"
          />
        </div>

        {/* Middle Bag */}
        <div
          style={bagStyle(isMobile ? '140px' : '200px', isMobile ? '190px' : '270px', -30)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="/purbanchal/middle.png"
            alt="Surya Gold Cement"
            style={imageStyle}
            loading="lazy"
          />
        </div>

        {/* Right Bag (Slightly Bigger) */}
        <div
          style={bagStyle(
            isMobile ? '130px' : '190px',   // Slightly wider than left
            isMobile ? '170px' : '255px',   // Slightly taller than left
            -10                            // Slight margin for balance
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="/purbanchal/right.png"
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
