function all (promises) {
  return new Promise((resolve, reject) => {
    const values = []
    let count = 0
    for (let [i, p] of promises.entries()) {
      Promise.resolve(p).then((res) => {
        values[i] = res
        count++
        if (count === promises.length) resolve(values)
      }).catch(err => {
        reject(err)
      })
    }
  })
}
