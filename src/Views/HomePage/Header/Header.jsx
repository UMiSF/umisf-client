import React, { useEffect, useState } from "react";
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

const PRE_ORDER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScAfVklcGP5lJJmijSdpwLTcYALW0aR_C-NAcl0-CyFhSk1uQ/viewform";

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
          <div className={styles.preOrderSection}>
            <div className={styles.preOrderPhotos}>
              <img
                className={styles.preOrderPhoto}
                src={require("../../../assests/images/tshirt-preorder-female.png")}
                alt="UMiSF t-shirt female model"
              />
              <img
                className={styles.preOrderPhoto}
                src={require("../../../assests/images/tshirt-preorder-male.png")}
                alt="UMiSF t-shirt male model"
              />
            </div>
            <a
              href={PRE_ORDER_URL}
              className={styles.preOrderButton}
              target="_blank"
              rel="noreferrer"
              aria-label="Pre order UMiSF T-shirt"
            >
              PRE ORDER
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
