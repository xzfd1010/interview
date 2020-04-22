let id = 1

function jsonp (setting) {
  setting.data = setting.data || {}
  setting.key = setting.key || 'callback'
  setting.callback = setting.callback || function () {}
  let callbackName = '__onGetData__' + id
  id++
  setting.data[setting.key] = callbackName

  // 回调
  window[callbackName] = function (data) {
    setting.callback(data)
  }

  var script = document.createElement('script')
  var query = []
  for (var key in setting.data) {
    query.push(key + '=' + encodeURIComponent(setting.data[key]))
  }
  script.src = setting.url + '?' + query.join('&')
  document.head.appendChild(script)
  document.head.removeChild(script)
}
