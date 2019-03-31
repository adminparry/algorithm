function mergeSort(arr){
	if(arr.length < 2){
		return arr;
	}
	var middle = Math.floor(arr.length / 2),
		left = arr.slice(0, middle),
		right = arr.slice(middle);

	return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right){
	var ret = [];
	while(left.length && right.length){
		if(left[0] < right[0]){
			ret.push(left.shift());
		}else{
			ret.push(right.shift());
		}
	}
	while(left.length){
		ret.push(left.shift());
	}
	while(right.length){
		ret.push(right.shift());
	}

	return ret;
}