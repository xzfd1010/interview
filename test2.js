var inputStr = readline()
var arr = inputStr.split(',')
arr = arr.sort((a, b) => {
  return b.charCodeAt(b.length - 1) - a.charCodeAt(a.length - 1)
})

console.log(arr.join(','))
