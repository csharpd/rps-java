function Rock (type) {
	this.type = 'rock';
};

function Paper () {
	this.type = 'paper';
};

function Scissors () {
	this.type = 'scissors';
};

function RpsJava () {
	RpsJava.prototype.outcome = function(choiceOne, choiceTwo) {
		return "draw"
	};
};