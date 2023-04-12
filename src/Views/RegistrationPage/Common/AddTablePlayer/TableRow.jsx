import React, { useState } from "react";
import Styles from "./TableRow.module.css";
import { MDBCol, MDBInput } from "mdb-react-ui-kit";
import Dropdown from "../../../../common/Dropdown/Dropdown";
import ImageUploader from "../imageUploader/ImageUploader";

const TableRow = (props) => {
  // console.log('Props of table row: ',props)
  const { index, setFileList, setImageList, fileList, imageList, fileNameList, setFileNameList } =
    props;
  const genderOptions = ["Male", "Female"];
  const [gender, setGender] = useState("");

  const columnSize = props.genderNeeded ? 3 : 4;

  function handleSetFileList(newFile) {
    const newFileList = fileList.map((file, i) => {
      if (i === index) {
        return newFile;
      } else {
        return file;
      }
    });
    setFileList(newFileList);
  }

  function handleSetFileNameList(newName) {
    const newFileNameList = fileNameList.map((name, i) => {
      if (i === index) {
        return newName;
      } else {
        return name;
      }
    });
    setFileNameList(newFileNameList);
  }

  function handleSetImageList(newImage) {
    const newFileNameList = imageList.map((image, i) => {
      if (i === index) {
        return newImage;
      } else {
        return image;
      }
    });
    setImageList(newFileNameList);
  }

  return (
    <div>
      <div className="row">
        <MDBCol lg={columnSize + 1} md="12" sm="12">
          <MDBInput
            wrapperClass="mb-2"
            labelClass="text-white"
            name={"name-" + props.index}
            labelStyle={{ color: "white", fontFamily: "Hind" }}
            className={`${Styles["mdbinput"]} bg-primary bg-opacity-25`}
            type="text"
            value={props.player.name}
            onChange={(e) => {
              props.handleChange(e.target.value, e.target.name);
            }}
            contrast
            required
            label="Full Name"
          />
        </MDBCol>
        <MDBCol lg={columnSize} md="12" sm="12">
          <MDBInput
            wrapperClass="mb-2"
            labelClass="text-white"
            labelStyle={{ color: "white", fontFamily: "Hind" }}
            className={`${Styles["mdbinput"]} bg-primary bg-opacity-25`}
            name={"id-" + props.index}
            type="text"
            value={props.player.id}
            onChange={(e) => {
              props.handleChange(e.target.value, e.target.name);
            }}
            contrast
            label="ID"
            required
          />
        </MDBCol>
        {props.genderNeeded && (
          <MDBCol className="" lg={columnSize} md="12" sm="12">
            <Dropdown
              options={genderOptions}
              handleClick={(option, id) => {
                setGender(option);
                props.handleChange(option, id);
              }}
              value={gender}
              name={"gender-" + props.index}
              lable={"Gender"}
            />
          </MDBCol>
        )}

        <MDBCol className="" lg={columnSize - 1} md="12" sm="12">
          <ImageUploader
            setImage={handleSetImageList}
            fileName={fileNameList[index]}
            fileList={fileList[index]}
            setFileList={handleSetFileList}
            setImageName={handleSetFileNameList}
            index={index}
          />
        </MDBCol>
      </div>
      <div class="row d-lg-none mt-6 mb-6 d-xl-none"></div>
    </div>
  );
};

export default TableRow;
