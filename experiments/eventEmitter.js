/*
The createEmitter function should create a new EventEmitter and register "open" and "close" event listeners.
The callbacks for those events should be onOpen and onClose arguments, respectively.
The opened and closed methods should raise the "open" and "close" events on the EventEmitter they will receive as emitter arguments.
The callbacks should only be invoked once per emitter.
*/

const events = require('events')

function createEmitter (onOpen, onClose) {
  // create a new EventEmitter and register "open" and "close" event listeners.
  const emitter = new events.EventEmitter()
  emitter.on('open', onOpen)
  emitter.on('close', onClose)
  return emitter
}

// The opened method should raise the "open" events on the EventEmitter
function opened (emitter) {
  if (!emitter.opened) {
    emitter.opened = true
    emitter.emit('open')
  }
}

function closed (emitter) {
  if (!emitter.closed) {
    emitter.closed = true
    emitter.emit('close')
  }
}

const emitter = createEmitter(

  () => console.log('Opened!'), () => console.log('Closed!')

)

opened(emitter)

closed(emitter)

module.exports.createEmitter = createEmitter

module.exports.opened = opened

module.exports.closed = closed
