var cards = ["queen", "queen","king","king"];
var cardId = [0,1,2,3];
var cardsInPlay = [];
var checkForMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You've found a match!");
	}	else {
		console.log("Sorry, try again.");
	}
};
var flipCard = function(cardId) {
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
if (cardsInPlay.length === 2) 
	if  (cardsInPlay[0] === cardsInPlay[1]) {
alert("You've found a match!");
}
else  { 
	alert("Sorry, try again.");
}
}
flipCard(0);
flipCard(2);


