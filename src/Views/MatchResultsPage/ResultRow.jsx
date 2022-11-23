import React from 'react';
import Styles from './ResultRow.module.css';

const ResultRow = (props) => {
    return (
        <div
        className={`${Styles["row"]} row border border-3 border-top border-light`}
        //   id = {employee.emp_id}
      >
        <div className="col-3 text-center d-none d-md-block">
            <div className={`${Styles["age-group"]}`} style={{height: "30px", }}>{props.match.age_group}</div>
            <div className={`${Styles["type"]}`}  style={{height: "30px",  }}>{props.match.type}</div>
            </div>

        <div className="col-3 text-center">{props.match.player_1.player_name}</div>
        <div className="col-1 text-center">VS</div>
        <div className="col-3 text-center">{props.match.player_2.player_name}</div>
        <div className="col-2 text-center d-none d-md-block">
            <div className={`${Styles["age-group"]}`} style={{height: "30px",}}>{props.match.date}</div>
            <div className={`${Styles["type"]}`} style={{height: "30px", }}>{props.match.time}</div>
            </div>

      </div>
    );
};

export default ResultRow;