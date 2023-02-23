import React, { Component, useState } from "react";
import AdminHeader from "../AdminHeaderPage/AdminHeader";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import styles from "./adminGalleryPage.module.css";

const AdminGalleryPage = () => {
  const [years, setYears] = useState([2012, 2014, 2016, 2020, 2022, 2024]);
  return (
    <div className={`${styles["gallery-container"]}`}>
      <AdminHeader />
      <AdminNavbar />
      <div className={`${styles["main-title"]}`}>Gallery</div>
      <div className={`${styles["tool-bar"]}`}>
        <button>
        <img src={require("../../assests/images/add.png")} alt="" /> Create
        folder
        </button>
      </div>
      <div className={`${styles["folder-container"]}`}>
        {years.map((year) => (
          <a  href={`gallery/year/${year}`} className={`${styles["folder"]}`}>
            <img src={require("../../assests/images/folder.png")} alt="" />{" "}
            {year}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AdminGalleryPage;
