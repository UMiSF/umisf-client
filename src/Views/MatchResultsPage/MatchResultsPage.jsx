import React from "react";
//import FinishedMatchCard from './FinishedMatchCard';
import ResultRow from "./ResultRow";
import Styles from "./MatchResultsPage.module.css";
import player1 from "./temp_img/LeeChongWei.jpg";
import player2 from "./temp_img/lin_dan.webp";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import OngoingMatchcard from "./OngoingMatchcard";
import { Link } from "react-router-dom";
import { fontSize } from "@mui/system";

const MatchResultsPage = () => {
  const [finishedMatches, setFinishedMatches] = useState([
    {
      match_id: "123456",
      age_group: "U: 9",
      type: "Boys' single",
      time: "10:00 AM",
      date: "2022-01-01",
      player_1: {
        player_id: "111",
        player_name: "Lee Chong Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 15, player_2_score: 21 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 21, player_2_score: 19 },
      number_of_rounds: 3,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "U: 11",
      type: "Girls' single",
      time: "10:00 AM",
      date: "2022-01-01",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "U: 13",
      type: "Boys' double",
      time: "10:00 AM",
      date: "2022-01-02",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "U: 15",
      type: "Girls' double",
      time: "10:00 AM",
      date: "2022-01-02",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "U: 17",
      type: "Boys' single",
      time: "10:00 AM",
      date: "2022-01-03",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "-",
      type: "Staff",
      time: "10:00 AM",
      date: "2022-01-03",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "-",
      type: "University",
      time: "10:00 AM",
      date: "2022-01-03",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "U: 19",
      type: "Boys' single",
      time: "10:00 AM",
      date: "2022-01-03",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "U: 9",
      type: "Girls' single",
      time: "10:00 AM",
      date: "2022-01-03",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "-",
      type: "University",
      time: "10:00 AM",
      date: "2022-01-03",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "U: 13",
      type: "Boys' double",
      time: "10:00 AM",
      date: "2022-01-02",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "U: 13",
      type: "Boys' double",
      time: "10:00 AM",
      date: "2022-01-02",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "U: 13",
      type: "Boys' double",
      time: "10:00 AM",
      date: "2022-01-02",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "U: 13",
      type: "Boys' double",
      time: "10:00 AM",
      date: "2022-01-02",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
  ]);

  const [ongoingMatches, setOngoingMatches] = useState([
    {
      match_id: "123456",
      age_group: "U: 9",
      type: "Boys' single",
      time: "10:00 AM",
      date: "2022-01-01",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "U: 11",
      type: "Girls' single",
      time: "10:00 AM",
      date: "2022-01-01",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "U: 13",
      type: "Boys' double",
      time: "10:00 AM",
      date: "2022-01-02",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "U: 15",
      type: "Girls' double",
      time: "10:00 AM",
      date: "2022-01-02",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "U: 17",
      type: "Boys' single",
      time: "10:00 AM",
      date: "2022-01-03",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "-",
      type: "Staff",
      time: "10:00 AM",
      date: "2022-01-03",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "-",
      type: "University",
      time: "10:00 AM",
      date: "2022-01-03",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "U: 13",
      type: "Boys' double",
      time: "10:00 AM",
      date: "2022-01-02",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "U: 13",
      type: "Boys' double",
      time: "10:00 AM",
      date: "2022-01-02",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "U: 13",
      type: "Boys' double",
      time: "10:00 AM",
      date: "2022-01-02",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },
    {
      match_id: "123456",
      age_group: "U: 13",
      type: "Boys' double",
      time: "10:00 AM",
      date: "2022-01-02",
      player_1: {
        player_id: "111",
        player_name: "Lee C. Wei",
        player_dp: player1,
      },
      player_2: {
        player_id: "222",
        player_name: "Lin Dan",
        player_dp: player2,
      },
      round_1: { player_1_score: 21, player_2_score: 18 },
      round_2: { player_1_score: 21, player_2_score: 15 },
      round_3: { player_1_score: 0, player_2_score: 0 },
      number_of_rounds: 2,
      winner_id: "111",
    },

    
  ]);

  const ages = ["U: 9", "U: 11", "U: 13", "U: 15", "U: 17", "U: 19"];
  const types = [
    "Boys' single",
    "Girls' single",
    "Boys' double",
    "Girls' double",
    "Staff",
    "University",
  ];
  const dates = ["2022-01-01", "2022-01-02", "2022-01-03", "2022-01-03"];

  const [tempFinishedMatches, setTempFinishedMtches] =
    useState(finishedMatches);
  const [ageFilter, setAgeFilter] = useState("Age");
  const [typeFilter, setTypeFilter] = useState("Type");
  const [dateFilter, setDateFilter] = useState("Date");

  const [filterdAges, setFilteredAges] = useState([]);
  const [filterdTypes, setFilteredTypes] = useState(finishedMatches);
  const [filterdDates, setFilteredDates] = useState([]);

  function handleAgeFilter(e) {
    const id = parseInt(e.target.id);
    var tempArray = finishedMatches;
    tempArray =
      typeFilter !== "All" && typeFilter !== "Type"
        ? tempArray.filter((match) => {
            return match.type === typeFilter;
          })
        : tempArray;
    // console.log(tempArray);
    tempArray =
      dateFilter !== "All" && dateFilter !== "Date"
        ? tempArray.filter((match) => {
            return match.date === dateFilter;
          })
        : tempArray;
    // console.log(tempArray);
    id >= 0 ? setAgeFilter(ages[id]) : setAgeFilter("All");
    if (id >= 0) {
      tempArray = tempArray.filter((match) => {
        return match.age_group === ages[id];
      });
    }
    //console.log(tempArray);
    setTempFinishedMtches(tempArray);
    //console.log(tempArray);
  }

  function handleTypeFilter(e) {
    const id = parseInt(e.target.id);
    var tempArray = finishedMatches;

    //console.log(tempArray);
    tempArray =
      ageFilter !== "All" && ageFilter !== "Age"
        ? tempArray.filter((match) => {
            return match.age_group === ageFilter;
          })
        : tempArray;
    //console.log(tempArray);
    tempArray =
      dateFilter !== "All" && dateFilter !== "Date"
        ? tempArray.filter((match) => {
            return match.date === dateFilter;
          })
        : tempArray;
    //console.log(tempArray);
    id >= 0 ? setTypeFilter(types[id]) : setTypeFilter("All");
    if (id >= 0) {
      tempArray = tempArray.filter((match) => {
        return match.type === types[id];
      });
    }
    //console.log(tempArray);
    setTempFinishedMtches(tempArray);
    //console.log(tempArray);
  }

  function handleDateFilter(e) {
    const id = parseInt(e.target.id);
    var tempArray = finishedMatches;
    //console.log(tempArray);
    tempArray =
      ageFilter !== "All" && ageFilter !== "Age"
        ? tempArray.filter((match) => {
            return match.age_group === ageFilter;
          })
        : tempArray;
    //console.log(tempArray);
    tempArray =
      typeFilter !== "All" && typeFilter !== "Type"
        ? tempArray.filter((match) => {
            return match.type === typeFilter;
          })
        : tempArray;
    //console.log(tempArray);
    id >= 0 ? setDateFilter(dates[id]) : setDateFilter("All");
    if (id >= 0) {
      tempArray = tempArray.filter((match) => {
        return match.date === dates[id];
      });
    }

    // console.log(tempArray);
    setTempFinishedMtches(tempArray);
    //console.log(tempArray);
  }

  return (
    
    <div className={`${Styles["body"]}`}>

          <div className={`${Styles["header"]}`}>
            <div className={`${Styles["title"]} `}>
              <h2 style={{fontFamily:"overlock",fontSize:"35pt"}}>Match Results</h2>
            </div>
            
              <div className={`btn-group`}>
                <Dropdown className={`${Styles["select-container"]} `}>
                  <Dropdown.Toggle
                    variant="primary"
                    id="dropdown-basic"
                    className={`${Styles["select-btn"]}`}
                  >
                    <span  className={`${Styles["span-font"]} `}>{ageFilter}</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={`${Styles["select-menu"]}`}>
                    <Dropdown.Item onClick={handleAgeFilter} name="age" id="-1">
                      All
                    </Dropdown.Item>

                    {ages?.map((age, index) => {
                      return (
                        <Dropdown.Item
                          onClick={handleAgeFilter}
                          name="age"
                          id={index}
                        >
                          {age}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className={`${Styles["select-container"]} `}>
                  <Dropdown.Toggle
                    variant="primary"
                    id="dropdown-basic"
                    className={`${Styles["select-btn"]}`}
                  >
                    <span className={`${Styles["span-font"]} `}>{typeFilter}</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={`${Styles["select-menu"]}`}>
                    <Dropdown.Item
                      onClick={handleTypeFilter}
                      name="type"
                      id="-1"
                    >
                      All
                    </Dropdown.Item>
                    {types?.map((type, index) => {
                      return (
                        <Dropdown.Item
                          onClick={handleTypeFilter}
                          name="type"
                          id={index}
                        >
                          {type}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className={`${Styles["select-container"]} `}>
                  <Dropdown.Toggle
                    variant="primary"
                    id="dropdown-basic"
                    className={`${Styles["select-btn"]}`}
                  >
                    <span className={`${Styles["span-font"]} `}>{dateFilter}</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={`${Styles["select-menu"]}`}>
                    <Dropdown.Item
                      onClick={handleDateFilter}
                      name="date"
                      id="-1"
                    >
                      All
                    </Dropdown.Item>

                    {dates?.map((date, index) => {
                      return (
                        <Dropdown.Item
                          onClick={handleDateFilter}
                          name="date"
                          id={index}
                        >
                          {date}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            
          </div>
          

          <div className={`${Styles["container"]}`}>
            {tempFinishedMatches?.map((match, index) => {
              return (
                <Link
                  to={`../match-result/${match.match_id}`}
                  state={{ obj: match }}
                  key={index}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ResultRow key={index} match={match} />
                </Link>
              );
            })}
          </div>
   

      {/* <div className={`${Styles["ongoing-match-result-section"]} col`}>
        Ongoing matches
        {ongoingMatches?.map((match, index) => {
          return <OngoingMatchcard match={match} key={index} />;
        })}
      </div> */}
    </div>
    
  );
};

export default MatchResultsPage;
