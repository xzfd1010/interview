// 节流，限制时间，多次执行

function throttle (fn, time) {
  let activeTime = Date.now()
  return () => {
    let current = Date.now()
    if (current - activeTime > time) {
      fn.apply(this, arguments)
      activeTime = current
    }
  }
}
