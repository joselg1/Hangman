var fruitsList = ['banana','apple', 'berry'];
var chosenWord = '';

var lettersInChosenWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuesses = '';


var winCounter = 0;
var lossCounter = 0;
var numGuesses = 0;










function startGame() {

	numGuesses = 9;

	chosenWord = fruitsList[ Math.floor() Math.random() * fruitsList.length];

	lettersInChosenWord = chosenWord.split('');

	numBlanks = lettersInChosenWord.length;

	console.log(chosenWord);

	

}