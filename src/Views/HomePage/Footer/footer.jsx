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
            <p> 0112 640 051</p>
          </div>
          <div className={`${styles["center-row"]}`}>
          <i class='bx bx-link-external' style={{color:'#ffffff'}} ></i>
            <p>
              <a className={`${styles["uom-email"]}`} href="https://umisf-4778c.web.app/" target="_blank" rel="noreferrer">
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
            <a href="https://twitter.com/MoratuwaUni" target="_blank" rel="noreferrer">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://www.facebook.com/UMiSFMora?mibextid=LQQJ4d" target="_blank" rel="noreferrer">
              <i className="bx bxl-facebook"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles["bottom-row"]}`}>Copyright © 2026 developers@umisf.web</div>
    </div>
  );
}

export default Footer;
