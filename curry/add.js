// 使用异步回调的方法
let timer = null

function add1 (...arg1) {
  return function (...arg2) {
    let arg = [...arg1, ...arg2]
    clearTimeout(timer) // 如果继续调用，就清空了计时器
    timer = setTimeout(() => {
      console.log('add1', arg.reduce((p, c) => p + c))
    }, 0)
    return add1(...arg)
  }
}

add1(2, 3)(4)(5, 6)(9)(1)

// 需要最后调用一次的解法，柯里化解法
function add2 (...args1) {
  return function (...args2) {
    // 终止的条件
    return args2.length === 0
      // 求和的过程
      ? args1.reduce((acc, cur) => acc + cur, 0)
      // 参数累加的过程
      : add2(...args1, ...args2)
  }
}

console.log('add2', add2(1, 2, 3, 4)())
console.log('add2', add2(1)(2)(3)(4, 5)())

// 使用valueOf / toString 方法，打印时打印的是一个函数，但函数有自己的返回值
function add3 () {
  let args = [...arguments]

  let fn = function () {
    let arg_fn = [...arguments]
    return add3.apply(null, args.concat(arg_fn))
  }

  fn.valueOf = fn.toString = function () {
    return args.reduce(function (a, b) {
      return a + b
    })
  }

  return fn
}

console.log('add3', add3(1, 2, 3, 4))
console.log('add3', add3(1)(2)(3)(4, 5))

function add4 (...args) {
  function curriedSum (...rest) {
    args.push(...rest)
    return curriedSum
  }

  curriedSum.toString = curriedSum.toNumber = () => args.reduce((prev, curr) => curr + prev)

  return curriedSum
}

var res1 = add4(1)(2)(3)(4)(5)(6, 7)
var res2 = add4(1, 2, 3, 4, 5, 6, 7)
console.log('add4', res1)
console.log('add4', res2)

// 只支持add(1)(2)(3)的形式
function add5 (a) {
  var sum = a

  function f (b) {
    sum += b
    return f
  }

  f.toString = function () { return sum }
  return f
}

console.log('add5', Number(add5(1)(2)(3)))

// 面试题常见形式 add(1,2,3,4,5) = add(1)(2,3)(4,5)
// 思路：保存函数运行时的参数，返回新的函数，改写toString方法/valueOf方法
function add6 (...args) {
  let fn = (...inArgs) => {
    args.push(...inArgs)
    return fn
  }

  fn.toString = fn.valueOf = () => args.reduce((acc, cur) => acc + cur, 0)

  return fn
}

console.log('add6', add6(1, 2, 3, 4, 5))
console.log('add6', add6(1)(2, 3)(4, 5))

