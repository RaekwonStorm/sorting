var bubbleSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    var lowerValue;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        lowerValue = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = lowerValue;
      }
    }
  }
  return arr;
}
