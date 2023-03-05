import React, { useState } from 'react';
import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
// import uploader from "../../../assests/images/upload-img.jpeg";
import uploader from "../../../../assests/images/upload-img.jpeg";
import Styles from "./ImageUploader.module.css";
import { Grid } from '@mui/material';

const getSrcFromFile = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.originFileObj);
    reader.onload = () => resolve(reader.result);
  });
};

export default function ImageUploader(props){
  const {fileList, setFileList} = props;

  const onChange = ({ fileList: newFileList }) => {
    console.log(fileList[0]);
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    const src = file.url || (await getSrcFromFile(file));
    const imgWindow = window.open(src);

    if (imgWindow) {
      const image = new Image();
      image.src = src;
      imgWindow.document.write(image.outerHTML);
    } else {
      window.location.href = src;
    }
  };

  return (
    <Grid container justifyContent='center' >
        <Grid item width='100px' >
            <ImgCrop grid rotate>
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                >
                    {fileList.length < 1 ? (<img
                            src={uploader}
                            alt="upload-image"
                            className={`${Styles["uploader"]}`}
                            />):(null) }
                </Upload>
            </ImgCrop>
        </Grid>
    </Grid>
  );
};


