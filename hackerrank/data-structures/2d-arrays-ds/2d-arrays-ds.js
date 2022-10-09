/**
 * https://www.hackerrank.com/challenges/2d-array/problem
 */

/**
 *
 * @param {string} testData
 */
const main = (testData) => {
  // parse input
  const dataArray = testData.split('\n')
    .map((row) => { return row.split(' ').map((num) => parseInt(num)) })

  return solve(dataArray).toString()
}

/**
   *
   * @param {array} numbers
   */
const solve = (numbers) => {
  const numIterations = numbers.length - 2
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < numIterations; i++) {
    for (let j = 0; j < numIterations; j++) {
      max = Math.max(sumHourglass(i, j, numbers), max)
    }
  }
  return max
}

const sumHourglass = (i, j, n) => {
  return (n[i][j] + n[i][j + 1] + n[i][j + 2]) +
                 (n[i + 1][j + 1]) +
     (n[i + 2][j] + n[i + 2][j + 1] + n[i + 2][j + 2])
}
module.exports = { main, sumHourglass }
