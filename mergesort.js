function split(wholeArray) {
	if (wholeArray.length <= 1) {
	return [wholeArray];
	} else {
		var cutoff = Math.floor(wholeArray.length / 2);
		var firstHalf = wholeArray.slice(0,cutoff);
		var secondHalf = wholeArray.slice(cutoff);

	  return [firstHalf, secondHalf];
	}
}

function merge(arr1, arr2) {
	var masterArray = [];
		if (!arr1.length) {
			masterArray = masterArray.concat(arr2);
			return masterArray;
		}
		if (!arr2.length) {
			masterArray = masterArray.concat(arr1);
			return masterArray;
		}
		if (arr1[0] < arr2[0]) {
			masterArray.unshift(arr1[0])
			arr1.shift();
		} else {
			masterArray.unshift(arr2[0])
			arr2.shift();
		}
	return masterArray.concat(merge(arr1, arr2));
}


function mergeSort(array) {
	console.log(array);
	if (array.length <= 1) {
		return array;
	} else {
		var splitArr = split(array);
		return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
	}
}
