import React from "react";
import Styles from "./AlbumCard.module.css";
import { Link } from "react-router-dom";

const AlbumCard = (props) => {
  return (
    <div className={`${Styles["card"]} `}>
      <Link
        to={`../photos/${props.title}`}
        state={{obj: {photos:props.photos, title: props.title} }}
        style={{ textDecoration: "none"}}
        className = {`${Styles["link"]}`}
      >
        {props.title}
      </Link>
    </div>
  );
};

export default AlbumCard;
