function isFromGauteng(regnum){
  var fromGauteng = regnum.endsWith("GP");
  return fromGauteng
};

var result = isFromGauteng("HLK433GP");

console.log(result)
