function regCheck(licPlate, location){
  var check = licPlate.endsWith(location)
  return check
};

regCheck("DV 22 FF GP", "GP");
regCheck("dwdw L", "L");
regCheck("CA 688990", "L");
