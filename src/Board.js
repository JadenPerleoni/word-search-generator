import React from "react";
import Letter from "./Letter";
import "./board.css";
var randomWords = require("random-words");

function Board() {
  const NUM_WORDS = 5;
  const NUM_ROWS = 10;
  const NUM_COLS = 10;
  const NUM_DIRECTIONS = 4;
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


  // Check for vertical ow's.
  const checkForOverWrite = (yNum,xNum,direction) => {
    
    for (let i = 0; i < NUM_ROWS; i++) {
      if (letters[yNum][i] !== "") {
        return true;
      }
    }
  };

  const checkForError = (yNum,xNum,direction) => {

  }

  // Places the letters of the random words at random locations on the board.
  while (k < NUM_WORDS) {
    // TODO: Write words vertically.
    let randomX = Math.floor(Math.random() * NUM_ROWS);
    let randomY = Math.floor(Math.random() * NUM_COLS);

    // Picks a number between 0 and 3. 
    let randomDir = Math.floor(Math.random() * NUM_DIRECTIONS);

    // Checks if the random number picked a value that will cause a word to
    // be overwritten. If it will be, it will continue.
    if (checkForOverWrite(randomY)) {
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

  // Fill the rest of the board with random letters"
  for (let x = 0; x < NUM_ROWS; x++) {
    for (let y = 0; y < NUM_COLS; y++) {
      let rnd = Math.floor(Math.random() * alphabetArr.length);

      if (letters[x][y] === "") {
        letters[x][y] = alphabetArr[rnd];
      }
    }
  }

  // Map the entire word search board to totalLetters and create a Letter
  // component for each character.
  const totalLetters = letters.map((item, index) =>
    item.map((subItems, sIndex) => (
      <Letter key={sIndex} letter={subItems}></Letter>
    ))
  );

  // Map the total words the user is searching for.
  const totalWords = wordsArr.map((item, index) => <ul key={index}>{item}</ul>);

  console.log(letters);
  console.log(letters[3][2])
  return (
    <div>
      <h2>Click the letters!</h2>
      <div className="board">
        <div className="rectangle">
          <table>
            <tbody>
              <tr>{totalLetters[0]}</tr>
              <tr>{totalLetters[1]}</tr>
              <tr>{totalLetters[2]}</tr>
              <tr>{totalLetters[3]}</tr>
              <tr>{totalLetters[4]}</tr>
              <tr>{totalLetters[5]}</tr>
              <tr>{totalLetters[6]}</tr>
              <tr>{totalLetters[7]}</tr>
              <tr>{totalLetters[8]}</tr>
              <tr>{totalLetters[9]}</tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="word-bank">Your words are: {totalWords}</div>
    </div>
  );
}
export default Board;
