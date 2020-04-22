var indexedDB = window.indexedDB || window.webkitIndexedDB

var request, db, dbName = 'person'

request = indexedDB.open('admin')

db = function(dbName, callback, options) {
  let openRequest;

  !options && (options = {});
  openRequest = indexedDB.open(dbName, options.dbVersion || 1);

  openRequest.onsuccess = e => {
    this.dbHandler = e.target.result;
    // 不能在onsuccess新建db
  };
  openRequest.onblocked = options.onblocked || function() {};
  openRequest.onerror = options.onerror || function() {};
  openRequest.onupgradeneeded = e => {
    this.dbHandler = e.target.result;
    // 只能在此新建DB
    this.dbHandler.createTable('KAIFAGE_COM', {keyPath: 'name'})
  };

  this.dbName = dbName;

  return this;
}

//
// request.onsuccess = function (event) {
//   db = request.result;
//   console.log('数据库打开成功');
//   var objectStore = db.createObjectStore('person', { keyPath: 'id' })
//   objectStore.createIndex('name', 'name', { unique: false });
//   objectStore.createIndex('email', 'email', { unique: true });
//   add()
// };
//
//
//
// function add () {
//   var request = db.transaction(['person'], 'readwrite')
//     .objectStore('person')
//     .add({ id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' })
//
//   request.onsuccess = function (event) {
//     console.log('数据写入成功')
//     read()
//   }
//
//   request.onerror = function (event) {
//     console.log('数据写入失败')
//   }
// }
//
// function read () {
//   var transaction = db.transaction(['person'])
//   var objectStore = transaction.objectStore('person')
//   var request = objectStore.get(1)
//
//   request.onerror = function (event) {
//     console.log('事务失败')
//   }
//
//   request.onsuccess = function (event) {
//     if (request.result) {
//       console.log('Name: ' + request.result.name)
//       console.log('Age: ' + request.result.age)
//       console.log('Email: ' + request.result.email)
//     } else {
//       console.log('未获得数据记录')
//     }
//   }
// }
//
