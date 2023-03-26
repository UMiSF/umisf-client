import React, { Component, useState } from "react";
import AdminHeader from "../AdminHeaderPage/AdminHeader";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import styles from "./adminUniversitiesPage.module.css";

const AdminUniversitiesPage = () => {
  const [years, setYears] = useState([
    2000, 2002, 2004, 2008, 2010, 2012, 2014, 2016, 2020, 2022, 2024,
  ]);

  return (
    <div className={`${styles["gallery-container"]}`}>
      <AdminHeader />
      <AdminNavbar page='universities'/>
      <div className={`${styles["main-title"]}`}>
        <a href="/admin/universities">Universities</a>
      </div>
      <div className={`${styles["tool-bar"]}`}>
            Universities that were registered in each year are listed under the folder indicating the year.
      </div>
      <div className={`${styles["folder-container"]}`}>
        {years.map((year,index) => (
          <div>
            <div className={`${styles["folder"]}`}>
              <a href={`universities/year/${year}`}>
                <img src={require("../../assests/images/universities.png")} alt="" />{" "}
                {year}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUniversitiesPage;
