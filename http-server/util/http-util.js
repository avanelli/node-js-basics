'use strict'

module.exports = {
  /**
  * @param {http.IncomingMessage} req
  * @returns {Promise}
  */
  readBody: (req) => {
    return new Promise((resolve, reject) => {
      let body = []
      req.on('data', (chunk) => {
        body.push(chunk)
      })
      req.on('end', function () {
        body = Buffer.concat(body).toString()
        resolve(body)
      })

      req.on('error', reject)
    })
  }
}
