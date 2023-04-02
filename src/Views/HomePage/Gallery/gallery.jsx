import React, { useEffect } from "react";
import styles from "./gallery.module.css";

function Gallery() {
  const gallery = [
    "2017.jpeg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
  ];
  return (
    <div className={`${styles["gallery-container"]}`}>
      <div className={`${styles["gallery-title"]}`}>
        OUR <p style={{ display: "inline-block", color: "#0984E3" }}>GALLERY</p>
      </div>
      <div className={`${styles["gallery-box"]}`}>
        <div className={`${styles["gallery-box-row"]}`}>
          {gallery.slice(0, 3).map((image, index) => (
            <figure>
              <img src={require(`../../../assests/images/gallery/${image}`)} key={index} />
            </figure>
          ))}
        </div>

        <div className={`${styles["gallery-box-row"]}`}>
          {gallery.slice(3, 6).map((image, index) => (
            <figure>
              <img src={require(`../../../assests/images/gallery/${image}`)} />
            </figure>
          ))}
        </div>

        <div className={`${styles["gallery-box-row"]}`}>
          {gallery.slice(6, 9).map((image, index) => (
            <figure>
              <img src={require(`../../../assests/images/gallery/${image}`)} />
            </figure>
          ))}
        </div>
      </div>
      <div className={`${styles["gallery-view-more"]}`}>
        <a href="/about" type="button">
          View More
        </a>
      </div>
    </div>
  );
}

export default Gallery;
