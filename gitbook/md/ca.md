# 排列组合


## 构建返回结果
``` javascript
// 集合 和 集合的分组元素个数 返回分组集合
function aaa(arr, count){
	let ret = [];

	return ret;
}
```
## 构建迭代方法
``` javascript
function aaa(arr, count){
	let ret = [];
	(function f(list, all, count){
		if(count == 0){
			ret.push(list)
		}
		// 参数 [] [1,3,4] 2
		// 迭代次数 3 - 2 => 0,1
		// 参数 [1] [3,4] 1
		// 迭代次数 2 - 1 => 0,1
		// 参数 [1,3] [4] 0 
		// 收下 [1,3]
		// 迭代次数 1 - 0 => 0,1
		// 参数 [1,4] [] 0 => 收下 [1,4]
		
		
		for(let i = 0,l = all.length; i <= l - count; i++){

			f(list.concat(all[i]), all.slice(i + 1), count - 1)
		}
	})([], arr, count)
	return ret;
}
aaa([1,3,4],2)
```

## 最终结果
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