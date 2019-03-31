function insertSort(list){
	var arr = [].concat(list),space = 1,minTemp;

	for (var i = space; i < arr.length; i++) {
		if(arr[i] < arr[i - space]){
			minTemp = arr[i];//后一个值

			var jIndex = i - space;//前一个索引

			arr[i] = arr[jIndex];

			while(jIndex >= 0 && minTemp < arr[jIndex]){
				arr[jIndex + space] = arr[jIndex];
				jIndex--;
			}

			// arr[jIndex + space] = minTemp;
		}
	};

	return arr;
}