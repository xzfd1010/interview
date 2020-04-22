// 自己实现尾递归优化
// function fib

//
// console.log(fib(5))

function tco (fn) {
  let value
  let accumulators = []
  let active = false
  return function () {
    accumulators.push(arguments)
    if (!active) {
      active = true
      while (accumulators.length) {
        value = fn.apply(this, accumulators.shift())
      }
      active = false
      return value
    }
  }
}

let fib2 = tco((n, total = 1) => {
  if (n === 1) return total
  return fib2(n - 1, total + n)
})
console.log(fib2(5))
