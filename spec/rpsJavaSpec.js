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
});