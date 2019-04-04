import React from "react";
import "./style.css";

function Header(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <button className="navbar-brand"><h3>Click Game</h3></button>
      {/* <a className="navbar-brand" href="#"> */}
        {/* <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""> */}
      {/* </a> */}
      <div className="scoreArea">
        <h4>Current Score: {props.currentScore}</h4>
        <h4>High Score: {props.highScore} </h4>
      </div>
    </nav>
  )
}

export default Header;