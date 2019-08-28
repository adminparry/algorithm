# 数组去重

## 循环去重1

``` javascript
function unique(arr){
    for(var i = 0;i < arr.length;i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                arr.splice(i, 1)
            }
        }
    }
    return arr;
}
var ret = unique([1,3,3,4,5,6,7,87]);

console.log(ret)
```

## 循环去重2

``` javascript
Array.prototype.distinct = function(){
    var arr = this;
    var ret = [];
    var i,j,len = arr.length;
    for(i = 0;i < len; i++){
        for(j = i + 1; j < len; j++){
            if(arr[i] == arr[j]){
                j = ++i;
            }
        }
        ret.push(arr[i])
    }
    return ret;
}
```

## 对象键去重

``` javascript
Array.prototype.distinct = function(){
    var arr = this;
    var ret = [];
    var json = {};
    for(var i = 0; i < arr.length; i++){
        if(!Object.hasOwnProperty.call(json, arr[i])){
            json[arr[i]] = 1;
            ret.push(arr[i]);
        }
    }
    return ret;
}
```

## set不重复去重

``` javascript
Array.prototype.distinct = function(){
    var arr = this;
    // return [...new Set(arr)]
    return Array.from(new Set(arr));
}
```
## indexOf

``` javascript
Array.prototype.distinct = function(){
    var arr = this;
    var ret = [];

    arr.forEach((item, index) => {
        var bool = arr.indexOf(item, index + 1);
        if(bool === -1){
            ret.push(item)
        }
    })

    return ret;
}
```