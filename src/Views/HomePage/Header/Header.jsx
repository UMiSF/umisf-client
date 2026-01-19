import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderPage from "../../HeaderPage/HeaderPage";
import styles from "./header.module.css";

import image14 from "../../../assests/images/gallery/14.jpg";
import image15 from "../../../assests/images/gallery/15.jpg";
import image16 from "../../../assests/images/gallery/16.jpg";
import image17 from "../../../assests/images/gallery/17.jpg";
import image18 from "../../../assests/images/gallery/18.jpg";


// Import your background images (replace with your actual image paths)
const backgroundImages = [
  image14,
  image15,
  image16,
  image17,
  image18,
];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (backgroundImages.length === 0) return;

    // Automatically cycle through background images every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Button styles
  const buttonStyles = {
    padding: '5px 24px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: isHovered ? '#ff6b00' : '#ff8800',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: isHovered ? '0 6px 12px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
    outline: 'none',
    marginTop: '-7px',
    letterSpacing: '1px',
   
    
  };
  const buttonURl = {
   marginTop: "-7px"
};
  // Container styles for the merchandise section
  const merchandiseContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingBottom: '20px',
    borderRadius: '10px',
    marginTop: '5px',
   
    
    
  };

  // Text styles for the merchandise announcement
  const merchandiseTextStyle = {
    fontSize: '30px',
    color: 'white',
    marginBottom: '10px',
    fontWeight: '500'
  };

  return (
    <div className={styles.homeContainer}>
      {/* Animated Background Slides */}
      <div className={styles.backgroundSlider}>
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className={`${styles.backgroundSlide} ${
              index === currentImageIndex ? styles.active : ''
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className={styles.headerDiv}>
        <HeaderPage />
        <div className={styles.UMiSFContainer}>
          
          <h1>UMiSF</h1>
        </div>
          <div style={merchandiseContainerStyle}>
          <div style={merchandiseTextStyle}>Register for UMiSF 2026</div>
	          <Link to="https://umisf-4778c.web.app/register/player" style={buttonURl}>
	          <button 
	            style={buttonStyles}
	            onMouseEnter={() => setIsHovered(true)}
	            onMouseLeave={() => setIsHovered(false)}
	          
	            aria-label="Register for UMiSF"
	          >
	            
	            REGISTER
	          </button>
	          </Link>
	        </div>
      
      </div>
    </div>
  );
};

export default Header;
