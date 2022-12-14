var randomWords = require("random-words");

// Declaring constant variables
const NUM_WORDS = 5;
const NUM_ROWS = 10;
const NUM_COLS = 10;
const NUM_DIRECTIONS = 2;
let k = 0;

// Array holds all letters of alphabet.
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

// Holds all the letters in the word search.
export let letters = [
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

export const checkForOverWrite = (yNum, xNum, direction) => {
  switch (direction) {
    case 0:
      for (let i = 0; i < NUM_ROWS; i++) {
        if (letters[yNum][i] !== "") {
          return true;
        }
      }
      break;
    case 1:
      for (let i = 0; i < NUM_COLS; i++) {
        if (letters[i][xNum] !== "") {
          return true;
        }
      }
      break;
    default:
      break;
  }
};

// Selects five random words that are 5 characters long, and stores them in
// wordsArr.
export const wordsArr = randomWords({ exactly: NUM_WORDS, maxLength: 6 });

// Fill the rest of the board with random letters"
export const fillBlanks = () => {
  for (let x = 0; x < NUM_ROWS; x++) {
    for (let y = 0; y < NUM_COLS; y++) {
      let rnd = Math.floor(Math.random() * alphabetArr.length);

      if (letters[x][y] === "") {
        letters[x][y] = alphabetArr[rnd];
      }
    }
  }
};

// Places the letters of the random words at random locations on the board.
export const placeWords = () => {
  while (k < NUM_WORDS) {
    let randomX = Math.floor(Math.random() * NUM_ROWS);
    let randomY = Math.floor(Math.random() * NUM_COLS);
    let length = wordsArr[k].length;

    // Picks a random number between 0 and 1.
    let randomDir = Math.floor(Math.random() * NUM_DIRECTIONS);

    // Checks if the random number picked a value that will cause a word to
    // be overwritten. If it will be, it will continue.
    if (checkForOverWrite(randomY, randomX, randomDir)) {
      continue;
    }

    // Switch statement that picks the direction based on randomDir
    // 0 = horizontal, 1 = vertical.

    switch (randomDir) {
      case 0:
        if (randomX >= NUM_ROWS / 2) {
          // Writing word backwards
          for (let i = 0; i <= length; i++) {
            letters[randomY][randomX] = wordsArr[k].charAt(i).toUpperCase();
            randomX--;
          }
        } else {
          // Write word forwards
          for (let i = 0; i <= length; i++) {
            letters[randomY][randomX] = wordsArr[k].charAt(i).toUpperCase();
            randomX++;
          }
        }
        break;
      case 1:
        // Write word upside down
        if (randomY >= NUM_COLS / 2) {
          for (let i = 0; i <= length; i++) {
            letters[randomY][randomX] = wordsArr[k].charAt(i).toUpperCase();
            randomY--;
          }
        } else {
          // Write word downwards
          for (let i = 0; i <= wordsArr[k].length; i++) {
            letters[randomY][randomX] = wordsArr[k].charAt(i).toUpperCase();
            randomY++;
          }
        }
        break;
      default:
        break;
    }

    k++;
  }
};
// Map the total words the user is searching for.
export let totalWords = wordsArr.map((item, index) => (
  <ul key={index}>{item}</ul>
));
