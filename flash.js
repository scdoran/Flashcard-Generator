var ClozeFlashcard = require("./cloze.js");

function BasicFlashcard(front, back){
	this.front = front;
	this.back = back;

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
}
// Tests for basic flashcards.
var question1 = new BasicFlashcard("David Lynch is the creator of the Twin Peaks series.", "David Lynch");
var question2 = new BasicFlashcard("Dale is Agent Cooper's first name.", "Dale");
var question3 = new BasicFlashcard("Donna Hayward is Laura Palmer's best friend.", "Donna Hayward");
var question4 = new BasicFlashcard("James Hurley is Laura Palmer's secret boyfriend.", "James Hurley");

// question1.practiceCards();
// question2.practiceCards();
// question3.practiceCards();
// question4.practiceCards();

// Tests for new cloze flash cards.
var clozeFlashcard1 = new ClozeFlashcard("David Lynch is the creator of the Twin Peaks series.", "David Lynch");
var clozeFlashcard2 = new ClozeFlashcard("Dale is Agent Cooper's first name.", "Dale");
var clozeFlashcard3 = new ClozeFlashcard("Donna Hayward is Laura Palmer's best friend.", "Donna Hayward");
var clozeFlashcard4 = new ClozeFlashcard("James Hurley is Laura Palmer's secret boyfriend.", "James Hurley");

console.log(clozeFlashcard1.partial);

