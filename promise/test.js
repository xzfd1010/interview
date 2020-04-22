// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1)
//   }, 1000)
// })
//
// p1.then((val) => {
//   console.log(val)
//   return 2
// }).then((val) => {
//   console.log(val)
// })
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1)
  }, 1000)
})

p1.then((value) => {
  console.log('fulfilled')
}, (value) => {
  // console.log(value)
  // console.log('rejected')
  throw new Error('xxx')
}).then(res=>{
  console.log('resolve 3')
},()=>{
  console.log('rejected 3')
})
