'use strict'

const fs = require('fs').promises
const { resolve } = require('path')

const fsUtils = {
  /**
  * Read file content
  * @param {string} filename
  * @returns {Promise}
  */
  async readFileContentBuffer (filename) {
    let file
    try {
      file = await fs.open(filename, 'r')
      const {
        bytesRead,
        buffer
      } = await file.read(Buffer.alloc(10000), 0, 10000, 0)
      const contents = buffer.toString('utf8', 0, bytesRead)
      return (contents)
    } catch (err) {
      throw new Error(err.message)
    } finally {
      if (typeof file !== 'undefined') {
        await file.close()
      }
    }
  },
  /**
  * Read files list using pattern
  * @param {string} path
  * @param {string} pattern
  * @returns {Promise} Promise: array of files found
  */
  async scanDir (path, pattern) {
    const list = []
    const dir = await fs.opendir(path)
    for await (const ent of dir) {
      // if (ent.name.startsWith('.')) { continue }
      // TODO use regex
      if (ent.isFile() && ent.name.endsWith(pattern)) {
        list.push(resolve(dir.path, ent.name))
      }
    }
    return list
  }

}

module.exports = fsUtils
