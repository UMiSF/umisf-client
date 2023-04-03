import React, { useEffect, useState } from "react";
import Footer from "../HomePage/Footer/footer";
import Gallery from "../HomePage/Gallery/gallery";
import HeaderPage from "../HeaderPage/HeaderPage";
import styles from "./aboutPage.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={`${styles["headerDiv1"]}`}>
        <HeaderPage />
        <div className={`${styles["about-container"]}`}>
          <h1>About Us</h1>
        </div>
      </div>
      {/* mission vission section */}
      <section class={`${styles["objectives"]}`}>
        <p>
          University of Moratuwa International Shuttlers' Fest (UMiSF) is a badminton tournament
          organized by the badminton team in collaboration with the Division of Physical Education
          of University of Moratuwa. The tournament consists of an international inter-university
          event and an all island age group event and will be held for the 7th consecutive year in
          2017, bigger than ever!!
        </p>
        <div class={`${styles["row"]}`}>
          <div class={`${styles["objectives-col"]}`}>
            <h3>VISION</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
          <div class={`${styles["objectives-col"]}`}>
            <h3>MISSION</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
          <div class={`${styles["objectives-col"]}`}>
            <h3>TARGETS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles["past-section"]}`}>
        <h1>Our <p style={{display:"inline-block", fontSize:"60px", color:"#0984E3",fontFamily:"Hind"}}>History</p></h1>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
          industries for previewing layouts and visual mockups. LOREM IPSUM GENERATOR
        </p>
        <div className={`${styles["row"]}`}>
          <div className={`${styles["past-section-col"]}`}>
            <img
              className={`${styles["past-section-img"]}`}
              src={require("../../assests/images/2017.jpeg")}
              alt=""
            ></img>
            <h3>2017</h3>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
              industries for previewing layouts and visual mockups. LOREM IPSUM GENERATOR
            </p>
          </div>
          <div className={`${styles["past-section-col"]}`}>
            <img
              className={`${styles["past-section-img"]}`}
              src={require("../../assests/images/2018.jpeg")}
              alt=""
            ></img>
            <h3>2018</h3>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
              industries for previewing layouts and visual mockups. LOREM IPSUM GENERATOR
            </p>
          </div>
          <div className={`${styles["past-section-col"]}`}>
            <img
              className={`${styles["past-section-img"]}`}
              src={require("../../assests/images/2019.jpeg")}
              alt=""
            ></img>
            <h3>2019</h3>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
              industries for previewing layouts and visual mockups. LOREM IPSUM GENERATOR
            </p>
          </div>
          <div className={`${styles["past-section-col"]}`}>
            <img
              className={`${styles["past-section-img"]}`}
              src={require("../../assests/images/2020.jpeg")}
              alt=""
            ></img>
            <h3>2020</h3>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
              industries for previewing layouts and visual mockups. LOREM IPSUM GENERATOR
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles["testimonials"]}`}>
        <h1>Massages from Organizing commitee</h1>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
          industries for previewing layouts and visual mockups. LOREM IPSUM GENERATOR
        </p>
        <div className={`${styles["row"]}`}>
          <div className={`${styles["testimanial-col"]}`}>
            <img src={require("../../assests/images/Captain_male.jpg")} alt=""></img>
            <div>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                industries for previewing layouts and visual mockups. LOREM IPSUM GENERATOR
              </p>
              <h3>Harshani Bandara</h3>
              <h6>Captain(2022-2023)</h6>
            </div>
          </div>
          <div className={`${styles["testimanial-col"]}`}>
            <img src={require("../../assests/images/Captain_female.JPG")} alt=""></img>
            <div>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                industries for previewing layouts and visual mockups. LOREM IPSUM GENERATOR
              </p>
              <h3>Nethmi Jayakodi</h3>
              <h6>Captain(2022-2023)</h6>
            </div>
          </div>
        </div>
        <div className={`${styles["row"]}`}>
          <div className={`${styles["testimanial-col"]}`}>
            <img src={require("../../assests/images/ViceCaptain_male.jpg")} alt=""></img>
            <div>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                industries for previewing layouts and visual mockups. LOREM IPSUM GENERATOR
              </p>
              <h3>Harshani Bandara</h3>
              <h6>Captain(2022-2023)</h6>
            </div>
          </div>
          <div className={`${styles["testimanial-col"]}`}>
            <img src={require("../../assests/images/ViceCaptain_female.jpg")} alt=""></img>
            <div>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                industries for previewing layouts and visual mockups. LOREM IPSUM GENERATOR
              </p>
              <h3>Nethmi Jayakodi</h3>
              <h6>Captain(2022-2023)</h6>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default AboutPage;
