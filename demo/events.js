const EventEmitter = require('events');

const emitter = new EventEmitter();
// слушатель собыитя anything
emitter.on('anything', (data) => {
  console.log('ON anything', data)
})
// результат
emitter.emit('anything', { a: 1 });
emitter.emit('anything', { b: 2 });
// добавил асинхронность
setTimeout(() => {
  emitter.emit('anything', { c: 3 });
}, 0)

class Dispatcher extends EventEmitter {
  subscribe(eventName, callback) {
    console.log('Subscribe...')
    this.on(eventName, callback)
  }

  dispatch(eventName, data) {
    console.log('Dispatching...')
    this.emit(eventName, data)
  }
}

const dis = new Dispatcher();

dis.subscribe('aa', (data) => {
  console.log('ON: aa', data)
})

dis.dispatch('aa', { a: 22 });