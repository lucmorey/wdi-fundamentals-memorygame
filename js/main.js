var cards = ["queen", "queen","king","king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push(cards[0]);
console.log("user flipped " + cards[0]);
cardsInPlay.push(cards[2]);
console.log("user flipped " + cards[2]);

if (cardsInPlay.length === 2) 
	if  (cardsInPlay[0] === cardsInPlay[1]) {
alert("You've found a match!");
}

else  { 
	alert("Sorry, try again.");
}

