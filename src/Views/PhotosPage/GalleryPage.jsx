import React from "react";
import Styles from "./GalleryPage.module.css";
import AlbumCard from "./AlbumCard";
import { useState } from "react";
import image from "./Images/TempImg/1.jpg";
import HeaderPage from "../HeaderPage/HeaderPage";
import Footer from "../HomePage/Footer/footer";

const GalleryPage = () => {
  const [titles, setTitles] = useState([
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ]);

  const [photos, setPhotos] = useState([
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
  ]);

  return (
    <div className={`${Styles["body"]}`}>
      <div className={`${Styles["cover-img"]}`}>
        <HeaderPage />
        <div className={`${Styles["cover-title"]}`}>
          <h1 id="h1" className={`${Styles["typing-demo"]}`}>
            {" "}
            MEMORIES ....
          </h1>
          <div className={`${Styles["bottom-para"]}`}>
            <p>Let's dive into our good old days!</p>
          </div>
        </div>
      </div>
      <div className={`${Styles["gallery"]} `}>
        <div className={`${Styles["gallery-content"]} `}>
          {titles?.map((title, index) => {
            return <AlbumCard key={index} title={title} photos={photos} />;
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GalleryPage;
