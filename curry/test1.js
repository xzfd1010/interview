// function add (a) {
//   var sum = a
//
//   function f (b) {
//     sum += b
//     return f
//   }
//
//   f.toString = function () { return sum }
//   return f
// }

//司徒正美
function add (a) {
  if (!isFinite(add.i)) {
    add.i = a
  } else {
    add.i += a
  }
  add.valueOf = add.toString = function () {
    return add.i
  }
  return add
}


console.log((add(1)(2)(3)))
