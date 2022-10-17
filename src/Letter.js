import React from "react";
import "./board.css";
import { useState } from "react";

function Letter(props) {
  const [isPicking, setIsPicking] = useState(false);

  const handleClick = () => {
    setIsPicking((current) => !current);
  };


  return (
    <th
      style={{ backgroundColor: isPicking ? "green" : "" }}
      className="letter"
      onClick={handleClick}
    >
      {props.letter}
    </th>
  );
}
export default Letter;
