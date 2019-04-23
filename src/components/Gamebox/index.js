import React from "react";
import Image from '../Image';


import "./style.css";

function Gamebox(props) {
  return (
    <div className="row justify-content-center mx-0">
      <div className="col-12 col-md-10">
        <div className="row justify-content-center">
          {
            props.cards.map(card =>
              <Image
                clickCard={props.clickCard}
                id={card.id}
                key={card.id}
                picked={card.picked}
                src={card.src}
              />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Gamebox;