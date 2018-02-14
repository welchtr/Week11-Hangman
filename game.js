var exports = module.exports = {};
//Random word is selected and exported
var wordBank = ["Mulan", "Cinderella", "Jasmine", "Snow White", "Rapunzel", "Belle", "Pocohontas", "Tiana", "Ariel"];

module.exports.getRandomWord = function () {
	var index = parseInt(Math.random() * (wordBank.length));
	return wordBank[index];
}
