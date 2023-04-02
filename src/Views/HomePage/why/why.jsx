import React, { useEffect } from "react";
import styles from "./why.module.css";

function Why() {
  return (
    <div className={`${styles["why-container"]}`}>
       <div className={`${styles["why-title"]}`}>
        ABOUT <p style={{display: "inline-block", color:"#0984E3"}}>UMiSF</p>
      </div>
      <div className={`${styles["why-desc"]}`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo voluptatum laudantium molestias nihil quia.
         Vero incidunt mollitia vitae, sunt similique, ut ipsam quo natus dignissimos architecto sed ducimus id quas?
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo voluptatum laudantium molestias nihil quia.
         Vero incidunt mollitia vitae, sunt similique, ut ipsam quo natus dignissimos architecto sed ducimus id quas?
      </div>
      <a href="/about" type="button">View More</a>
    </div>
  );
}

export default Why;