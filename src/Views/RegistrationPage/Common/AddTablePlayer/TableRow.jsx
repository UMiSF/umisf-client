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
            wrapperClass="mb-2"
            labelClass="text-white"
            name={"name-" + props.index}
            labelStyle={{ color: "white", fontFamily: "Hind"}}
            className={`${Styles["mdbinput"]} bg-primary bg-opacity-25`}
            type="text"
            value={props.player.name}
            onChange={(e) => {
              props.handleChange(e);
            }}
            contrast
            required
            label="Full Name"
          />
        </MDBCol>
        <MDBCol className="" lg="4" md="12" sm="12">
          <MDBInput
            wrapperClass="mb-2"
            labelClass="text-white"
            labelStyle={{ color: "white", fontFamily: "Hind"}}
            className={`${Styles["mdbinput"]} bg-primary bg-opacity-25`}
            name={"id-" + props.index}
            type="text"
            value={props.player.id}
            onChange={(e) => {
              props.handleChange(e);
            }}
            contrast
            label="ID"
            required
          />
        </MDBCol>
        <MDBCol className="" lg="4" md="12" sm="12">
          <MDBInput
            wrapperClass="mb-2"
            labelClass="text-white"
            labelStyle={{ color: "white", fontFamily: "Hind"}}
            className={`${Styles["mdbinput"]} bg-primary bg-opacity-25`}
            name={"photo-" + props.index}
            type="text"
            value={props.player.photo}
            onChange={(e) => {
              props.handleChange(e);
            }}
            contrast
            required
            label="Profile image"
          />
        </MDBCol>
      </div>
      <div class="row d-lg-none mt-6 mb-6 d-xl-none"></div>
    </div>
  );
};

export default TableRow;
