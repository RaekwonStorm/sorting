var bubbleSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    var lowerValue;
    var amtToGo = arr.length-1;
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = 0; j < amtToGo; j++) {
        if (arr[j] > arr[j+1]) {
          lowerValue = arr[j+1];
          arr[j+1] = arr[j];
          arr[j] = lowerValue;
        }
      }
      amtToGo--;
    }
  }
  return arr;
}
