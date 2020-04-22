class EventBus {
  constructor () {
    this.eventQueue = {}
  }

  on (eventName, callback) {
    if (!this.eventQueue[eventName]) {
      this.eventQueue[eventName] = []
    }
    this.eventQueue[eventName].push(callback)
  }

  emit (eventName, ...args) {
    if (!this.eventQueue[eventName]) return
    this.eventQueue[eventName].forEach((callback) => {
      callback(...args)
    })
  }
}

var eventBus = new EventBus()
eventBus.on('click', (...rest) => {
  console.log(rest)
})
eventBus.on('click', () => {
  console.log('hahaha')
})
eventBus.emit('click', 1, 2, 3)
