function isFromBellville(regnumber){

  var fromBellville = regnumber.startsWith('CY');
  return fromBellville;
}

isFromBellville('CY423423')
