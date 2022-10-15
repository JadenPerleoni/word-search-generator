import React from "react";
import Letter from "./Letter";
import "./board.css";
import "./data/words_dictionary.json";
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

  while (k < NUM_WORDS) {
    let randomX = Math.floor(Math.random() * NUM_ROWS);
    let randomY = Math.floor(Math.random() * NUM_COLS);

    if (randomX >= NUM_ROWS / 2) {
      // Writing word backwards
      for (let i = 0; i <= wordsArr[k].length; i++) {
        letters[randomX][randomY] = wordsArr[k].charAt(i);
        randomX--;
      }
    } else {
      // Write logic for forwards here
    }



    k++;
  }
  console.log(wordsArr);
  console.log(letters);
  /*
    Logic:
    while WORDS PLACED < NUM_WORDS {
        random
    }
  */

  return (
    <div className="board">
      <div className="rectangle">
        <Letter letter={wordsArr[1]}></Letter>
      </div>
    </div>
  );
}
export default Board;
