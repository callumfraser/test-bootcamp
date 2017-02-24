describe('The registration number check', function(){

    it('should recognise that this is a Limpopo plate', function(){
        assert.equal('true', regCheck('DW123L', 'L'));
    });
    it('should recognise that this number plate is not from Gauteng', function(){
        // this test will fail - can you fix it?
        assert.equal('false', regCheck('KPW232L', 'GP'));
    });
});
