function isFrom (regNum, locationCode){

  const evalProcess = regNum.startsWith(locationCode)
  console.log(evalProcess)
  return evalProcess
}

isFrom("CJ4234", "CJ");
