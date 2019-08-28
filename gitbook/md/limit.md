# 无穷调用

``` javascript
function add(num){
	var s = num;

	function temp(n){
		s += n;
		return temp;
	}
	temp.toString = function(){
		return s;
	}

	return temp;
}

add(1)(2)(3);

//6
```