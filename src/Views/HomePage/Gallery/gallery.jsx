import React from "react";
import styles from "./gallery.module.css";
import { Link } from "react-router-dom";

function Gallery(props) {
  const gallery = props.gallery ?? [];
  return (
      <div className={`${styles["gallery-container"]}`}>
        <div className={`${styles["gallery-title"]}`}>
        OUR <p style={{ display: "inline-block", color: "#025373" }}>GALLERY</p>
      </div>
      <div className={`${styles["gallery-box"]}`}>
        <div className={`${styles["gallery-box-row"]}`}>
          {gallery.slice(0, 3).map((image, index) => (
            <figure key={`${image}-${index}`} className='bg-image hover-zoom'>
              <img
                src={require(`../../../assests/images/gallery/${image}`)}
                alt="UMiSF gallery"
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        <div className={`${styles["gallery-box-row"]}`}>
          {gallery.slice(3, 6).map((image, index) => (
            <figure key={`${image}-${index + 3}`} className='bg-image hover-zoom'>
              <img
                src={require(`../../../assests/images/gallery/${image}`)}
                alt="UMiSF gallery"
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        <div className={`${styles["gallery-box-row"]}`}>
          {gallery.slice(6, 9).map((image, index) => (
            <figure key={`${image}-${index + 6}`} className='bg-image hover-zoom'>
              <img
                src={require(`../../../assests/images/gallery/${image}`)}
                alt="UMiSF gallery"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
      <div className={`${styles["gallery-view-more"]}`}>
        <Link to="/photos" type="button">
          View More
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
