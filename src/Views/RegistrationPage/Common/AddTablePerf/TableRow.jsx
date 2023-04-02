import React from "react";
import Styles from "./TableRow.module.css";
import { MDBCol, MDBInput } from "mdb-react-ui-kit";

const TableRow = (props) => {
    // console.log('Props of table row: ',props)
  return (
    <div className="d-flex flex-row ">
             <MDBCol>
                <MDBInput
                  wrapperClass=""
                  labelClass="text-white"
                  name={"name-" + props.index}
                  type="text"
                  value={props.perf.name}
                  onChange={(e)=>{props.handleChange(e)}}
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  wrapperClass="mb-1"
                  labelClass="text-white"
                  name={"level-" + props.index}
                  type="text"
                  value={props.perf.level}
                  onChange={(e)=>{props.handleChange(e)}}
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  wrapperClass="mb-1"
                  labelClass="text-white"
                  name={"place-" + props.index}
                  type="text"
                  value={props.perf.place}
                  onChange={(e)=>{props.handleChange(e)}}
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
    </div>
  );
};

export default TableRow;
