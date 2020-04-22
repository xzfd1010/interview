var addStrings = function (num1, num2) {
  var i = num1.length - 1
  var j = num2.length - 1
  var result = ''
  var carry = 0
  while (i >= 0 || j >= 0) {
    if (i >= 0) {
      carry += Number(num1[i])
    }
    if (j >= 0) {
      carry += Number(num2[j])
    }
    result += carry % 10
    carry = Math.floor(carry / 10)
    i--
    j--
  }
  if (carry === 1) {
    result += '1'
  }
  return result.split('').reverse().join('')
}

console.log(addStrings('9', '9'))
