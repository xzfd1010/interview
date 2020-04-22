const PENDING = 'PENDING'
const REJECTED = 'REJECTED'
const FULFILLED = 'FULFILLED'

class MyPromise {
  constructor (handler) {
    this.status = PENDING
    this.value = undefined

    this.fulfilledQueues = []
    this.rejectedQueues = []

    try {
      handler(this.resolve.bind(this), this.reject.bind(this))
    } catch (e) {
      throw(e)
    }
  }

  resolve (value) {
    if (this.status !== PENDING) return
    let run = () => {
      let cb
      this.status = FULFILLED
      this.value = value
      while ((cb = this.fulfilledQueues.shift())) {
        cb(value)
      }
    }
    setTimeout(run, 0)
  }

  reject (err) {
    if (this.status !== PENDING) return
    let run = () => {
      let cb
      this.status = REJECTED
      this.value = err
      while ((cb = this.fulfilledQueues.shift())) {
        cb(err)
      }
    }
    setTimeout(run, 0)
  }

  then (onFulfilled, onRejected) {
    const { value, status } = this
    return new MyPromise((resolve, reject) => {
      let fulfilled = () => {
        try {
          let res = onFulfilled(value)
          resolve(res)
        } catch (e) {
          reject(e)
        }
      }
      let rejected = () => {
        try {
          let res = onRejected(value)
          resolve(res)
        } catch (e) {
          reject(e)
        }
      }
      switch (status) {
        case PENDING:
          this.fulfilledQueues.push(fulfilled)
          this.rejectedQueues.push(rejected)
          break
        case FULFILLED:
          fulfilled(value)
          break
        case REJECTED:
          rejected(value)
          break
      }
    })
  }

  // 添加静态resolve方法
  static resolve (value) {
    // 如果参数是MyPromise实例，直接返回这个实例
    if (value instanceof MyPromise) return value
    return new MyPromise(resolve => resolve(value))
  }

  // 添加静态reject方法
  static reject (value) {
    return new MyPromise((resolve, reject) => reject(value))
  }

  static all (list) {
    return new MyPromise((resolve, reject) => {
      let values = []
      let count = 0
      for (let [i, p] of list.entries()) {
        this.resolve(p).then((val) => {
          values[i] = (val)
          count++
          if (values.length === count) resolve(values)
        }, (err) => {
          reject(err)
        })
      }
    })
  }

  static race (list) {
    return new MyPromise((resolve, reject) => {
      for (let p of list) {
        this.resolve(p).then((val) => {
          resolve(val)
        }, (err) => {
          reject(err)
        })
      }
    })
  }
}
// for in 得到的是索引；type是string
// for of 得到的是值，type是number
