import React from "react";
import "./style.css";

function Winscreen(props) {
  return (
    <div className="row justify-content-center vertical-center ">
      <div className="col-4 win-box" onClick={props.resetGame}>
        <h1 className="text-center win-text">You won the game!</h1>
        <p className="text-center">Click to me Re-start</p>
      </div>
    </div>
  )
}

export default Winscreen;