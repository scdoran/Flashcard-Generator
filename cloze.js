function ClozeFlashcard(text, cloze){

// Conditional that will allow users to create new flashcards without the use of "new" before the constructor name. 
	if (this instanceof ClozeFlashcard) {
		this.fullText = text;
		this.cloze = cloze;
		this.partial = text.replace(cloze, '...');
 
 // Appends the cloze flashcards to a document.
		this.clozeCards = function(){
		
		// IF the cloze word is in the full text... 
			if (text.includes(cloze)){

				var fs = require('fs');

				fs.appendFile("practice.txt", 
					"\nCloze Flashcard: " + 
					"\nQuestion: " + this.partial + 
					"\nAnswer:" + cloze,

				function(err) {
					if (err) {
						console.log(err);
					}	
					console.log("Done!");
				});
			// If the cloze word is NOT in the text it will return an error in the document.
			} else {
				console.log("Error!! This is not a valid flashcard!");
			}
		}
	} else {
		return new ClozeFlashcard(text, cloze);
	}

	// Same conditional from above is specified so the user also sees that their submission was not valid.
	if (!text.includes(cloze)) console.log("Error!! The full text does not include the cloze text!");
}

module.exports = ClozeFlashcard;
