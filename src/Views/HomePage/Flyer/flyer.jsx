import React, { useEffect, useState } from "react";
import styles from "./flyer.module.css";

const TOURNAMENT_GUIDELINES_URL =
  "https://drive.google.com/file/d/1hkU7h9Z3FlYU3ENO8SRNjUt3ufXkp2sG/view?usp=drive_link";

const Flyer = (props) => {
  const [date] = useState(props.starttingDate);
  const [venue] = useState(props.venue);
  const [registrationPeriod, setRegistrationPeriod] = useState(props.registrationsDeadlines);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const superscript = (letter) => {
    if (letter === "1") {
      return "st";
    } else if (letter === "2") {
      return "nd";
    } else if (letter === "3") {
      return "rd";
    } else {
      return "th";
    }
  };

  const formatDate = (date) => {
    if (Array.isArray(date)) return date;
    const str = typeof date === "string" ? date : String(date);
    let dayList = str.slice(0, 10).split("-");
    let month = months[parseInt(dayList[1], 10) - 1];
    return [dayList[0], month, dayList[2]];
  };

  useEffect(() => {
    let period = [];
    for (let i = 0; i < registrationPeriod.length; i++) {
      period.push(formatDate(registrationPeriod[i]));
    }

    setRegistrationPeriod(period);
  // eslint-disable-next-line react-hooks/exhaustive-deps -- format on mount
  }, []);

  return (
    <div className={`${styles["flyer-container"]}`}>
      <img
        className={`${styles["flyer-image"]}`}
        src={require("../../../assests/images/flyer-background.png")}
        alt=""
      />
      <div className={`${styles["overlay"]}`}>
        <div className={`${styles["action"]}`}>Action</div>
        <div className={`${styles["starts"]}`}>Starts</div>
        <div className={`${styles["from"]}`}>from</div>
        <div className={`${styles["day"]}`}>
          {date[2] + " "}
          <sup style={{ fontSize: "1.5vw" }}>{superscript(date[2].charAt(date[2].length - 1))}</sup>
        </div>
        <div className={`${styles["month"]}`}>{date[1] + " , " + date[0]}</div>
        <div className={`${styles["venue"]}`}>
          {venue.map((place, index) => (
            <p key={index}> {index === 0 ? "at " + place : "& " + place}</p>
          ))}
        </div>

        <div className={`${styles['schedule']}`}>
        <a href="https://docs.google.com/document/d/11vPpB7E51RCKBoEbHDGFydU6os1HeChAtb7QmAMPHIE/edit?usp=sharing" target="_blank" rel="noreferrer">
        <img
          className={`${styles['download-image']}`}
          src={require('../../../assests/images/schedule.png')}
          alt=""
        />
        Tournament Schedule</a>
        </div>

        <div className={`${styles['schedule']}`}>
          <a href={TOURNAMENT_GUIDELINES_URL} target="_blank" rel="noopener noreferrer">
            <img
              className={`${styles['download-image']}`}
              src={require("../../../assests/images/pdf.png")}
              alt=""
            />
            Tournament Guidelines
          </a>
        </div>
        {/* <div className={`${styles['before']}`}>
          {`from ${registrationPeriod[0][2]}`} <sup style={{ fontSize: '0.6vw' }}>{`${superscript(registrationPeriod[0][2].charAt(registrationPeriod[0][2].length - 1))}`}</sup>{' '}
          {`${registrationPeriod[0][1]} ${registrationPeriod[0][0]}`}
          <br />
          {`to ${registrationPeriod[1][2]}`} <sup style={{ fontSize: '0.6vw' }}>{`${superscript(registrationPeriod[1][2].charAt(registrationPeriod[1][2].length - 1))}`}</sup>{' '}
          {`${registrationPeriod[1][1]} ${registrationPeriod[1][0]}`}
        </div> */}
        {/* <div className={`${styles['more-info']}`}>
          {'For more info, refer '}
          <a  target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1oHYdgxl3w0N_vAe6ZxuHVbVRBIoe74RT/view?usp=sharing">
            Tournament Details Guidlines
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Flyer;
