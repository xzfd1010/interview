// 防抖 只执行一次
function debounce (fn, delay) {
  let timer = null
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this.arguments)
    }, delay)
  }
}
