import React, { useState } from 'react';
import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
// import uploader from "../../../assests/images/upload-img.jpeg";
import uploader from "../../../../assests/images/upload-img.jpeg";
import Styles from "./ImageUploader.module.css";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';

const getSrcFromFile = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.originFileObj);
    reader.onload = () => resolve(reader.result);
  });
};

export default function ImageUploader(props){
  const [open, setOpen] = useState(false);
  const {fileList, setFileList, setImage, setImageName, index,isfile} = props;

  async function setFileToBase(file){
    setImageName(file.name);
		const reader = new FileReader();
		await reader.readAsDataURL(file);
		reader.onloadend = () => (setImage(reader.result));
	}

  const onChange = ({ fileList: newFileList }) => {
    // console.log(newFileList[0].originFileObj.type);
    if(newFileList.length === 0 ){
      setFileList(newFileList);
      return;
    }

    if(!isfile){
      setFileList(newFileList);
      return;
    }

    if(['image/png','image/jpeg','application/pdf'].includes(newFileList[0].originFileObj.type)){
      setFileList(newFileList);
    }else{
      setOpen(true);
    }
    
  };

  const beforeUpload = async (file) => {
    setFileToBase(file);
    if(isfile){
      return file.type === 'image/png' || file.type === 'image/jpeg' || file.type === ' application/pdf';
    }
    return true;
    
  }

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

    <div>
      <Dialog
        open={open}
        onClose={()=> setOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Look like you select an invalid file type!!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please select jpg, png, or pdf file
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=> setOpen(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>


        <Grid item width='100px' >
          {isfile === true ? (
            <Upload
            // action={`${process.env.REACT_APP_API_URL}/image/add`}
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            beforeUpload={beforeUpload}
            onPreview={onPreview}
            
        >
                {fileList.length  < 1  ? 
                  (
                    <Button >Upload Slip</Button> 
                  )
                  :(null) }
            </Upload>
          ):
          (
            <ImgCrop grid rotate>
                <Upload
                    // action={`${process.env.REACT_APP_API_URL}/image/add`}
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    beforeUpload={beforeUpload}
                    onPreview={onPreview}
                    
                >
                    {fileList.length  < 1 &&  isfile === undefined ? 
                      (<img
                          src={uploader}
                          alt="upload-image"
                          className={`${Styles["uploader"]}`}/>)
                      :(null) }
                </Upload>
            </ImgCrop>
          )}
            
        </Grid>
    </Grid>
  );
};


