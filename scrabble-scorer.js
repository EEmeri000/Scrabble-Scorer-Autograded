// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

let userWord = '';
function initialPrompt() {
   console.log("Let's play some scrabble!\n") 
      userWord = input.question('Enter a word to score:');{
   console.log(`${oldScrabbleScorer(userWord)}`);
   }
};

//simpleScorer : Define a function that takes a word as a parameter and returns a numerical score. Each
//letter within the word is worth 1 point

function simpleScorer(word) {
   word = word.toUpperCase();
   simpleScoreArray = word.split('');
   letterPoints = simpleScoreArray.length
   return letterPoints
};

//vowelBonusScorer : Define a function that takes a word as a parameter and returns a score. Each vowel
//within the word is worth 3 points, and each consonant is worth 1 point.

function vowelBonusScorer(word) {
   word = word.toUpperCase();
   vowelBonusArray = word.split('');
   letterPoints = 0
   for (let i = 0; i < vowelBonusArray.lebnth; i++){
      if (vowelBonusArray[i] === 'A' || 'E' || 'I' || 'O' || 'U'){
         letterPoints +=3
      } else {
         letterPoints +=1
      }
   }
   return letterPoints
};

function scrabbleScorer(word) {
   word = word.toLowerCase()
   letterPoints = 0
   for (let i = 0; i < word.length; i++){
      
   }

};


//Once you’ve written these scoring functions, organize all three of the scoring options into an array. Your
//program will use the  scoringAlgorithms  array to retrieve information about the three scoring algorithms and
//convey that information to the user.
//1. Finish writing the  scoringAlgorithms  array. It should be populated with three objects, one for each of
//the three scoring options. Each object should contain three keys:  name ,  description , and 
//scoringFunction .

const scoringAlgorithms = [];



function scorerPrompt() {}

function transform() {};

let newPointStructure;


function runProgram() {
   initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
