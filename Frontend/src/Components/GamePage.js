import React, { useState } from "react";
import paper from "../utils/paper.png";
import rock from "../utils/rock.png";
import scis from "../utils/kenchi.jpg";
import EndPage from "./EndPage";

function GamePage() {
  const p = 3;
  const [val, SetVal] = useState(paper);
  const [userScore, setUserScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [round, SetRound] = useState(0);
  const arr = [paper, rock, scis];
  const [computerVal, setComputerVal] = useState(paper);
  const [over, SetOver] = useState(false);
  const scoreUpdate = (x, y) => {
    if (x === paper && y === rock) return true;
    if (x === rock && y === scis) return true;
    if (x === scis && y === paper) return true;
    return false;
  };

  const handleOption = (userVal) => {
    SetVal(userVal);
    let x = Math.floor(Math.random() * 3);
    setComputerVal(arr[x]);
    // if (scoreUpdate(val, computerVal)) setUserScore(userScore + 1);
    // if (scoreUpdate(computerVal, val)) setCpuScore(cpuScore + 1);
      if (scoreUpdate(val, computerVal)) setUserScore(userScore + 1);
      if (scoreUpdate(computerVal, val)) setCpuScore(cpuScore + 1);
    
    SetRound(round + 1);
    if (round == p) {
      SetOver(true);
    }
  };
  
  if (over == true) {
    return <EndPage userScore={userScore} cpuScore={cpuScore} />;
  } else {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <div className="flex space-x-4 mb-8">
          <span>
            <img
              src={paper}
              alt=""
              onClick={() => handleOption(paper)}
              className="cursor-pointer hover:opacity-80 transition-opacity duration-300 rounded-full w-32"
            />
          </span>
          <span>
            <img
              src={rock}
              alt=""
              onClick={() => handleOption(rock)}
              className="cursor-pointer hover:opacity-80 transition-opacity duration-300 rounded-full w-32"
            />
          </span>
          <span>
            <img
              src={scis}
              alt=""
              onClick={() => handleOption(scis)}
              className="cursor-pointer hover:opacity-80 transition-opacity duration-300 rounded-full w-32"
            />
          </span>
        </div>
        <div className="flex items-center">
          <img src={val} alt="" className="w-32" />
          {userScore}
          <div className="mx-8 font-bold text-xl text-gray-700">VS</div>
          <img src={computerVal} alt="" className="w-32" />
          {cpuScore}
        </div>
      </div>
      
    );
  }
}

export default GamePage;
