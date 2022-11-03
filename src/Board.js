import React from "react";
import Letter from "./Letter";
import "./board.css";
import Word from "./Word";
import { useState } from "react";

import { letters, fillBlanks, placeWords, wordsArr } from "./Helpers";

let wordOneFound,
  wordTwoFound,
  wordThreeFound,
  wordFourFound,
  wordFiveFound,
  gameWon = false;

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

    switch (wordFound) {
      case wordsArr[0]:
        wordOneFound = true;
        wordFound = "";
        break;
      case wordsArr[1]:
        wordTwoFound = true;
        wordFound = "";
        break;
      case wordsArr[2]:
        wordThreeFound = true;
        wordFound = "";
        break;
      case wordsArr[3]:
        wordFourFound = true;
        wordFound = "";
        break;
      case wordsArr[4]:
        wordFiveFound = true;
        wordFound = "";
        break;
      default:
        break;
    }

    if (
      wordOneFound &&
      wordTwoFound &&
      wordThreeFound &&
      wordFourFound &&
      wordFiveFound
    ) {
      gameWon = true;
    }
  };

  return (
    <div>

      <h2 style={{display: gameWon ? 'none' : ''}}>Click the letters!</h2>
      <h2 style={{display: gameWon ? '' : 'none'}}>You won!</h2>

      <div className="board">
        <div className="rectangle">
          <table>
            <tbody onClick={handleClick}>
              {letters.map((items, index) => {
                // Map the entire word search board to totalLetters and create a Letter
                // component for each character.
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
        <Word
          word={wordsArr[0]}
          style={wordOneFound ? "line-through" : console.log(wordFound)}
        ></Word>
        <Word
          word={wordsArr[1]}
          style={wordTwoFound ? "line-through" : console.log(wordFound)}
        ></Word>
        <Word
          word={wordsArr[2]}
          style={wordThreeFound ? "line-through" : console.log(wordFound)}
        ></Word>
        <Word
          word={wordsArr[3]}
          style={wordFourFound ? "line-through" : console.log(wordFound)}
        ></Word>
        <Word
          word={wordsArr[4]}
          style={wordFiveFound ? "line-through" : console.log(wordFound)}
        ></Word>
      </div>
    </div>
  );
}
export default Board;
