// 木易杨
function cloneDeep4 (source, hash = new WeakMap()) {

  if (!isObject(source)) return source
  if (hash.has(source)) return hash.get(source)

  let target = Array.isArray(source) ? [] : {}
  hash.set(source, target)

  // ============= 新增代码
  let symKeys = Object.getOwnPropertySymbols(source) // 查找 Symbol 作为key的键
  if (symKeys.length) { // 查找成功
    symKeys.forEach(symKey => {
      if (isObject(source[symKey])) {
        target[symKey] = cloneDeep4(source[symKey], hash)
      } else {
        target[symKey] = source[symKey]
      }
    })
  }
  // =============
  // 不判断自身，就拷贝了属性
  for (let key in source) {
    console.log(key)
    if (isObject(source[key])) {
      target[key] = cloneDeep4(source[key], hash)
    } else {
      target[key] = source[key]
    }
  }
  return target
}

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

var s = Symbol()
a[s] = 's'

var b = cloneDeep4(a)

console.log(b)

b.sayName()

// console.log(Object.getOwnPropertyDescriptor(Parent, 'prototype'))

