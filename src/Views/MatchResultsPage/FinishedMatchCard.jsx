import React from "react";
import Styles from "./FinishedMatchCard.module.css";
import player1 from "./temp_img/LeeChongWei.jpg";
import player2 from "./temp_img/lin_dan.webp";
import { Table } from "react-bootstrap";
import { useLocation } from 'react-router-dom';

const FinishedMatchCard = () => {

    const match = {
        match_id : "123456",
        player_1 : {player_id : "111", player_name: "Lee C. Wei", player_dp:player1},
        player_2: {player_id : "222", player_name: "Lin Dan", player_dp:player2},
        round_1: {player_1_score: 21, player_2_score: 18},
        round_2: {player_1_score: 21, player_2_score: 15},
        round_3: {player_1_score: 0, player_2_score: 0},
        number_of_rounds : 2,
        winner_id : "111"
    }

    let location = useLocation();
    let {obj} = location.state;

  return (
    <div className={`${Styles["container"]} align-items-center`}>
    <div className={`${Styles["card"]} align-items-center`}>
      <div className={`${Styles["card-header"]} row`}>
        <div
          className={`${Styles["card-title"]} col ${Styles["dp-container"]}`}
        >
          <img
            src={obj["player_1"]["player_dp"]}
            alt={obj["player_1"]["player_name"]}
            className={`${Styles["dp"]} ${Styles["dp-left"]}`}
          />
        </div>
        <div
          className={`${Styles["card-title"]} ${Styles["trapezoid-left"]} `}
        >
          <div className={`${Styles["winning"]} text-center `}>
            {" "}
            <h3 className={`${Styles["winning-rounds"]} ${Styles["fadeIn"]}`}> {(obj["player_1"]["player_id"] === obj['winner_id'] )? 2 : (obj["number_of_rounds"] === 2)? 0 : 1}</h3>{" "}
          </div>
        </div>
        <div className={`${Styles["card-title"]} col`}></div>
        <div
          className={`${Styles["card-title"]} ${Styles["trapezoid-right"]}`}
        >
          <div className={`${Styles["winning"]} text-center `}>
            {" "}
            <h3 className={`${Styles["winning-rounds"]} ${Styles["fadeIn"]}`}>{(obj["player_2"]["player_id"] === obj['winner_id'] )? 2 : (obj["number_of_rounds"] === 2)? 0 : 1}</h3>{" "}
          </div>
        </div>
        <div
          className={`${Styles["card-title"]} ${Styles["dp-container"]} col`}
        >
          <img
            src={obj["player_2"]["player_dp"]}
            alt={obj["player_2"]["player_name"]}
            className={`${Styles["dp"]} ${Styles["dp-right"]}`}
          />
        </div>
      </div>

      <div className={`${Styles["table-container"]} ${Styles["fadeIn"]} row align-items-center`}>
        <Table size="sm" className={`${Styles["table"]} text-center`}>
          <thead>
            <tr>
              <th>{obj["player_1"]["player_name"]}</th>
              <th>Vs</th>
              <th>{obj["player_2"]["player_name"]}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{obj["round_1"]["player_1_score"]}</td>
              <td>Round 1</td>
              <td>{obj["round_1"]["player_2_score"]}</td>
            </tr>
            <tr>
              <td>{obj["round_2"]["player_1_score"]}</td>
              <td>Round 2</td>
              <td>{obj["round_2"]["player_2_score"]}</td>
            </tr>
            <tr>
              <td>{obj["round_3"]["player_1_score"]}</td>
              <td>Round 3</td>
              <td>{obj["round_3"]["player_2_score"]}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
    </div>
  );
};

export default FinishedMatchCard;
