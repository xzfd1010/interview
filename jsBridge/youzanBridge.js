YouzanJsBridge = {
  doCall: function (functionName, data, callback) {
    var _this = this
    // 解决连续调用问题
    if (this.lastCallTime && (Date.now() - this.lastCallTime) < 100) {
      setTimeout(function () {
        _this.doCall(functionName, data, callback)
      }, 100)
      return
    }
    this.lastCallTime = Date.now()

    data = data || {}
    if (callback) {
      $.extend(data, { callback: callback })
    }

    if (UA.isIOS()) {
      // 创建iframe
      $.each(data, function (key, value) {
        if ($.isPlainObject(value) || $.isArray(value)) {
          data[key] = JSON.stringify(value)
        }
      })
      var url = Args.addParameter('youzanjs://' + functionName, data)
      var iframe = document.createElement('iframe')
      iframe.style.width = '1px'
      iframe.style.height = '1px'
      iframe.style.display = 'none'
      iframe.src = url
      document.body.appendChild(iframe)
      setTimeout(function () {
        iframe.remove()
      }, 100)
    } else if (UA.isAndroid()) {
      // Android：在window上写入方法，window执行方法
      window.androidJS && window.androidJS[functionName] && window.androidJS[functionName](JSON.stringify(data))
    } else {
      console.error('未获取platform信息，调取api失败')
    }
  }
}

// 链接：https://juejin.im/post/599a58f6f265da247b4e756b
