var arr = [2, 3, 4, 7]

// arr = arr.filter(item => item % 2 !== 0)

// function deleteEven (arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 === 0) {
//       arr.splice(i, 1)
//     }
//   }
//   return arr
// }

function deleteEven (arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i])
    }
  }
  return result
}

console.log(deleteEven(arr))
