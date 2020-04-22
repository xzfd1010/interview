var arr = [1, 5, 3, 2, 7]

function quickSort (arr) {
  if (arr.length < 2) {
    return arr
  } else {
    let flag = arr[0]
    let left = []
    let right = []
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > flag) {
        right.push(arr[i])
      } else {
        left.push(arr[i])
      }
    }
    return quickSort(left).concat(flag, quickSort(right))
  }
}

console.log(quickSort(arr))
