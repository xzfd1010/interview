Function.prototype.call = function (context) {
  context = context ? Object(context) : window
  const fn = Symbol()
  context[fn] = this // 得到函数体

  let args = [...arguments].slice(1)
  let result = context.fn(...args)

  delete context[fn]

  return result
}

Function.prototype.apply = function (context, arr) {
  context = context ? Object(context) : window
  const fn = Symbol()
  context[fn] = this // 得到函数体
  let result
  if (!arr) {
    result = context[fn]()
  } else {
    result = context.fn(...arr)
  }
  delete context[fn]

  return result
}
