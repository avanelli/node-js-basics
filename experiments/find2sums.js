// The pipeline function should accept a variable number of functions, and it should return a new function that accepts one parameter arg.
// The returned function should call the first function in pipeline with the parameter arg, and call the second function with the result of the first function.
// The returned function should continue calling each function in pipeline in order, following the same pattern, and return the value from the last function.
function pipeline (...funcs) {
  return (arg) => {
    let result = arg
    for (let i = 0; i < funcs.length; i++) {
      result = funcs[i](result)
    }
    return result
  }
}

const fun = pipeline(x => x * 3, x => x + 1, x => x / 2)
console.log(fun(3)) // Should print 5
