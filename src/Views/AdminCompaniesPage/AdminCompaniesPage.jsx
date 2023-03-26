import React, { Component, useState } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import styles from "./adminCompaniesPage.module.css";

const AdminCompaniesPage = () => {
  const [years, setYears] = useState([
    2000, 2002, 2004, 2008, 2010, 2012, 2014, 2016, 2020, 2022, 2024,
  ]);

  return (
    <div className={`${styles["gallery-container"]}`}>
      <ProfileHeader user_type={"admin"} />
      <AdminNavbar page='companies'/>
      <div className={`${styles["main-title"]}`}>
        <a href="/admin/universities">Companies</a>
      </div>
      <div className={`${styles["tool-bar"]}`}>
            Companies that were registered in each year are listed under the folder indicating the year.
      </div>
      <div className={`${styles["folder-container"]}`}>
        {years.map((year,index) => (
          <div>
            <div className={`${styles["folder"]}`}>
              <a href={`companies/year/${year}`}>
                <img src={require("../../assests/images/companies.png")} alt="" />{" "}
                {year}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCompaniesPage;
