import React from "react";
import styles from "./footer.module.css";

function Footer() {
  //year
  return (
    <div>
      <div className={`${styles["footer-container"]}`}>
        <div className={`${styles["footer-left"]}`}>
          <img src={require("../../../assests/images/umisf_logo.png")} alt="" />
          <div className={`${styles["quick-tabs"]}`}>
            <a href="/">Home</a>|<a href="/about">About</a>|
            <a href="/draws">Draws</a><br />
            <a href="/photos">Gallery</a>|
            <a href="/contact-us">Contact Us</a>
          </div>
        </div>
        <hr />
        <div className={`${styles["footer-middle"]}`}>
          {/* <div className={`${styles["center-row"]}`}>
            <i class="bx bx-current-location" style={{ color: "#ffffff" }}></i>
            <p>University of Moratuwa, Bandaranayake Mawatha, Moratuwa 10400</p>
          </div> */}
          <div className={`${styles["center-row"]}`}>
            <i class="bx bx-phone" style={{ color: "#ffffff" }}></i>
            <p> 070 655 0022 (Hotline)</p>
          </div>
          <div className={`${styles["center-row"]}`}>
          <i class='bx bx-link-external' style={{color:'#ffffff'}} ></i>
            <p>
              <a className={`${styles["uom-email"]}`} href="/" rel="noreferrer">
                UMISF
              </a>
            </p>
          </div>
        </div>
        <hr />
        <div className={`${styles["footer-right"]}`}>
          <h6>About</h6>
          <p>
            UMiSF is the annual badminton tournament organized
            by Mora Badminton. 
          </p>
          <div className={`${styles["footer-icons"]}`}>
            <a href="https://www.instagram.com/_umisf_?igsh=MTJmdW9wdWJocHk4NA==" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.facebook.com/share/1J4dHU361j/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://twitter.com/MoratuwaUni" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles["bottom-row"]}`}>Copyright © 2026 developers@umisf.web</div>
    </div>
  );
}

export default Footer;
