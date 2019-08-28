# 快速排序

``` javascript
Array.prototype.quickSort = function(){
    var arr = this;
    if(arr.length < 2){
        return arr;
    }
    var midIndex = ~~ ( arr.length / 2 );
    var midVal = arr.splice(midIndex, 1)[0];
    var left = [], right = [];
    for(var i = 0; i < arr.length; i++){
        const item = arr[i];
        if(item > midVal){
            right.push(item);
        }else{
            left.push(item);
        }
    } 
    return left.quickSort().concat([midVal], right.quickSort())
}
```