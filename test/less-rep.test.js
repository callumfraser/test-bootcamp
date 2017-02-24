describe('The registration number check', function(){

    it('should find that this plate matches its location code', function(){
        assert.equal('true', isFrom('CA343546', 'CA'));
    });
    it('should find that this plate does not match its location', function(){
        assert.equal('false', isFrom('KLJ675L', 'CY'));
    });
});
