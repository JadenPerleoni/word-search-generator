import React from "react";
import ReactDOM from "react-dom/client";
import './board.css';


function Letter(props) {
    const numWords = 5;
  return <div className="letter">
    {props.letter}
  </div>;
}
export default Letter;
