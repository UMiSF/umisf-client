import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import Styles from "./PhotosPage.module.css";
import HeaderPage from "../HeaderPage/HeaderPage";
import PhotoItem from "./PhotoItem";
import PreviewBox from "./PreviewBox";
import Footer from "../HomePage/Footer/footer";

const PhotosPage = (props) => {
  let location = useLocation();
  let { obj } = location.state;
  const [photos, setPhotos] = useState([
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
  ]);
  return (
    <div className={`${Styles["body"]}`}>
      <HeaderPage />
      <div className={`${Styles["title"]}`}>
        <h1 style={{ fontFamily: "Hind", color: "#0984E3", fontSize: "4vw" }}>
          UMiSF{" - "}
          {obj.title}
        </h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias, d at blanditiis
          labore magni dolore s praesentium impedit assumenda? Non, deserunt dolore. amet
          consectetur adipisicing elit. Eligendi alias, d at blanditiis labore
        </p>
      </div>

      <div className={`${Styles["gallery"]}`}>
        {photos?.map((img, index) => {
          return <PhotoItem key={index} image={img} id={index} />;
        })}
      </div>

      <Footer />
    </div>
  );
};

export default PhotosPage;
