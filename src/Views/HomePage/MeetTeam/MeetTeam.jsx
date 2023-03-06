import React from "react";
import styles from "./meetteam.module.css";

const MeetTeam = () => {
  return (
    <div>
      <div className={`${styles["team"]}`}>
        <div className={`${styles["team-overlay"]}`}>
          <div className={`${styles["team-title"]}`}>Our Team</div>
          <div className={`${styles["team-description"]}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            tempora perferendis magnam repellat adipisci similique facilis
            repudiandae. Consequuntur, eos debitis, harum facilis esse eaque
            quos praesentium autem, vero hic dolor.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
