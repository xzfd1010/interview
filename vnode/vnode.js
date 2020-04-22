var vnode = {
  type: 'h1',
  props: {
    className: 'title',
    style: 'color:blue;',
  },
  children: [{
    type: 'div',
    props: {
      className: 'box',
      style: 'background:red',
    },
    children: '哈哈哈'
  }] // 嵌套节点
}

function createDOM (vnode) {
  const result = document.createDocumentFragment()

  function createEle (vnode) {
    let parent = document.createElement(vnode.type)
    console.log('parent', parent)
    for (let prop in vnode.props) {
      if (vnode.props.hasOwnProperty(prop)) {
        if (prop === 'className') {
          parent.setAttribute('class', vnode.props[prop])
        } else {
          parent.setAttribute(prop, vnode.props[prop])
        }
      }
    }
    if (typeof vnode.children === 'string') {
      parent.innerText = vnode.children
    } else if (Array.isArray(vnode.children)) {
      vnode.children.forEach(child => {
        parent.appendChild(createEle(child))
      })
    }
    return parent
  }

  result.appendChild(createEle(vnode))
  document.body.appendChild(result)
}

createDOM(vnode)
