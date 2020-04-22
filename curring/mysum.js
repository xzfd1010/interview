function sum () {
  let args = [...arguments]
  return function () {
    // 终止的条件
    if (arguments.length === 0) {
      // 求和的过程
      return args.reduce((acc, cur) => acc + cur, 0)
    } else {
      // 参数累加的过程
      return sum.apply(this, args.concat([...arguments]))
    }
  }
}

console.log(sum(1, 2, 3, 4)())
console.log(sum(1)(2)(3)(4, 5)())
