import React from "react";
import Letter from "./Letter";
import "./board.css";
import {
  letters,
  fillBlanks,
  placeWords,
  wordsArr,
} from "./Helpers";

// TODO: Clean up code by putting functions in seperate helper file.
function Board() {
  //Order of logic:
  // 1: Attempt to place words using placeWords()
  // 2: Call fillblanks() to fill the rest of the board.

  placeWords();

  fillBlanks();

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
  console.log(letters[3][2]);
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
