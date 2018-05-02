// shiftby ===================================

Array.prototype.shiftBy = function (movements){
  movements = movements % this.length;
  if (movements < 0){
    movements = movements + this.length;
  }
  var spliced = this.length-movements;

  var back = this.slice(spliced);
  var front  = this.slice(0, spliced)
  var altArray = back.concat(front);

  return altArray;
}
