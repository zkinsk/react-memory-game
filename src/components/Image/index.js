import React from "react";
import "./style.css";

function Image(props) {
  return (
    <div className="col-3 clickImg m-2" onClick={() => props.clickCard(props.id, props.picked)}>
      <div className="img-container">
        <img
          alt={props.id}
          src={props.src}
          key={props.src}
        />
      </div>
    </div>
  )
}

export default Image;