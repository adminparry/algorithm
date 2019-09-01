# 无穷调用

js中的取值方式为toString或者是valueOf

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