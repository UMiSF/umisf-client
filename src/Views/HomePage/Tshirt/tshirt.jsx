import React, { useEffect } from "react";
import styles from "./tshirt.module.css";

const Tshirt = (props) => {
  return (
    <div className={`${styles["tshirt-container"]}`}>
      <div className={`${styles["tshirt-front"]}`}>
        <img src={require(`../../../assests/images/${props.tShirtFront}`)} />
      </div>
      <div className={`${styles["tshirt-title"]}`}>
        <span>Make I</span>
        <span style={{ color: "#0984e3" }}>t Yours</span>
      </div>
      <div className={`${styles["tshirt-back"]}`}>
        <img src={require(`../../../assests/images/${props.tShirtBack}`)} />
      </div>
    </div>
  );
};

export default Tshirt;
