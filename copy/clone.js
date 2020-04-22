// 木易杨
function cloneDeep4 (source, hash = new WeakMap()) {

  if (!isObject(source)) return source
  if (hash.has(source)) return hash.get(source)

  let target = Array.isArray(source) ? [] : {}
  hash.set(source, target)

  Reflect.ownKeys(source).forEach(key => { // 改动
    if (isObject(source[key])) {
      target[key] = cloneDeep4(source[key], hash)
    } else {
      target[key] = source[key]
    }
  })
  return target
}

// 测试已通过

function isObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

function Parent (name) {
  this.name = name
}

Parent.prototype.sayName = function () {
  console.log(this.name)
}

var a = new Parent('a')

var b = cloneDeep4(a)

console.log(b)

b.sayName()
