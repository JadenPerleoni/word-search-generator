import React from "react";
import "./board.css";
import { useState } from "react";
import { checkWord } from "./Helpers";
export let selectedWord = "";
function Letter(props) {
  const [isPicking, setIsPicking] = useState(false);

  const handleClick = () => {
    setIsPicking((current) => !current);
    selectedWord = checkWord(props.letter, selectedWord);
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
