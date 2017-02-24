describe('The greet function', function(){

    it('should greet Stanley correctly', function(){
        assert.equal('Hello, Stanley', greet('Stanley'));
    });
    it('should greet Siphokazi correctly', function(){
        assert.equal('Hello, Siphokazi', greet('Siphokazi'));
    });
});
