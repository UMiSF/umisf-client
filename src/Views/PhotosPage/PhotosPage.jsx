import {React,useState} from "react";
import { useLocation } from "react-router-dom";
import Styles from "./PhotosPage.module.css";
import PhotoItem from "./PhotoItem";
import PreviewBox from "./PreviewBox";

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
      <div className={`${Styles["title"]}`}>
        <h1 style={{fontFamily:'Cormorant SC' , fontSize:'6vw'}}>{obj.title}</h1>
      </div>

      <div className={`${Styles["gallery"]}`}>

            {photos?.map((img,index)=>{
                return <PhotoItem key = {index} image={img} id={index}/>
            })}
      </div> 


    </div>
  );
};

export default PhotosPage;
