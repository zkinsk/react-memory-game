import React from "react";
import "./style.css";

function Header(props) {
  return (
    <nav className="navbar navbar-light">
      <div ><h3>Steven Universe</h3></div>
      <div className="scoreArea">
        <h4>Current&nbsp;Score:&nbsp;{props.currentScore}</h4>
        <h4>High&nbsp;Score:&nbsp;{props.highScore} </h4>
      </div>
    </nav>
  )
}

export default Header;