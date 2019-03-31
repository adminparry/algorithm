function selectionSort(list){
	var minIndex,temp,space = 1,arr = [].concat(list);

	for (var i = 0; i < arr.length - space; i++) {
		minIndex = i;

		for (var j = i + 1; j < arr.length; j++) {
			if(arr[j] < arr[minIndex]){
				minIndex = j;
			}
		};

		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	};


	return arr;
}