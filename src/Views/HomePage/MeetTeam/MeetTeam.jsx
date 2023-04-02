import React, { useEffect } from "react";
import styles from "./meetteam.module.css";

const MeetTeam = () => {
  return (
    <div className={`${styles["team-container"]}`}>
      <div className={`${styles["team"]}`}>
        <div className={`${styles["team-title"]}`}>OUR <p style={{display:"inline-block", color:"#0984E3", borderTop:"2px solid #0984E3"}}>TEAM</p></div>
        <div className={`${styles["team-description"]}`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempora perferendis
          magnam repellat adipisci similique facilis repudiandae. Consequuntur, eos debitis, harum
          facilis esse eaque quos praesentium autem, vero hic dolor.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempora perferendis
          magnam repellat adipisci similique facilis repudiandae.
        </div>
      </div>
      <div className={`${styles["team-photo"]}`}>
        <img src={require("../../../assests/images/team.jpeg")} />
      </div>
    </div>
  );
};

export default MeetTeam;
