// function sum (num) {
//
// }

// function sum (x) {
//   sum.result = (sum.result) ? sum.result += x : x
//   sum.valueOf = function () {
//     return sum.result
//   }
//   return sum
// }

function add () {
  var args = Array.prototype.slice.call(arguments)

  var fn = function () {
    var arg_fn = Array.prototype.slice.call(arguments)
    return add.apply(null, args.concat(arg_fn))
  }

  fn.valueOf = function () {
    return args.reduce(function (a, b) {
      return a + b
    })
  }

  return fn
}

// function sum (x) {
//   if (arguments[1]) {
//     var arr = Array.prototype.slice.apply(arguments)
//     x = arr.reduce((a, c) => a + c)
//     return x
//   } else {
//     function add (b) {
//       x = x + b
//       return add
//     }
//
//     add.toString = function () {
//       return x
//     }
//     return add
//   }
// }

// function sum(...args) {
//   function curriedSum(...rest) {
//     args.push(...rest);
//     return curriedSum;
//   }
//   curriedSum.toString = () => args.reduce((prev, curr) => curr + prev);
//
//   curriedSum.toNumber = () => args.reduce((prev, curr) => curr + prev);
//   return curriedSum;
// }
//
// var res1 = sum(1)(2)(3)(4)(5)(6)
// var res2 = sum(1, 2, 3, 4, 5, 6)
// console.log(res1)//21
// console.log(res2)//21

function sum () {
  let args = [...arguments]
  return function () {
    let inargs = [...arguments]
    // 代表最后的调用
    if (arguments.length === 0) {
      let me = 0
      for (let num of args) {
        me += num
      }
      return me
    } else {
      console.log('args', args)
      return sum.apply(this, args.concat(inargs))
    }
  }
}

// console.log(sum(1, 2, 3, 4)())
console.log(sum(1)(2)(3)(4)())
