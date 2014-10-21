describe('rpsJava',function(){
	beforeEach(function(){
		rock = new Rock;
		paper = new Paper;
		scissors = new Scissors;
	});
	describe('has the following types',function(){
		it('rock',function(){
			expect(rock.type).toEqual('rock');
		});
		it('scissors',function(){
			expect(scissors.type).toEqual('scissors');
		});
		it('paper',function(){
			expect(paper.type).toEqual('paper');
		});
	});
	describe('the rules are set up so that',function(){
		beforeEach(function(){
				rpsJava = new RpsJava
		});
		it('rock vs rock returns a draw',function(){
			expect(rpsJava.whoWon(rock,rock)).toEqual('draw')
		});
		it('rock vs scissors returns rock',function(){
			expect(rpsJava.whoWon(rock,scissors)).toEqual('rock')
		});
			it('rock vs paper returns paper',function(){
			expect(rpsJava.whoWon(rock,paper)).toEqual('paper')
		});
			it('scissors vs paper returns paper',function(){
			expect(rpsJava.whoWon(scissors,paper)).toEqual('scissors')
		});
	});
});