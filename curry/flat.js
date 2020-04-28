/**
 已知如下数组，编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
 */

// res = []
// 遍历数组的每一项，如果对应项是基本元素，push
// 如果对应项是数组元素，继续遍历数组的每一项，返回一个扁平的数组
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]

function flat1 (arr) {
  let res = []
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flat1(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}

// console.log(flat1(arr))

// 改写成的reduce的模式

function flat2 (arr) {
  return Array.from(new Set(arr.reduce((res, cur) => res.concat(Array.isArray(cur) ? flat2(cur) : cur), [])))
}

console.log(flat2(arr).sort((a, b) => a - b))



