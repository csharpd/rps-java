var game = new RpsJava
var computer = function() {
	var gestures = [new Rock, new Scissors, new Paper];
	return gestures[Math.floor(Math.random()* gestures.length)];
}

var andTheWinnerIs = function(winner){
	if(winner === 'draw')
		$('h2').text("Darn, it's a "+ winner);
	else
		$('h2').text("The winner is " + winner);
};

$('img').on('click',function(){
	andTheWinnerIs(game.whoWon(new Rock, computer()))
});
