import React, { useState } from "react";
import paper from "../utils/paper.png";
import rock from "../utils/rock.png";
import scis from "../utils/scissors.png";
import EndPage from "./EndPage";
function GamePage() {
  const p = 3;
  const [val, SetVal] = useState(paper);
  const [userScore, setUserScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [round, SetRound] = useState(0);
  const arr = [paper, rock, scis];
  //   SetVal(paper);
  const [computerVal, setComputerVal] = useState(paper);
  const [over, SetOver] = useState(false);
  const isGameOver = () => {};
  const scoreUpdate = (x, y) => {
    if (x == paper && y == rock) return true;
    if (x == rock && y == scis) return true;
    if (x == scis && y == paper) return true;
    return false;
  };
  const handleOption = (userVal) => {
    SetVal(userVal);
    let x = Math.floor(Math.random() * 3);
    // console.log(x);
    // console.log(arr[x]);
    setComputerVal(arr[x]);
    // console.log(round);
    if (scoreUpdate(val, computerVal)) setUserScore(userScore + 1);
    if (scoreUpdate(computerVal, val)) setCpuScore(cpuScore + 1);
    // isGameOver();
    
    if (round == p) {
      SetOver(true);
    }
  };
  if (over == true) {
    return <EndPage userScore={userScore} cpuScore={cpuScore} />;
  } else {
    return (
      <div>
        <div>
          <span>
            <img
              src={paper}
              alt=""
              srcset=""
              onClick={() => {
                SetRound(round + 1);
                handleOption(paper);
              }}
            />
          </span>
          <span>
            <img
              src={rock}
              alt=""
              srcset=""
              onClick={() => {
                SetRound(round + 1);
                handleOption(rock);
              }}
            />
          </span>
          <span>
            <img
              src={scis}
              alt=""
              srcset=""
              onClick={() => {
                SetRound(round + 1);
                handleOption(scis);
              }}
            />
          </span>
        </div>
        <div>
          <img src={val} alt="" srcset="" />;
        </div>
        <div>
          <img src={computerVal} alt="" />
        </div>
      </div>
    );
  }
}

export default GamePage;
