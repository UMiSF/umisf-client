import React from "react";
import Styles from "./ResultRow.module.css";

const ResultRow = (props) => {
  return (
    <div
      className={`${Styles["row"]}`}
      //   id = {employee.emp_id}
    >
      {/* <div className="col-3 text-center d-none d-md-block">
            <div className={`${Styles["age-group"]}`} style={{height: "20px", }}>{props.match.age_group}</div>
            <div className={`${Styles["type"]}`}  style={{height: "20px",  }}>{props.match.type}</div>
            </div>

        <div className="col-3 text-center" style={{fontSize: "20px", letterSpacing: "2px" }}>{props.match.player_1.player_name}</div>
        <div className="col-1 text-center">VS</div>
        <div className="col-3 text-center" style={{fontSize: "20px", letterSpacing: "2px" }}>{props.match.player_2.player_name}</div>
        <div className="col-2 text-center d-none d-md-block">
            <div className={`${Styles["age-group"]}`} style={{height: "20px",}}>{props.match.date}</div>
            <div className={`${Styles["type"]}`} style={{height: "20px", }}>{props.match.time}</div>
            </div> */}
        <div className={`${Styles["text-wrapper"]}`}> 
        <div className={`${Styles["age-group"]} text-center`} >
          {props.match.age_group}{" - "}{props.match.type}
        </div>
        <div className={`${Styles["players-text"]} text-center`} style={{fontFamily:"overlock"}}>
          {props.match.player_1.player_name}{" Vs. "}{props.match.player_2.player_name}
          </div>

            <div className={`${Styles["age-group"]} text-center`} >{props.match.date}</div>
            <div className={`${Styles["age-group"]} text-center`} >{props.match.time}</div>
           
            </div>
    </div>
  );
};

export default ResultRow;
