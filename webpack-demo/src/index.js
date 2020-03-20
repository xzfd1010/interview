import _ from 'lodash'
import printMe from './print'
import './style.css'

function component () {
  let element = document.createElement('div')
  let btn = document.createElement('button')

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  btn.innerHTML = '点击这里，然后查看 console！'
  btn.onclick = printMe

  element.appendChild(btn)
  return element
}

let element = component()
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!')
    document.body.removeChild(element)
    element = component() // Re-render the "component" to update the click handler
    element = component() // 重新渲染 "component"，以便更新 click 事件处理函数
    document.body.appendChild(element)
  })
}
