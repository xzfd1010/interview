const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class MyPromise {
  constructor (handler) {
    this.status = PENDING
    this.value = undefined

    this.onFulfilledQueues = []
    this.onRejectedQueues = []

    try {
      console.log('this', this)
      handler(this.resolve.bind(this), this.reject.bind(this))
    } catch (e) {
      throw(e)
    }
  }

  resolve (val) {
    if (this.status !== PENDING) return
    this.status = FULFILLED
    this.value = val
    let cb
    while (cb = this.onFulfilledQueues.shift()) {
      cb(val)
    }
  }

  reject (err) {
    if (this.status !== PENDING) return
    this.status = REJECTED
    this.value = err
    let cb
    while (cb = this.onRejectedQueues.shift()) {
      cb(err)
    }
  }

  then (onFulFilled, onRejected) {
    const { status, value } = this

    return new MyPromise((resolve, reject) => {
      let fulfilled = () => {
        let res = onFulFilled(value)
        resolve(res)
      }

      let rejected = () => {
        let res = onRejected(value)
        resolve(res)
      }
      switch (status) {
        case PENDING:
          this.onFulfilledQueues.push(fulfilled)
          this.onRejectedQueues.push(rejected)
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

  static all (list) {
    return new Promise((resolve, reject) => {
      let values = []
      let count = 0
      for (let [i, p] of list.entries()) {
        Promise.resolve(p).then((res) => {
          values[i] = res
          count++
          if (count === list.length) resolve(values)
        }, err => {
          reject(err)
        })
      }
    })
  }

}

const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
})

p1.then((value) => {
  console.log('fulfilled 1')
}, (value) => {
  console.log('rejected 1')
}).then(res => {
  console.log('fulfilled 2')
}, () => {
  console.log('rejected 2')
})
