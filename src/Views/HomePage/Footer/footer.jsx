import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={`${styles["footer-container"]}`}>
      <div className={`${styles["footer-left"]}`}>
        <img src={require("../../../assests/images/umisf_logo.png")} />
        <div className={`${styles["quick-tabs"]}`}>
          <a href="#">Home</a>|<a href="#">About</a>|<a href="#">Contact Us</a>|
          <a href="#">Gallery</a>|<a href="#">Register</a>
        </div>
        <p className={`${styles["copyright"]}`}>
          Copyright © 2022 University of Moratuwa
        </p>
      </div>
      <hr />
      <div className={`${styles["footer-middle"]}`}>
        <div className={`${styles["center-row"]}`}>
          <i class="bx bx-current-location" style={{ color: "#ffffff" }}></i>
          <p>University of Moratuwa, Bandaranayake Mawatha, Moratuwa 10400</p>
        </div>
        <div className={`${styles["center-row"]}`}>
          <i class="bx bx-phone" style={{ color: "#ffffff" }}></i>
          <p> 2640051, 2650301</p>
        </div>
        <div className={`${styles["center-row"]}`}>
          <i class="bx bx-envelope" style={{ color: "#ffffff" }}></i>
          <p>
            <a className={`${styles["uom-email"]}`} href="https://uom.lk">
              uom.lk
            </a>
          </p>
        </div>
      </div>
      <hr />
      <div className={`${styles["footer-right"]}`}>
        <h6>About</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing <br />
          elit. Reiciendis temporibus, est fugiat nihil
          <br />
          labore laboriosam.
        </p>
        <div className={`${styles["footer-icons"]}`}>
          <a href="#">
            <i class="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i class="bx bxl-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
