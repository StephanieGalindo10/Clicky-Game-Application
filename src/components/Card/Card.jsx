
import React from "react";

///change to simple 

function Card({ clickHandler, id, image, name }) {
  console.log(image)
  return (
    <div className="card-holder">
      <img
        src={image}
        alt={name}
        className="card-select grow img-thumbnail m-2 pointer"
        onClick={() => clickHandler(id)}
      />
    </div>
  );
}

export default Card;