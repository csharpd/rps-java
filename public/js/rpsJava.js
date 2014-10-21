function Rock (type) {
	this.type = 'rock';
	this.weakness = 'paper';
};

function Paper () {
	this.type = 'paper';
	this.weakness = 'scissors';
};

function Scissors () {
	this.type = 'scissors';
	this.weakness = 'rock';
};

function RpsJava () {
	RpsJava.prototype.whoWon = function(choiceOne, choiceTwo) {
		if(choiceOne.type === choiceTwo.type) return 'draw';
		if(choiceOne.weakness === choiceTwo.type) return choiceTwo.type;
		else return choiceOne.type;
	};
};