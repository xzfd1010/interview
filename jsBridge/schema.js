function _invoke (action, data, callback) {
  // 拼装schema协议
  var schema = `myapp://utils/${action}`

  // 拼接参数
  schema += '?a=a'
  var key
  for (key in data) {
    if (data.hasOwnProperty(key)) {
      schema += '&' + key + data[key]
    }
  }

  // 处理callback
  var callbackName = ''
  if (typeof callback === 'string') {
    callbackName = callback
  } else {
    callbackName = action + Date.now() // 唯一标识
    window[callbackName] = callback
  }

  schema += 'callback=callbackName'

  // 触发
  var iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = schema // 重要！
  var body = document.body
  body.appendChild(iframe)
  setTimeout(() => {
    body.removeChild(iframe) // 移除
    iframe = null
  })
}

window.invoke = {
  share: function (data, callback) {
    _invoke('share', data, callback)
  },
  scan: function (data, callback) {
    _invoke('scan', data, callback)
  },
  login: function (data, callback) {
    _invoke('login', data, callback)
  }
}
