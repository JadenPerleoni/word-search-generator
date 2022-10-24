import React from "react";
import Letter from "./Letter";
import "./board.css";
import Word from "./Word";
import { selectedWord } from "./Letter";

import {
  letters,
  fillBlanks,
  placeWords,
  totalWords,
  wordsArr,
} from "./Helpers";

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
      <div className="word-bank">Your words are:
      <Word word = {totalWords[0]} select = {selectedWord}></Word>
      <Word word = {totalWords[1]}></Word>
      <Word word = {totalWords[2]}></Word>
      <Word word = {totalWords[3]}></Word>
      <Word word = {totalWords[4]}></Word>
      <Word word = {totalWords[5]}></Word>

      </div>
    </div>
  );
}
export default Board;
