function ClozeFlashcard(text, cloze, err){
	this.fullText = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');

	this.clozeCards = function(){
		
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
		} else {
			console.log("Error!! This is not a valid flashcard!");
		}
	}

	if (text.includes(cloze)){
		return;
	} else {
		console.log("Error!! This is not a valid flashcard!");
	}
}

module.exports = ClozeFlashcard;
