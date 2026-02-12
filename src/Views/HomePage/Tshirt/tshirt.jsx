import React from "react";
import styles from "./tshirt.module.css";

const PRE_ORDER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScAfVklcGP5lJJmijSdpwLTcYALW0aR_C-NAcl0-CyFhSk1uQ/viewform";

const Tshirt = () => {
  return (
    <section className={`${styles["tshirt-container"]}`}>
      <div className={`${styles["tshirt-photo"]} ${styles["left"]}`}>
        <img
          src={require("../../../assests/images/tshirt-preorder-female.png")}
          alt="UMiSF 2026 t-shirt pre-order female model"
        />
      </div>

      <div className={`${styles["tshirt-content"]}`}>
        <h2 className={`${styles["title"]}`}>T-Shirt Pre Order</h2>
        <p className={`${styles["subtitle"]}`}>
          Grab the official UMiSF tee and represent the tournament in style.
        </p>
        <a
          href={PRE_ORDER_URL}
          className={`${styles["order-now"]}`}
          target="_blank"
          rel="noreferrer"
        >
          Pre Order Now
        </a>
      </div>

      <div className={`${styles["tshirt-photo"]} ${styles["right"]}`}>
        <img
          src={require("../../../assests/images/tshirt-preorder-male.png")}
          alt="UMiSF 2026 t-shirt pre-order male model"
        />
      </div>
    </section>
  );
};

export default Tshirt;
