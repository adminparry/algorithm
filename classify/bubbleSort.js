function bubbleSort(list){
	var temp,space = 1,arr = [].concat(list);

	for (var i = 0; i < arr.length - space; i++) {
		for (var j = 0; j < arr.length - i - space; j++) {
			if(arr[j] > arr[j + 1]){
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;

			}
		};
	};

	return arr;
}

