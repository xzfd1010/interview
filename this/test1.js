var num = 1
var myObject = {
  num: 2,
  add: function () {
    this.num = 3;
    (function () {
      console.log(this.num) // 1
      this.num = 4
    })()
    console.log(this.num) // 3
  },
  sub: function () {
    console.log(this.num)
  }
}
myObject.add()
console.log(myObject.num) // 3
console.log(num) // 4
var sub = myObject.sub
sub() // 4
