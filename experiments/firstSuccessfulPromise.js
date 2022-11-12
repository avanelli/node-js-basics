// return a Promise which should resolve to the first successful result from the promiseArray.
async function firstSuccessfulPromise (promiseArray) {
  let result
  for (let i = 0; i < promiseArray.length; i++) {
    try {
      result = await promiseArray[i]
      break
    } catch (e) {
      console.log(e)
    }
  }
  return result
}

const promise = firstSuccessfulPromise([new Promise((resolve, reject) => reject()),
  new Promise((resolve, reject) => resolve('Success!'))])
promise.then(result => console.log(result))

module.exports.firstSuccessfulPromise = firstSuccessfulPromise
