import React from "react";
import Letter from "./Letter";
import "./board.css";
import Word from "./Word";
import { useState } from "react";

import {
  letters,
  fillBlanks,
  placeWords,
  totalWords,
  wordsArr,
} from "./Helpers";

let wordFound = "";
function Board() {
  const [isFound, setIsFound] = useState(false);

  //Order of logic:
  // 1: Attempt to place words using placeWords()
  // 2: Call fillblanks() to fill the rest of the board.

  placeWords();

  fillBlanks();

  const handleClick = (e) => {
    setIsFound((current) => !current);
    wordFound += e.target.innerText.toLowerCase();
  };

  // Map the entire word search board to totalLetters and create a Letter
  // component for each character.
  // const totalLetters = letters.map((item, index) =>

  //   item.map((subItems, sIndex) => (
  //     <Letter key={sIndex} letter={subItems} onClick={handleClick()} ></Letter>
  //   ))
  // );
  return (
    <div>
      <h2>Click the letters!</h2>
      <div className="board">
        <div className="rectangle">
          <table>
            <tbody onClick={handleClick}>
              {letters.map((items, index) => {
                return (
                  <tr key={index}>
                    {items.map((subItems, sIndex) => {
                      return <Letter key={sIndex} letter={subItems}></Letter>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="word-bank">
        Your words are:
        {/* <h1
          style={{
            textDecoration:
              wordFound === wordsArr[0]
                ? "line-through"
                : console.log(wordFound),
          }}
        >
          {wordsArr[0]}{" "}
        </h1> */}
        <Word word={wordsArr[0]} style = {wordFound === wordsArr[0]
                ? "line-through"
                : console.log(wordFound)}></Word>
      </div>
    </div>
  );
}
export default Board;
