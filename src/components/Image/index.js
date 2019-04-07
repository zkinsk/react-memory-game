import React from "react";
import "./style.css";

function Image(props) {
  return (
    <div className="col-3 clickImg my-2 mx-1 mx-md-2 px-0 px-md-1" onClick={() => props.clickCard(props.id, props.picked)}>
      <div className="img-container">
        <img
          alt={props.id}
          src={`./images/${props.src}`}
          key={props.src}
        />
      </div>
    </div>
  )
}

export default Image;