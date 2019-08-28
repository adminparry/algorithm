# 排列组合

``` javascript
function aaa(arr,num){
	var r = [];
	(function f(t,a,n){
		if(n == 0){
			return r.push(t);
		}
		for(var i = 0,l = a.length; i <= l - n; i++){
			f(t.concat(a[i]), a.slice(i + 1), n - 1)
		}
	})([],arr,num)

	return r;
}
aaa([1,3,4],2)
//[[1,3],[1,4],[3,4]]
```