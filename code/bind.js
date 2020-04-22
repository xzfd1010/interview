Function.prototype.bind2 = function (context) {
  if (typeof this !== 'function') {
    throw new Error('bind的调用者应该是一个函数')
  }

  let self = this // 函数体

  let args = [...arguments].slice(1) // bind传入的参数

  let fNOP = function () {}

  let fBound = function () {
    let bindArgs = [...arguments]
    // 如果作为构造函数使用，bind的this会失效
    return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs))
  }

  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP()

  return fBound

}
