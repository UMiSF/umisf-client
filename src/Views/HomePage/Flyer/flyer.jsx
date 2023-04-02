import React, { useEffect, useState } from "react";
import styles from "./flyer.module.css";

const Flyer = (props) => {
    const [date,setDate] = useState(props.starttingDate)
    const [venue,setVenue] = useState(props.venue)
    const [before,setBefore] = useState(props.registrationsClosingDate)

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
        {date[2] + " "}<sup style={{fontSize:"1.5vw"}}>{superscript(date[2].charAt(date[2].length - 1))}</sup>
      </div>
      <div className={`${styles["month"]}`}>
        {date[1]+" , "+ date[0]}
      </div>
      <div className={`${styles["venue"]}`}>
        {"at " + venue}
      </div>
      <a className={`${styles["register"]}`} href="#">Register</a>
      <div className={`${styles["before"]}`}>
        {`before ${before[2]}`} <sup style={{fontSize:"1vw"}}>{`${superscript(before[2].charAt(before[2].length - 1))}`}</sup> {`${before[1]} ${before[0]}`}
      </div>
      <div className={`${styles["more-info"]}`}>
        {"For more info, refer "}<a href="#">Tournament Details and Registration Guidlines</a>
      </div>
      </div>
    </div>
  );
};

export default Flyer;
