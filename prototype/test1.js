function Foo () {
  getName = function () {
    console.log('1', 'AAA')
  }
  console.log(this)
  return this
}

Foo.getName = function () {
  console.log('2', 'BBB')
}

Foo.prototype.getName = function () {
  console.log('3', 'ccc')
}

var getName = function () {
  console.log('4', 'ddd')
}

function getName () {
  console.log('5', 'EEE')
}

Foo.getName()
getName()
Foo().getName()
getName()
new Foo.getName()
(new Foo()).getName()
