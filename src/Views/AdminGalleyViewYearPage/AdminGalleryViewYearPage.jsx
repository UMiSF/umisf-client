import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import styles from "./adminGalleryViewYearPage.module.css";
import PhotoItem from "./PhotoItem";

const AdminGalleryViewYearPage = () => {
  let { year } = useParams();

  const [images, setImages] = useState([
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
    <div className={`${styles["gallery-container"]}`}>

      <ProfileHeader user_type={"admin"} />
      <ProfileNavbar page="gallery" />
      
      <div className={`${styles["main-title"]}`}>
        <a href="/admin/gallery">Gallery</a>
        <img
          src={require("../../assests/images/forward_arrow.png")}
          alt=""
        />{" "}
        {year}
      </div>
      <div className={`${styles["tool-bar"]}`}>
        <button>
          <img src={require("../../assests/images/add.png")} alt="" />
          Upload
        </button>
      </div>
      <div className={`${styles["images-container"]}`}>
        <div className={`${styles["gallery"]}`}>
          {images?.map((img, index) => {
            return <PhotoItem key={index} image={img} id={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminGalleryViewYearPage;
