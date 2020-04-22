function add (a) {
  var sum = a

  function f (b) {
    sum += b
    return f
  }

  f.toString = function () { return sum }
  return f
}

console.log((add(10)(20)(30)))
