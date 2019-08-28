# 求两个数组的交集

``` javascript
var nums1 = [1, 3, 2, 1],
    nums2 = [2, 2];


const intersect = (nums1, nums2) => {
  const map = {}
  const res = []
  for (let n in nums1) {

    if (map[n]) {
      map[n]++
    } else {
      map[n] = 1
    }
  }

  for (let n of nums2) {

    if (map[n] > 0) {

      res.push(n)
      map[n]--
    }
  }
  return res
}


console.log(intersect(nums1, nums2));
```