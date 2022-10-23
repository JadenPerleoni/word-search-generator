import React from "react";
import "./board.css";
import { useState } from "react";
import { wordsArr, checkWord } from "./Helpers";


let emptyWord = "";

function Letter(props) {
  const [isPicking, setIsPicking] = useState(false);


  //TODO: Store each letter that is highlighted in an array.
  // Sort the array alphabetically, then check each value against
  // another array which has all of correct letters.
  const handleClick = () => {
    setIsPicking((current) => !current);
    emptyWord = checkWord(props.letter,emptyWord);

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
