var worker = new Worker('workers.js')

var data = [23, 4, 7, 9, 2]

worker.onmessage = function (ev) {
  var data = ev.data

  console.log(data)
}

worker.postMessage(data)
