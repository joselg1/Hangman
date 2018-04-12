// Array of word options
var fruitsList = ["banana", "apple", "blueberry", "orange", "pineapple", "grape", "avocado", "blackberry", "mango", "watermelon"];

// computer solution here
var chosenWord = '';

// breaks the solution into letters
var lettersInChosenWord= [];

// number of blank spaces
var numBlanks = 0;

// holds a mix of blank and solved letters
var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuessed = '';

//game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

function startGame() {

// resets the guesses back to 0
numGuesses = 9; chosenWord = fruitsList[Math.floor(Math.random() * fruitsList.length)]; lettersInChosenWord = chosenWord.split("");
 numBlanks = lettersInChosenWord.length; console.log(chosenWord); blanksAndSuccesses = []; wrongGuesses = [];
  for (var i = 0; i < numBlanks; i++) { blanksAndSuccesses.push("_"); } console.log(blanksAndSuccesses);
   document.getElementById("guesses-left").innerHTML = numGuesses; document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {
var letterInWord = false;

for (var i = 0; i < numBlanks; i++) { if (chosenWord[i] === letter) { letterInWord = true;
 } } if (letterInWord) { for (var j = 0; j < numBlanks; j++) { if (chosenWord[j] === letter) { blanksAndSuccesses[j] = letter; } } console.log(blanksAndSuccesses);
  } else { wrongGuesses.push(letter); numGuesses--; }
}

function roundComplete() {
console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter +
" | NumGuesses: " + numGuesses);

document.getElementById("guesses-left").innerHTML = numGuesses; document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
 document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" "); if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) { winCounter++;
  alert("You win!"); document.getElementById("win-counter").innerHTML = winCounter; startGame(); } else if (numGuesses === 0) { lossCounter++; alert("You lose");
   document.getElementById("loss-counter").innerHTML = lossCounter; startGame(); }
}

startGame();

document.onkeyup = function(event) {
var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
checkLetters(letterGuessed);
roundComplete();
};