import React from "react";
import Styles from "./TableRow.module.css";
import { MDBCol, MDBInput } from "mdb-react-ui-kit";

//TODO: at least 5 players should be added
//TODO: a row cannot be partially filled
const TableRow = (props) => {
    console.log('Props of table row: ',props)
  return (
    <div className="d-flex flex-row ">
             <MDBCol>
                <MDBInput
                  wrapperClass=""
                  labelClass="text-white"
                  name={"name-" + props.index}
                  type="text"
                  value={props.player.name}
                  onChange={(e)=>{props.handleChange(e)}}
                  contrast
                  className="bg-primary bg-opacity-25"
                  required
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  wrapperClass="mb-1"
                  labelClass="text-white"
                  name={"id-" + props.index}
                  type="text"
                  value={props.player.id}
                  onChange={(e)=>{props.handleChange(e)}}
                  contrast
                  className="bg-primary bg-opacity-25"
                  required
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  wrapperClass="mb-1"
                  labelClass="text-white"
                  name={"photo-" + props.index}
                  type="text"
                  value={props.player.photo}
                  onChange={(e)=>{props.handleChange(e)}}
                  contrast
                  className="bg-primary bg-opacity-25"
                  required
                />
              </MDBCol>
    </div>
  );
};

export default TableRow;
