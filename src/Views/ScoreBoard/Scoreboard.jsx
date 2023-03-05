import React, { useEffect, useState } from "react";
import Styles from "./Scoreboard.module.css";
import umisf_logo from "../../assests/images/umisf_logo-removebg.png";
import lee_chong_wei from "../../assests/images/LeeChongWei.jpg";
import lin_dan from "../../assests/images/lin_dan.webp";
import swap from "../../assests/images/swap.png";
import w_shuttle from "../../assests/images/w-shuttle.png";
import * as _ from "lodash";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import timer from "../../assests/images/timer.gif";
import celeb from '../../assests/images/celeb.gif';

const Scoreboard = () => {
  const match = {
    ageGroup: "Under 19",
    type: `Boys' Single`,
    matchRound: "Semi Finals",
    playerOne: {
      firstName: "Lee C.",
      lastName: "Wei",
      photo: lee_chong_wei,
    },
    playerTwo: {
      firstName: "Lin",
      lastName: "Dan",
      photo: lin_dan,
    },
    matchResult: {
      teamOneScores: [],
      teamTwoScores: [],
      winner: "",
      umpire: "",
    },
  };

  const [round, setRound] = useState(1);
  const [teamOne, setTeamOne] = useState({
    side: "L",
    scoreOne: "-",
    scoreTwo: "-",
    scoreThree: "-",
    won: 0,
  });
  const [teamTwo, setTeamTwo] = useState({
    side: "R",
    scoreOne: "-",
    scoreTwo: "-",
    scoreThree: "-",
    won: 0,
  });
  const [won, setWon] = useState([]);
  const [doServe, setDoServe] = useState({ left: false, right: false });
  const [score, setScore] = useState({ left: 0, right: 0 });

  // const [period, setPeriod] = useState(120)
  let period = 120;
  const [leftWon, setLeftwon] = useState(0);
  const [rightWon, setRightWon] = useState(0);
  const [show, setShow] = useState(false); //maodal show
  const handleClose = () => setShow(false); //handle modal close
  const handleShow = () => setShow(true); //handle modal show

  const [showWinner, setShowWinner] = useState(false); //maodal show
  const handleCloseWinner = () => setShowWinner(false); //handle modal close
  const handleShowWinner = () => setShowWinner(true); //handle modal show

  const swapSides = () => {
    console.log("Team One swap: ", teamOne);
    console.log("Team Two swap: ", teamTwo);
    if (teamOne.side === "L") {
      setTeamOne((prevValue) => {
        return { ...prevValue, side: "R" };
      });
    } else {
      setTeamOne((prevValue) => {
        return { ...prevValue, side: "L" };
      });
    }
    if (teamTwo.side === "L") {
      setTeamTwo((prevValue) => {
        return { ...prevValue, side: "R" };
      });
    } else {
      setTeamTwo((prevValue) => {
        return { ...prevValue, side: "L" };
      });
    }
    setLeftwon(rightWon);
    setRightWon(leftWon);
    setScore((prevValue) => {
      return { left: prevValue.right, right: prevValue.left };
    });
    setDoServe((prevValue) => {
      return { left: prevValue.right, right: prevValue.left };
    });
  };

  const swapService = () => {
    console.log("DoServe: ", doServe);
    doServe.left
      ? setDoServe({ left: false, right: true })
      : setDoServe({ left: true, right: false });
  };

  const increasePointLeft = () => {
    console.log("score: ", score);
    console.log("team 1 and 2: ", teamOne, teamTwo);
    if (score.left === 10 && score.left >= score.right) {
      startInterval();
    }
    setScore((prevValue) => {
      return { ...prevValue, left: prevValue.left + 1 };
    });
    setDoServe({ left: true, right: false });
  };

  const decreasePointLeft = () => {
    setScore((prevValue) => {
      return { ...prevValue, left: prevValue.left - 1 };
    });
  };

  const increasePointRight = () => {
    console.log("score: ", score);
    console.log("team 1 and 2: ", teamOne, teamTwo);
    if (score.right === 10 && score.right >= score.left) {
      startInterval();
    }
    setScore((prevValue) => {
      return { ...prevValue, right: prevValue.right + 1 };
    });
    setDoServe({ left: false, right: true });
  };

  const decreasePointRight = () => {
    setScore((prevValue) => {
      return { ...prevValue, right: prevValue.right - 1 };
    });
  };

  const finishTheRound = () => {
    console.log("b4 return", teamOne);
    if (score.left === 0 && score.right === 0) return;
    if (
      (leftWon === 1 && rightWon === 2) ||
      (leftWon === 2 && rightWon === 0) ||
      (leftWon === 2 && rightWon === 1) ||
      (leftWon === 0 && rightWon === 2)
    )
      return;
    console.log("after return");
    if (round === 3) {
      console.log("round3");
      if (score.left > score.right) {
        //left side has won the match
        setLeftwon(2);
        setRightWon(1);
        if (teamOne.side === "L") {
          console.log("left side");
          setTeamOne((prevValue) => {
            return {
              ...prevValue,

              scoreThree: score.left,
              won: prevValue.won + 1,
            };
          });
          setTeamTwo((prevValue) => {
            return { ...prevValue, scoreThree: score.right };
          });
        } else {
          console.log("right side");
          setTeamOne((prevValue) => {
            return { ...prevValue, scoreThree: score.right };
          });
          setTeamTwo((prevValue) => {
            return {
              ...prevValue,
              scoreThree: score.left,
              won: prevValue.won + 1,
            };
          });
        }
      } else {
        //right side has won
        setLeftwon(1);
        setRightWon(2);
        if (teamOne.side === "R") {
          setTeamOne((prevValue) => {
            return {
              ...prevValue,
              scoreThree: score.right,
              won: prevValue.won + 1,
            };
          });
          setTeamTwo((prevValue) => {
            return { ...prevValue, scoreThree: score.left };
          });
        } else {
          setTeamOne((prevValue) => {
            return { ...prevValue, scoreThree: score.left };
          });
          setTeamTwo((prevValue) => {
            return {
              ...prevValue,
              scoreThree: score.right,
              won: prevValue.won + 1,
            };
          });
        }
      }
      finishTheMatch();
    } else if (round === 1) {
      startInterval();
      console.log("Team one and two: ", teamOne, teamTwo);
      if (score.left > score.right) {
        //left side has won the match
        setRightWon(1);
        setDoServe({ left: false, right: true });
        if (teamOne.side === "L") {
          setTeamOne((prevValue) => {
            return {
              ...prevValue,
              side: "R",
              scoreOne: score.left,
              won: prevValue.won + 1,
            };
          });
          setTeamTwo((prevValue) => {
            return { ...prevValue, side: "L", scoreOne: score.right };
          });
        } else {
          setTeamOne((prevValue) => {
            return { ...prevValue, side: "L", scoreOne: score.right };
          });
          setTeamTwo((prevValue) => {
            return {
              ...prevValue,
              side: "R",
              scoreOne: score.left,
              won: prevValue.won + 1,
            };
          });
        }
      } else {
        //right side has won the match
        setLeftwon(1);
        setDoServe({ left: true, right: false });
        if (teamOne.side === "R") {
          setTeamOne((prevValue) => {
            return {
              ...prevValue,
              side: "L",
              scoreOne: score.right,
              won: prevValue.won + 1,
            };
          });
          setTeamTwo((prevValue) => {
            return { ...prevValue, side: "R", scoreOne: score.left };
          });
        } else {
          setTeamOne((prevValue) => {
            return { ...prevValue, side: "R", scoreOne: score.left };
          });
          setTeamTwo((prevValue) => {
            return {
              ...prevValue,
              side: "L",
              scoreOne: score.right,
              won: prevValue.won + 1,
            };
          });
        }
      }
      setRound(2);
      setScore({ left: 0, right: 0 });
      //StartCounting(120);
    } else if (round === 2) {
      console.log("Team one and two: ", teamOne, teamTwo);
      if (score.left > score.right) {
        //left side has won the match
        setDoServe({ left: false, right: true });
        if (teamOne.side === "L") {
          setTeamOne((prevValue) => {
            return {
              ...prevValue,
              side: "R",
              scoreTwo: score.left,
              won: prevValue.won + 1,
            };
          });
          setTeamTwo((prevValue) => {
            return { ...prevValue, side: "L", scoreTwo: score.right };
          });
        } else {
          setTeamOne((prevValue) => {
            return { ...prevValue, side: "L", scoreTwo: score.right };
          });
          setTeamTwo((prevValue) => {
            return {
              ...prevValue,
              side: "R",
              scoreTwo: score.left,
              won: prevValue.won + 1,
            };
          });
        }
        if (
          (teamOne.won === 1 && teamOne.side === "L") ||
          (teamTwo.won === 1 && teamTwo.side === "L")
        ) {
          setLeftwon(2);
          setDoServe({ left: true, right: false });
          if (teamOne.side === "L") {
            setTeamOne((prevValue) => {
              return { ...prevValue, side: "L" };
            });
            setTeamTwo((prevValue) => {
              return { ...prevValue, side: "R" };
            });
          } else {
            setTeamTwo((prevValue) => {
              return { ...prevValue, side: "L" };
            });
            setTeamOne((prevValue) => {
              return { ...prevValue, side: "R" };
            });
          }
          finishTheMatch();
        } else {
          startInterval();
          setRightWon(1);
          setLeftwon(1);
          setScore({ left: 0, right: 0 });
        }
      } else {
        //right side has won the match
        setDoServe({ left: true, right: false });
        if (teamOne.side === "R") {
          setTeamOne((prevValue) => {
            return {
              ...prevValue,
              side: "L",
              scoreTwo: score.right,
              won: prevValue.won + 1,
            };
          });
          setTeamTwo((prevValue) => {
            return { ...prevValue, side: "R", scoreTwo: score.left };
          });
        } else {
          setTeamOne((prevValue) => {
            return { ...prevValue, side: "R", scoreTwo: score.left };
          });
          setTeamTwo((prevValue) => {
            return {
              ...prevValue,
              side: "L",
              scoreTwo: score.right,
              won: prevValue.won + 1,
            };
          });
        }
        if (
          (teamOne.won === 1 && teamOne.side === "R") ||
          (teamTwo.won === 1 && teamTwo.side === "R")
        ) {
          setRightWon(2);
          setDoServe({ left: false, right: true });
          if (teamOne.side === "R") {
            setTeamOne((prevValue) => {
              return { ...prevValue, side: "R" };
            });
            setTeamTwo((prevValue) => {
              return { ...prevValue, side: "L" };
            });
          } else {
            setTeamTwo((prevValue) => {
              return { ...prevValue, side: "R" };
            });
            setTeamOne((prevValue) => {
              return { ...prevValue, side: "L" };
            });
          }

          finishTheMatch();
        } else {
          startInterval();
          setLeftwon(1);
          setRightWon(1);
          setScore({ left: 0, right: 0 });
        }
      }
      setRound(3);

      //StartCounting(120);
    }
  };

  const startTheMatch = () => {
    console.log("Start", match);
  };

  const finishTheMatch = () => {
    console.log("Finished ", won);
    handleShowWinner()
  };

  const startInterval = () => {
    console.log("Start interval");
    handleShow();
    setTimeout(function () {
      // Log a message to the console
      handleClose();
    }, 121000);
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
  };

  return (
    <div className={Styles["page"]}>
      <div className={Styles["header"]}>
        <img
          src={umisf_logo}
          alt="umisf-logo"
          className={Styles["umisf-logo"]}
        />
        <div className={Styles["header-line-container"]}>
          <div className={Styles["header-line"]}>{match.ageGroup}</div>
          <div className={Styles["header-line"]}> {"|"}</div>
          <div className={Styles["header-line"]}> {match.type}</div>
          <div className={Styles["header-line"]}> {"|"}</div>
          <div className={Styles["header-line"]}> {match.matchRound} </div>
        </div>
      </div>
      <div className={Styles["body"]}>
        <div className={Styles["details"]}>
          <div className={Styles["player-container"]}>
            <div className={Styles["player1"]}>
              <img
                src={match.playerOne.photo}
                alt="player1"
                className={Styles["player1-img"]}
              />
              <div className={`${Styles["l-side"]}`}>{teamOne.side}</div>
              <h5 className={`${Styles["l-name"]}`}>
                {match.playerOne.firstName + " " + match.playerOne.lastName}
              </h5>
            </div>
            <div className={`${Styles["player2"]}`}>
              <img
                src={match.playerTwo.photo}
                alt="player2"
                className={Styles["player2-img"]}
              />
              <div className={`${Styles["r-side"]}`}>{teamTwo.side}</div>
              <h5 className={`${Styles["r-name"]}`}>
                {match.playerTwo.firstName + " " + match.playerTwo.lastName}
              </h5>
            </div>
          </div>
          <div className={`${Styles["result-table-container"]} `}>
            <div
              className={`${Styles["score-container"]} d-flex justify-content-center`}
            >
              <div className={Styles["score-line"]}>
                {teamOne.scoreOne.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </div>
              <div className={Styles["score-line"]}> {"|"}</div>
              <div className={Styles["score-line"]}>
                {" "}
                {teamTwo.scoreOne.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </div>
            </div>
            <div
              className={`${Styles["score-container"]} d-flex justify-content-center`}
            >
              <div className={Styles["score-line"]}>
                {teamOne.scoreTwo.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </div>
              <div className={Styles["score-line"]}> {"|"}</div>
              <div className={Styles["score-line"]}>
                {" "}
                {teamTwo.scoreTwo.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </div>
            </div>
            <div
              className={`${Styles["score-container"]} d-flex justify-content-center`}
            >
              <div className={Styles["score-line"]}>
                {teamOne.scoreThree.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </div>
              <div className={Styles["score-line"]}> {"|"}</div>
              <div className={Styles["score-line"]}>
                {" "}
                {teamTwo.scoreThree.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={Styles["score-board"]}>
          <div className={Styles["score-board-up"]}>
            <div className={Styles["score-left"]} name="score-left">
              {score.left.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </div>
            <img
              src={w_shuttle}
              alt="shuttle"
              className={Styles["w-shuttle-left"]}
              hidden={!doServe.left}
            />
            <div className={Styles["win-left"]} name="win-left">
              {leftWon}
            </div>
            <div className={Styles["win-right"]} name="win-right">
              {rightWon}
            </div>
            <div className={Styles["score-right"]} name="score-right">
              {score.right.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </div>
            <img
              src={w_shuttle}
              alt="shuttle"
              className={Styles["w-shuttle-right"]}
              hidden={!doServe.right}
            />
            <img
              src={swap}
              alt="swap"
              className={Styles["swap"]}
              onClick={swapSides}
            />
          </div>
          <Button variant="light" onClick={increasePointLeft}>
            L-U
          </Button>{" "}
          <Button variant="light" onClick={decreasePointLeft}>
            L-D
          </Button>{" "}
          <Button variant="light" onClick={swapService}>
            L-S
          </Button>{" "}
          <Button variant="light" onClick={increasePointRight}>
            R-U
          </Button>{" "}
          <Button variant="light" onClick={decreasePointRight}>
            R-D
          </Button>{" "}
          <Button variant="light" onClick={swapService}>
            R-S
          </Button>{" "}
          <Button variant="light" onClick={finishTheRound}>
            Finish
          </Button>{" "}
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className={Styles["modal-header"]}>
          <div className={Styles["header-modal"]}>
            <img
              src={umisf_logo}
              alt="umisf-logo"
              className={Styles["umisf-logo-modal"]}
            />
          </div>
        </Modal.Header>
        <Modal.Body className={Styles["modal-body"]}>
          <img src={timer} alt="timer" className={Styles["timer"]} />
          <div className={Styles["player-container-modal"]}>
            <div className={Styles["player1-modal"]}>
              <img
                src={match.playerOne.photo}
                alt="player1"
                className={Styles["player1-img-modal"]}
              />
              <div className={`${Styles["l-side-modal"]}`}>{teamOne.side}</div>
            </div>
            <div className={`${Styles["player2-modal"]}`}>
              <img
                src={match.playerTwo.photo}
                alt="player2"
                className={Styles["player2-img-modal"]}
              />
              <div className={`${Styles["r-side-modal"]}`}>{teamTwo.side}</div>
            </div>
          </div>
          <div className={`${Styles["result-table-container-modal"]} `}>
            <h4 style={{ color: "white", textAlign: "center", fontWeight: 'bolder'}}>
              Round {round}
            </h4>
            <div
              className={`${Styles["score-container-modal"]} d-flex justify-content-center`}
            >
              <div className={Styles["score-line-modal"]}>
                {teamOne.side == "L"
                  ? score.left.toLocaleString("en-US", {
                      minimumIntegerDigits: 2,
                      useGrouping: false,
                    })
                  : score.right.toLocaleString("en-US", {
                      minimumIntegerDigits: 2,
                      useGrouping: false,
                    })}
              </div>
              <div className={Styles["score-line-modal"]}> {"|"}</div>
              <div className={Styles["score-line-modal"]}>
                {" "}
                {teamTwo.side == "L"
                  ? score.left.toLocaleString("en-US", {
                      minimumIntegerDigits: 2,
                      useGrouping: false,
                    })
                  : score.right.toLocaleString("en-US", {
                      minimumIntegerDigits: 2,
                      useGrouping: false,
                    })}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={showWinner}
        onHide={handleCloseWinner}
        size="lg"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className={Styles["modal-header"]}>
          <div className={Styles["header-modal"]}>
            <img
              src={umisf_logo}
              alt="umisf-logo"
              className={Styles["umisf-logo-modal"]}
             
            />
          </div>
        </Modal.Header>
        <Modal.Body className={Styles["modal-body-winner"]}>
          <img src={celeb} alt="celebration-gif" className={Styles["celeb"]} />
          <img src={teamOne.won > teamTwo.won ? match.playerOne.photo: match.playerTwo.photo} alt="winner-img" className={Styles["winner"]} />
          <div className={Styles["player-container-modal"]}>
          <div className={Styles["header-line-container-modal"]}>
          <div className={Styles["header-line-modal"]}>{match.ageGroup}</div>
          <div className={Styles["header-line-modal"]}> {"|"}</div>
          <div className={Styles["header-line-modal"]}> {match.type}</div>
          <div className={Styles["header-line-modal"]}> {"|"}</div>
          <div className={Styles["header-line-modal"]}> {match.matchRound} </div>
        </div>
           </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Scoreboard;
