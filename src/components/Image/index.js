import React from "react";
import "./style.css";

function Image(props) {
  return (
    <div className="col-3 clickImg m-2" onClick={() => props.clickCard(props.id)}>
      <div className="img-container">
        <img
          alt={props.id}
          src={props.src}
        />
      </div>
    </div>
  )
}

export default Image;