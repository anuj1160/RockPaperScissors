import React from "react";

function EndPage({ userScore, cpuScore }) {
  if (userScore > cpuScore) {
    return (
      <div>
        <div>
          ({userScore} {cpuScore})
        </div>
        You Win
      </div>
    );
  } else if (userScore == cpuScore) {
    return (
      <div>
        <div>
          ({userScore} {cpuScore})
        </div>
        Draw
      </div>
    );
  } else {
    return (
      <div>
        <div>
          ({userScore} {cpuScore})
        </div>
        You Lose
      </div>
    );
  }
}

export default EndPage;
