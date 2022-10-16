import React from "react";
import Letter from "./Letter";
import "./board.css";
var randomWords = require("random-words");

function Board() {
  const NUM_WORDS = 5;
  const NUM_ROWS = 10;
  const NUM_COLS = 10;
  let k = 0;

  const alphabetArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let letters = [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ];

  const wordsArr = randomWords({ exactly: NUM_WORDS, maxLength: 5 });

  const checkForOverWrite = (yNum) => {
    for (let i = 0; i < NUM_ROWS; i++) {
      if (letters[yNum][i] !== "") {
        return true;
      }
    }
  };

  // Places the letters of the random words at random locations on the board.
  while (k < NUM_WORDS) {
    let randomX = Math.floor(Math.random() * NUM_ROWS);
    let randomY = Math.floor(Math.random() * NUM_COLS);

    if (checkForOverWrite(randomY)) {
      console.log("working");
      continue;
    }
    if (randomX >= NUM_ROWS / 2) {
      // Writing word backwards
      for (let i = 0; i <= wordsArr[k].length; i++) {
        letters[randomY][randomX] = wordsArr[k].charAt(i).toUpperCase();
        randomX--;
      }
    } else {
      // Write word forwards
      for (let i = 0; i <= wordsArr[k].length; i++) {
        letters[randomY][randomX] = wordsArr[k].charAt(i).toUpperCase();
        randomX++;
      }
    }
    k++;
  }
  // End placement**********

  // Fill the rest of the board with random letters"

  for (let x = 0; x < NUM_ROWS; x++) {
    for (let y = 0; y < NUM_COLS; y++) {
      let rnd = Math.floor(Math.random() * alphabetArr.length);

      if (letters[x][y] === "") {
        letters[x][y] = alphabetArr[rnd];
      }
    }
  }

  
  // letters.map((items, index) => {
  //   items.map((subItems, sIndex) => {

  console.log(letters);
  return (
    <div className="board">
      <div className="rectangle">
        {/* <div className = "grid-container">
          {letters.map((items, index) => {
            return (
              <div key = {index} className = "grid-item">
                {items.map((subItems, sIndex) => {
                  return <Letter key = {sIndex} letter = {subItems}></Letter>
                })}
              </div>
            );
          })}
        </div> */}
        <Letter letter = {letters}></Letter>
      </div>
    </div>
  );
}
export default Board;
