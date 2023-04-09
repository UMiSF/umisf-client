import React, { useEffect, useState } from "react";
import styles from "./sponsers.module.css";

const Sponsers = (props) => {
  const [sponsers,setSponsers] = useState(props.sponsers);

  return (
    <div className={`${styles["sponsers"]}`}>
        <p>EVENT SPONSERED BY</p>
      {sponsers.map((sponser, index) => (
        <span className={`${styles["sponser"]}`}>
          <img src={require(`../../../assests/images/sponsers/${sponser}`)} alt=""></img>
        </span>
      ))}
    </div>
  );
};

export default Sponsers;
