import React, {useState} from "react";
import Styles from "./TableRow.module.css";
import { MDBCol, MDBInput } from "mdb-react-ui-kit";
import Dropdown from "../../../../common/Dropdown/Dropdown";

const TableRow = (props) => {
    // console.log('Props of table row: ',props)
    const levelOptions = ['School', 'Zonal', 'Provincial', 'National', 'International']
    const [level, setLevel] = useState("");
    const PlaceOptions = ['Champion', 'Runnerup', 'Second-Runnerup', 'Quaterfinalist']
    const [place, setPlace] = useState("");
  return (
    <div className="d-flex flex-row ">
             <MDBCol>
                <MDBInput
                  wrapperClass=""
                  labelClass="text-white"
                  name={"name-" + props.index}
                  type="text"
                  value={props.perf.name}
                  onChange={(e)=>{props.handleChange(e.target.value, e.target.name)}}
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
              <MDBCol>
                <Dropdown options = {levelOptions} handleClick={(option,id)=>{setLevel(option); props.handleChange(option,id)}} value={level}  name={"level-" + props.index}  lable={"Level"}/>
              </MDBCol>
              <MDBCol>
              <Dropdown options = {PlaceOptions} handleClick={(option,id)=>{setPlace(option); props.handleChange(option,id)}} value={place}  name={"place-" + props.index}  lable={"Winning Place"}/>
              </MDBCol>
    </div>
  );
};

export default TableRow;
