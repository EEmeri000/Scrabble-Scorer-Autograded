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
      userWord = input.question(`Let's play some Scrabble!
      Enter a word to score:`);
   return userWord
};

//simpleScorer : Define a function that takes a word as a parameter and returns a numerical score. Each
//letter within the word is worth 1 point

function simpleScorer(word) {
   word = word.toUpperCase();
   simpleScoreArray = word.split('');
   letterPoints = simpleScoreArray.length;
   return letterPoints;
};

//vowelBonusScorer : Define a function that takes a word as a parameter and returns a score. Each vowel
//within the word is worth 3 points, and each consonant is worth 1 point.

function vowelBonusScorer(word) {
   word = word.toUpperCase();
   vowelBonusArray = word.split('');
   letterPoints = 0
   for (let i = 0; i < vowelBonusArray.length; i++){
      if (vowelBonusArray[i] === 'A' 
      || vowelBonusArray[i] === 'E' 
      || vowelBonusArray[i] === 'I' 
      || vowelBonusArray[i] === 'O' 
      || vowelBonusArray[i] === 'U'){
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
   for (let i = 0; i < word.length; i++) {
      letterPoints += newPointStructure[word[i]]
   }
   return letterPoints;
};


//Once you’ve written these scoring functions, organize all three of the scoring options into an array. Your
//program will use the  scoringAlgorithms  array to retrieve information about the three scoring algorithms and
//convey that information to the user.
//1. Finish writing the  scoringAlgorithms  array. It should be populated with three objects, one for each of
//the three scoring options. Each object should contain three keys:  name ,  description , and 
//scoringFunction .

let simpleScorerObject = {
   name: "Simple Score",
   description: "Letters are worth 1 point.",
   scorerFunction: simpleScorer,
};

let vowelScorerObject = {
   name: "Bonus Vowel Score",
   description: "Vowels are 3 points, Consonants are 1 point.",
   scorerFunction: vowelBonusScorer
};

let scrabbleScorerObject = {
   name: "Scrabble",
   description: "The Traditional Scoring method.",
   scorerFunction: scrabbleScorer
};

const scoringAlgorithms = [simpleScorerObject, vowelScorerObject, scrabbleScorerObject,];


//3. Finish writing  scorerPrompt()  so that the user can select which scoring algorithm to use when the
//program scores their word. Use the selected algorithm to determine the score for the word:
//1. If the user enters  0 , have the program output a score using the simple scorer.
//2. If the user enters  1 , use the vowel bonus scoring function.
//3. If the user enters  2 , use the Scrabble scoring option.

//4. Call  scorerPrompt()  inside of  runProgram()  so that the program asks the user for a scoring algorithm
//after prompting for a word. Use the scoring object returned from  scorerPrompt()  to score the user’s
//word and let the user know what score their word receives.

function scorerPrompt() {
   console.log("Which Scoring method would you like to use?\n");
   for (let i = 0; i <scoringAlgorithms.length; i++){
      console.log(`${[i]}-${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`)
   }
   scorerPromptResponse = input.question("Enter 0, 1, or 2:");
   scorerPromptResponse = Number(scorerPromptResponse)
   console.log(`The Score for "${userWord}":
   ${scoringAlgorithms[scorerPromptResponse].scorerFunction(userWord)}`)
};


function transform(pointStructure) {
   let newPointSystem = {};
   for (key in pointStructure) {
      for(let i = 0; i < pointStructure[key].length; i++){
         let letterItself = pointStructure[key][i];
         letterItself = letterItself.toLowerCase();
         newPointSystem[`${letterItself}`] = Number(key);
      };
   };
   return newPointSystem;
};

let newPointStructure = transform(oldPointStructure);
newPointStructure [" "] = 0


function runProgram() {
   initialPrompt();
   scorerPrompt();
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
