function isFromLimpopo(regnum){
  var fromLimpopo = regnum.endsWith("L");
return fromLimpopo
};

var result = isFromLimpopo("DWW222L");

console.log(result);

describe('The Limpopo registration number check', function(){

    it('should find that this plate is from Limpopo', function(){
        assert.equal('true', isFromLimpopo('WSP212L'));
    });
    it('should find that this plate is not from Limpopo', function(){
        assert.equal('false', isFrom('FGH212GP'));
    });
});
