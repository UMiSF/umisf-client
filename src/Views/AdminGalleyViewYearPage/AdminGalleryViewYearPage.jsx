import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";
import AdminHeader from "../AdminHeaderPage/AdminHeader";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import styles from "./adminGalleryViewYearPage.module.css";

const AdminGalleryViewYearPage = () => {
  let { year } = useParams();
  return (
    <div className={`${styles["gallery-container"]}`}>
      <AdminHeader />
      <AdminNavbar />
      <div className={`${styles["main-title"]}`}>
        Gallery
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
      
    </div>
  );
};

export default AdminGalleryViewYearPage;
