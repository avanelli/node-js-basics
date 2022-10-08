'use strict'

// import { createServer, IncomingMessage, ServerResponse } from 'http';
const http = require('http')
const { readBody } = require('../util/http-util')

const server = http.createServer((request, response) => {
  handler(request, response)
    .then()
    .catch()
    .finally()
})

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */
async function handler (req, res) {
  try {
    const body = await readBody(req)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
      headers: req.headers,
      url: req.url,
      method: req.method,
      payload: body
    }))
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: error.message }))
  }
}

module.exports = server
