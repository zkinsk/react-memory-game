import React from "react";
import "./style.css";

function Header(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand"><h3>Click Game</h3></div>
      <div className="scoreArea">
        <h4>Current&nbsp;Score:&nbsp;{props.currentScore}</h4>
        <h4>High&nbsp;Score:&nbsp;{props.highScore} </h4>
      </div>
    </nav>
  )
}

export default Header;