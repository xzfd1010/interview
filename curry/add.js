// 这个方法可以用，但必须传回调了
let timer = null

function add (...arg1) {
  return function (...arg2) {
    let arg = [...arg1, ...arg2]
    clearTimeout(timer) // 如果继续调用，就清空了计时器
    timer = setTimeout(() => {
      console.log(arg.reduce((p, c) => p + c))
    }, 0)
    return add(...arg)
  }
}

add(2, 3)(4)(5, 6)(9)(1)



