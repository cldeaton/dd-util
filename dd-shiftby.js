// shiftby ===================================

Array.prototype.shiftBy = function (movements){
  movements = movements % this.length;

  var length = this.length-1;
  var spliced = this.length-movements;
  var negSplice = Math.abs(movements);

  if (negSplice > length){
    negSplice = negStart + movements;
  }

  if(movements < 0){
    front = this.slice(0, negSplice);
    back = this.slice(negSplice, this.length);
    var altArray = back.concat(front);
  } else {
    var back = this.slice(spliced);
    var front  = this.slice(0, spliced)
    var altArray = back.concat(front);
  }
  return altArray;
}
