import { React, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Styles from "./PhotosPage.module.css";
import HeaderPage from "../HeaderPage/HeaderPage";
import PhotoItem from "./PhotoItem";
import Footer from "../HomePage/Footer/footer";

const PhotosPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const obj = location.state?.obj;

  useEffect(() => {
    if (!obj) {
      navigate("/photos", { replace: true });
    }
  }, [obj, navigate]);

  if (!obj) {
    return null;
  }

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
          Step back in time to experience the nostalgia and excitment of previous years' of UMISF and relive the highlights through this collection of retrospective photos.
        </p>
      </div>

      <div className={`${Styles["gallery"]}`}>
        {(obj.photos || []).map((img, index) => (
          <PhotoItem key={index} image={img} id={index} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default PhotosPage;
