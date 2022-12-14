'use strict'

const fs = require('fs').promises
const { resolve, dirname, basename } = require('path')
const fileUtils = require('../fs/fs-utils')

const run = async () => {
  try {
    if (process.argv[2] === undefined) {
      throw new Error('You must specify a file name')
    }

    const fileName = resolve(process.cwd(), process.argv[2])
    const algo = require(fileName)

    // read test data and process
    const testFiles = await fileUtils.scanDir(resolve(dirname(fileName), 'test-files'), 'input.txt')
    for (const file of testFiles) {
      const testData = await fs.readFile(file, 'utf8')
      const response = algo.main(testData)
      // TODO write reponse to file
      const expectedFile = file.replace('input', 'expected')
      const expectedRes = (await fs.readFile(expectedFile, 'utf8')).replaceAll(/\r?\n|\r/g, '\n')
      if (expectedRes === response) {
        console.log(`OK test ${basename(file)}`)
      } else {
        console.log(`!!! KO test ${basename(file)}. Your response:`)
        console.log(response)
        console.log('*** Expected')
        console.log(expectedRes)
      }

      // parallel
      /*
      await Promise.all(files.map(async (file) => {
        const contents = await fs.readFile(file, 'utf8')
        console.log(contents)
      })); */
    }
  } catch (err) {
    console.log(err.message)
  }
}

run()
