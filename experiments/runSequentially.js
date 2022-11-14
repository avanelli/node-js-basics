// return a Promise
async function runSequentially (functions) {
  // run sequentially the functions in the array and return the result
  const result = []
  for (let i = 0; i < functions.length; i++) {
    result.push(await functions[i]())
  }
  return result
}

let counter = 1
function incrementCounterAsync () {
  return new Promise((resolve, reject) => {
    counter += 1
    resolve(counter)
  })
}
function testThrow () {
  return new Promise((resolve, reject) => {
    throw new Error('Error!')
  })
}

const promise = runSequentially([incrementCounterAsync, testThrow, incrementCounterAsync])
if (promise) {
  promise.then(result => console.log(result))
    .catch(error => console.log('Error: ' + error))
}
module.exports.runSequentially = runSequentially
