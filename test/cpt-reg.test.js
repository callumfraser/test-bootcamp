describe('The Cape Town registration number check', function(){

    it('should find that this plate is from Cape Town', function(){
        assert.equal('true', isFromCapeTown('CA433234'));
    });
    it('should find that this plate is not from Cape Town', function(){
        // this test will fail - can you fix it?
        assert.equal('false', isFromCapeTown('CY433221'));
    });
});
