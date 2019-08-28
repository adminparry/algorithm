# 归并排序

``` javascript
Array.prototype.mergeSort = function(){
    var arr = this;
    var len = arr.length;
    if(len < 2){
        return arr;
    }
    var middle = ~~(len / 2);
    var left = arr.slice(0, middle).mergeSort();
    var right = arr.slice(middle).mergeSort();
    // return merge(left.mergeSort(), right.mergeSort());

    // function merge(left, right){
        var ret = [];
        while(left.length && right.length){
            if(left[0] <= right[0]){
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
    // }
}
```