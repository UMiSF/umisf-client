import React from "react";
import Styles from "./TableRow.module.css";
import { MDBCol, MDBInput } from "mdb-react-ui-kit";
import ImageUploader from "../imageUploader/ImageUploader";

const TableRow = (props) => {
  // console.log('Props of table row: ',props)
  const {index,setFileList,setImageList,fileList,imageList,fileNameList,setFileNameList} = props;

  function handleSetFileList(newFile){
    const newFileList = fileList.map((file,i) => {
      if(i === index){
        return newFile;
      }else{
        return file;
      }
    });
    setFileList(newFileList);
  };

  function handleSetFileNameList(newName){
    const newFileNameList = fileNameList.map((name,i) => {
      if(i === index){
        return newName;
      }else{
        return name;
      }
    });
    setFileNameList(newFileNameList);
  };

  function handleSetImageList(newImage){
    const newFileNameList = imageList.map((image,i) => {
      if(i === index){
        return newImage;
      }else{
        return image;
      }
    });
    setImageList(newFileNameList);
  };

  return (
    <div>
      <div className="row">
        <MDBCol className="" lg="4" md="12" sm="12">
          <MDBInput
            wrapperClass="mb-2"
            labelClass="text-white"
            name={"name-" + props.index}
            labelStyle={{ color: "white", fontFamily: "Hind", fontSize: "23px" }}
            style={{
              fontFamily: "Hind",
              fontSize: "18px",
              padding: "15px",
              minHeight: "40px",
            }}
            type="text"
            value={props.player.name}
            onChange={(e) => {
              props.handleChange(e);
            }}
            contrast
            className="bg-primary bg-opacity-25"
            required
            label="Full Name"
          />
        </MDBCol>
        <MDBCol className="" lg="4" md="12" sm="12">
          <MDBInput
            wrapperClass="mb-2"
            labelClass="text-white"
            labelStyle={{ color: "white", fontFamily: "Hind", fontSize: "23px" }}
            style={{
              fontFamily: "Hind",
              fontSize: "18px",
              padding: "15px",
              minHeight: "40px",
            }}
            name={"id-" + props.index}
            type="text"
            value={props.player.id}
            onChange={(e) => {
              props.handleChange(e);
            }}
            contrast
            className="bg-primary bg-opacity-25"
            label="ID"
            required
          />
        </MDBCol>
        <MDBCol className="" lg="4" md="12" sm="12">
          {/* <MDBInput
            wrapperClass="mb-2"
            labelClass="text-white"
            labelStyle={{ color: "white", fontFamily: "Hind", fontSize: "23px" }}
            style={{
              fontFamily: "Hind",
              fontSize: "18px",
              padding: "15px",
              minHeight: "40px",
            }}
            name={"photo-" + props.index}
            type="text"
            value={props.player.photo}
            onChange={(e) => {
              props.handleChange(e);
            }}
            contrast
            className="bg-primary bg-opacity-25"
            required
            label="Profile image"
          /> */}
          <ImageUploader setImage={handleSetImageList} fileName={fileNameList[index]} fileList={fileList[index]} setFileList={handleSetFileList} setImageName={handleSetFileNameList} index={index} />
        </MDBCol>
      </div>
      <div class="row d-lg-none mt-6 mb-6 d-xl-none"></div>
    </div>
  );
};

export default TableRow;
