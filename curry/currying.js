// ES5
function currying (fn, length) {
  length = length || fn.length
  return function result (...args) {
    return args.length >= length ?
      fn.apply(this, args) :
      // 关键在这里，返回的还是一个柯里化的执行结果，fn函数体不变，this和args通过bind进行传递，length传入currying
      currying(fn.bind(this, ...args), length - args.length)
  }
}

function add (a, b) {
  return a + b
}

const sum = currying(add)

console.log(sum(1)(3))

// ES6
const currying2 = fn =>
  judge = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...arg) => judge(...args, ...arg)

const sum2 = currying2(add)

console.log(sum2(1)(3))
