describe('rpsJava',function(){
	describe('has the following types',function(){
		it('rock',function(){
			rock = new Rock
			expect(rock.type).toEqual('rock');
		});
	});
});