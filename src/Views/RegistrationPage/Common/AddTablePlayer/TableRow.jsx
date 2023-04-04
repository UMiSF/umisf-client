import React from "react";
import Styles from "./TableRow.module.css";
import { MDBCol, MDBInput } from "mdb-react-ui-kit";

const TableRow = (props) => {
    // console.log('Props of table row: ',props)
  return (
    <div>
    <div className="row">
    <MDBCol className="" lg="4" md="12" sm="12">
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
                  label='Full Name'
                />
              </MDBCol>
              <MDBCol className="" lg="4" md="12" sm="12">
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
              <MDBCol className="" lg="4" md="12" sm="12">
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
    <div class="row d-lg-none mt-6 mb-6 d-xl-none">
       
      </div>
    
    </div>

  );
};

export default TableRow;
