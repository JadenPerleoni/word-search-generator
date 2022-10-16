import React from "react";
import "./board.css";
import { useState } from "react";

function Letter(props) {
  const [isPicking, setIsPicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => {
    setIsPicking((current) => !current);
  };
  const changeColor = (e) => {

    if (isPicking) e.target.style.background = 'red';
  }

  return (
    <th
      style={{ backgroundColor: isPicking ? "green" : "" }}
      className="letter"
      onClick={handleClick}
      onMouseOver={changeColor}
    >
      {props.letter}
    </th>
  );
}
export default Letter;
