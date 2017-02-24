describe('The Bellville registration number check', function(){

    it('should find that this plate is from Bellville', function(){
        assert.equal('true', isFrom('CY323886'));
    });
    it('should find that this plate is not from Bellville', function(){
        assert.equal('false', isFrom('CA765989'));
    });
});
