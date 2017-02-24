function isFromLimpopo(regnum){
  var fromLimpopo = regnum.endsWith("L");
return fromLimpopo
};

var result = isFromLimpopo("DWW222L");

console.log(result);
