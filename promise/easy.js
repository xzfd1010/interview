function MyPromise (executor) {
  let self = this
  self.status = 'pending' //等待态
  self.value = undefined  //成功的返回值
  self.reason = undefined //失败的原因

  function resolve (value) {
    if (self.status === 'pending') {
      self.status = 'resolved'
      self.value = value
    }
  }

  function reject (reason) {
    if (self.status === 'pending') {
      self.status = 'rejected'
      self.reason = reason
    }
  }

  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)// 捕获时发生异常，就直接失败
  }
}

//onFulfilled 成功的回调
//onRejected 失败的回调
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  let self = this
  if (self.status === 'resolved') {
    onFulfilled(self.value)
  }
  if (self.status === 'rejected') {
    onRejected(self.reason)
  }
}

// test

let promise = new MyPromise(function (resolve, reject) {
  setTimeout(() => {
    resolve(100)
  }, 1000)
})

promise.then(function (data) {
  console.log('data:', data)
}, function (err) {
  console.log('err:', err)
})
