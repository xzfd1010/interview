// 每次循环找到最小的数，放到最前面
// 外层控制次数
// 内层控制交换
var arr = [1, 5, 3, 2, 7]

function selectSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
}

selectSort(arr)
