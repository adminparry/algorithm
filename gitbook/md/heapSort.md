# 堆排序

``` javascript
Array.prototype.heapSort = function(){
    var arr = this;
    var len = arr.length;
    if(len < 2){
        return arr;
    }
    function heapify(arr, i){
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        largest = i;
        if(left < len && arr[left] > arr[largest]){
            largest = left;
        }
        if(right < len && arr[right] > arr[largest]){
            largest = right;
        }
        if(largest !== i){
            swap(arr, i, largest);
            heapify(arr, largest);
        }
    }
    function swap(arr, i, j){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    function buildMaxHeap(arr){
        for(var i = Math.floor(len /2); i >= 0; i--){
            heapify(arr,i);
        }
    }
    
    buildMaxHeap(arr);
    for(var i = arr.length - 1; i > 0; i--){
        swap(arr, 0, i);
        len--;
        heapify(arr, 0);

    }
    return arr;
}
```
