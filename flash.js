// Fulling in data from the cloze.js file in order to create cloze flashcards.
var ClozeFlashcard = require("./cloze.js");

// Constructor for creating a basic flashcard.
function BasicFlashcard(front, back){

// Conditional that will allow users to create new flashcards without the use of "new" before the constructor name. 
	if (this instanceof BasicFlashcard) {
		this.front = front;
		this.back = back;

	// Appends the front and back of the flashcard to the practice.txt file if needed.
		this.practiceCards = function(){

			var fs = require('fs');

			fs.appendFile("practice.txt", 
				"\nBasic Flashcard: " + 
				"\nQuestion: " + front + 
				"\nAnswer:" + back,

			function(err) {
				if (err) {
					console.log(err);
				}	
				console.log("Done!");
			});
		}
	} else {
		return new BasicFlashcard(front, back);
	}
}

// Tests for basic flashcards.
var question1 = BasicFlashcard("David Lynch is the creator of the Twin Peaks series.", "David Lynch");
var question2 = new BasicFlashcard("Dale is Agent Cooper's first name.", "Dale");
var question3 = new BasicFlashcard("Donna Hayward is Laura Palmer's best friend.", "Donna Hayward");
var question4 = new BasicFlashcard("James Hurley is Laura Palmer's secret boyfriend.", "James Hurley");

// Tests for new cloze flash cards.
var clozeFlashcard1 = ClozeFlashcard(" is the creator of the Twin Peaks series.", "David Lynch");
var clozeFlashcard2 = new ClozeFlashcard("Dale is Agent Cooper's first name.", "Dale");
var clozeFlashcard3 = new ClozeFlashcard("Donna Hayward is Laura Palmer's best friend.", "Donna Hayward");
var clozeFlashcard4 = new ClozeFlashcard("James Hurley is Laura Palmer's secret boyfriend.", "James Hurley");

// Logging front and back of one flashcard.
console.log("********************************");
console.log("Basic Flashcard Example:"); 
console.log("Front: " + question1.front);
console.log("Back: " + question1.back);

// Logging the front and back of a cloze flashcard.
console.log("********************************");
console.log("Cloze Flashcard Example:"); 
console.log("Partial: " + clozeFlashcard1.partial);
console.log("Cloze: " + clozeFlashcard1.cloze);

