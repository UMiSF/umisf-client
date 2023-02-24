import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";
import AdminHeader from "../AdminHeaderPage/AdminHeader";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import styles from "./adminGalleryViewYearPage.module.css";

const AdminGalleryViewYearPage = () => {
  let { year } = useParams();
  const [images, setImages] = useState([

  ]);
  return (
    <div className={`${styles["gallery-container"]}`}>
      <AdminHeader />
      <AdminNavbar page='gallery'/>
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
      <div className={`${styles["image-container"]}`}>
        {images.map((image) => (
          <a href={`gallery/year/${image}`} className={`${styles["folder"]}`}>
            <img src={require("../../assests/images/folder.png")} alt="" />{" "}
            {year}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AdminGalleryViewYearPage;
