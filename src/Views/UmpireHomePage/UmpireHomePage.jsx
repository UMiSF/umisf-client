import React from "react";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import UmpireNavbar from "../UmpireNavbar/UmpireNavbar";
import styles from "./umpireHomePage.module.css";

const UmpireHomePage = () => {
  return (
    <div className={`${styles["home-container"]}`}>
      <ProfileHeader user_type={"umpire"} />
      <UmpireNavbar page="home" />
      Home
    </div>
  );
};

export default UmpireHomePage;
