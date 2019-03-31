function quickSort(list){
	var arr = [].concat(list);
	if(arr.length < 2)return arr;

	var	middle = Math.floor(arr / 2),
		pivot = arr.splice(middle, 1)[0],
		left = [],
		right = [];

	for (var i = 0; i < arr.length; i++) {
		if(arr[i] < pivot){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	};

	return quickSort(left).concat([pivot], quickSort(right));
}