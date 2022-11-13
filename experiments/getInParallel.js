function getInParallel (apiCalls) {
  // Write your code here
  const functions = apiCalls.map(apiCall => apiCall())
  return Promise.all(functions).then(response => response)
}

const promise = getInParallel([() => Promise.resolve('First API call!'),
  () => Promise.resolve('Second API call!')])
if (promise) {
  promise.then((result) => console.log(result)).catch((err) => console.log(err))
}
module.exports.getInParallel = getInParallel
