function heapSort(list){
	var arr = [].concat(list),
		temp,
		len =  arr.length;
	for (var i = Math.floor(len / 2) - 1; i >= 0; i--) {
		heapify(arr, i, len);
	};
	for (var j = len - 1; j >= 0; j--) {
		temp = arr[0];
		arr[0] = arr[j];
		arr[j] = temp;
		heapify(arr, 0, --len);
	};
	return arr;
}

function heapify(arr, x, len){
	var l = 2 * x + 1,
		r = 2 * x + 2,
		largest = x,
		temp;
	if(l < len && arr[l] > arr[largest]){
		largest = l;
	}
	if(r < len && arr[r] > arr[largest]){
		largest = r;
	}
	if(largest != x){
		temp = arr[x];
		arr[x] = arr[largest];
		arr[largest] = temp;
		heapify(arr, largest, len);
	}
}