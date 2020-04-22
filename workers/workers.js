self.onmessage = function (e) {
  var data = e.data

  data.sort((a, b) => a - b)

  self.postMessage(data)
}

self.close()
