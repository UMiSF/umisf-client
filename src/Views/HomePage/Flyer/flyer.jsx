import React, { useEffect } from "react";
import styles from "./flyer.module.css";

const Flyer = () => {
    const date = ["21","May","2023"]
    const venue = "University Gymnasium"
    const before = ["22", "May", "2023"]

    const superscript = (letter) => {
        if(letter == "1"){
            return "st";
        }else if(letter == "2"){
            return "nd";
        }else if(letter == "3"){
            return "rd";
        }else{
            return "th"
        }
    }

  return (
    <div className={`${styles["flyer-container"]}`}>
      
        <img className={`${styles["flyer-image"]}`} src={require("../../../assests/images/flyer-background.png")} />
        <div className={`${styles["overlay"]}`}>
      <div className={`${styles["action"]}`}>
        Action
      </div>
      <div className={`${styles["starts"]}`}>
        Starts
      </div>
      <div className={`${styles["from"]}`}>
        from
      </div>
      <div className={`${styles["day"]}`}>
        {date[0] + " "}<sup style={{fontSize:"1.5vw"}}>{superscript(date[0].charAt(date[0].length - 1))}</sup>
      </div>
      <div className={`${styles["month"]}`}>
        {date[1]+" , "+ date[2]}
      </div>
      <div className={`${styles["venue"]}`}>
        {"at " + venue}
      </div>
      <a className={`${styles["register"]}`} href="#">Register</a>
      <div className={`${styles["before"]}`}>
        {`before ${before[0]}`} <sup style={{fontSize:"1vw"}}>{`${superscript(before[0].charAt(before[0].length - 1))}`}</sup> {`${before[1]} ${before[2]}`}
      </div>
      <div className={`${styles["more-info"]}`}>
        {"For more info, refer "}<a href="#">Tournament Details and Registration Guidlines</a>
      </div>
      </div>
    </div>
  );
};

export default Flyer;
