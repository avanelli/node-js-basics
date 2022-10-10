/**
 * Print ordinals 1st 2nd 3rd 4th... 11th 12th 13th... 21st 22nd 23rd 24th
 *  INPUT
 *  list of numbers
 *
 */

/**
 *
 * @param {string} testData
 */
const main = (testData) => {
  // parse input
  testData = testData.split(' ').map((num) => parseInt(num))
  return solve(testData)
}

/**
 *
 * @param {array} numbers
 */
const solve = (numbers) => {
  // solution
  numbers = numbers.map((num) => {
    let suffix = 'th'
    const reminder100 = num % 100
    const reminder10 = num % 10
    if (reminder100 < 11 || reminder100 > 13) {
      switch (reminder10) {
        case 1:
          suffix = 'st'
          break
        case 2:
          suffix = 'nd'
          break
        case 3:
          suffix = 'rd'
          break
      }
    }
    return `${num}${suffix}`
  })

  return numbers.reduce((prev, num) => {
    return prev + ' ' + num
  }, '').substring(1)
}

module.exports = { main }
