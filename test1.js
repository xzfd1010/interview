// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
var n = parseInt(readline())
var results = []
var units = {
  M: 1,
  G: 1000,
  T: 1000000
}
while (item = readline()) {
  // line 得到单位，
  let len = item.length
  let num = item.slice(0, len - 1)
  let unit = item.slice(len - 1)
  let itemResult = num * units[unit]
  let index = 0
  for (let i = 0; i < results.length; i++) {
    if (itemResult < results[i][1]) {
      index = i
      break
    }
  }
  results.splice(1, index, [item, itemResult])
  // results.push([item, itemResult])
}

// results = results.sort((a, b) => {
//   return a[1] - b[1]
// })

results.forEach(item => {
  console.log(item[0])
})
