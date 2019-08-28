# 标准排序

``` javascript
Array.prototype.normalSort = function(){
    var arr = this;
    var i,j,len = arr.length;
    if(len < 2){
        return arr;
    }
    for(i = 0;i < len; i++){
        for(j = i + 1; j < len; j++){
            if(arr[i] > arr[j]){
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}
```