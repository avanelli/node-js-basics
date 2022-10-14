/**
 * https://www.hackerrank.com/challenges/sparse-arrays/problem
 */

/**
 *
 * @param {string} testData
 */
const main = (testData) => {
  const strings = []
  const queries = []
  testData = testData.split(/\r?\n|\r/)
  const iterator = testData[Symbol.iterator]()

  let num = parseInt(iterator.next().value)
  for (const row of iterator) {
    strings.push(row)
    if (--num === 0) break
  }

  num = parseInt(iterator.next().value)
  for (const row of iterator) {
    queries.push(row)
  }

  return solve(strings, queries).join('\n')
}

/**
 * @param {array} strings
 * @param {array} queries
 */
const solve = (strings, queries) => {
  // optimize strings with map
  const sMap = new Map()
  for (const s of strings) {
    if (sMap.has(s)) {
      sMap.set(s, sMap.get(s) + 1)
    } else {
      sMap.set(s, 1)
    }
  }

  return queries.map((val) => {
    return sMap.has(val) ? sMap.get(val) : 0
  })
}

module.exports = { main }
