// 1
var A = function (name) {
  this.name = name
}
A.prototype.n = 1
var b = new A('b')
A.prototype = { // 目前的理解是 A和原来的A的prototype不一样了，构造函数被重写了，c是A的实例；但b不是A的实例了
  n: 2,
  m: 3
}
var c = new A('c')
console.log(b)
console.log(b.n) // 2
console.log(b.m) // 3

console.log(c)
console.log(c.n) // 2
console.log(c.m) // 3

//2
var F = function () {}

Object.prototype.a = function () {
  console.log('a')
}

Function.prototype.b = function () {
  console.log('b')
}

var f = new F()

f.a() // F的实例 __proto__ => Object.prototype // 'a'
f.b() // 这里面没有Function， // not a function

F.a() // F本身是Function的实例，__proto__ 指向 Function.prototype
      // Function.prototype.__proto__ => Object.prototype
      // F.a() => Object.prototype.a() 'a'
F.b() // b

// 3
function Person (name) {
  this.name = name
}

let p = new Person('Tom')
// 复制代码问题1：1. p.__proto__等于什么？ p.__proto__ === Person.prototype
// 问题2：Person.__proto__等于什么？ Person.__proto__ === Function.prototyp

// 4.
var foo = {},
  F = function () {}
Object.prototype.a = 'value a'
Function.prototype.b = 'value b'

console.log(foo.a) // 'value a'
console.log(foo.b) // undefined

console.log(F.a) // value a
console.log(F.b) // value b
