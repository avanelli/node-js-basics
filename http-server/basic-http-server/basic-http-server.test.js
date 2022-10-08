const t = require('tap')
const request = require('supertest')
const subject = require('./basic-http-server')

const subjectWithErorr = t.mock('./basic-http-server', {
  '../util/http-util': {
    readBody: () => { throw new Error('read error') }
  }
})

t.test('when GET request server is responding with GET request data', async t => {
  const response = await request(subject).get('/test')
    .set({ 'api-key': 'foobar' })
  t.equal(response.headers['content-type'], 'application/json', 'Content-Type is application/json')
  t.equal(response.status, 200, 'response status is 200')
  t.equal(response.body.url, '/test', 'url is /test')
  t.equal(response.body.headers['api-key'], 'foobar', 'header api-key is foobar')
  t.end()
})

t.test('when POST request server is responding with POST request data', async t => {
  const response = await request(subject).post('/test')
    .set({ 'api-key': 'foobar' })
    .send({ 'test-data': 'dummy' })
  t.equal(response.headers['content-type'], 'application/json', 'Content-Type is application/json')
  t.equal(response.status, 200, 'response status is 200')
  t.equal(response.body.url, '/test', 'url is /test')
  t.equal(response.body.headers['api-key'], 'foobar', 'header api-key is foobar')
  t.equal(JSON.parse(response.body.payload)['test-data'], 'dummy', 'payload test-data is dummy')
  t.end()
})

// TODO test error case forcing "function readBody (req) " to return error
t.test('when body read error server is responding 500 with read error', async t => {
  const response = await request(subjectWithErorr).post('/test')
    .set({ 'api-key': 'foobar' })
    .send({ 'test-data': 'dummy' })
  t.equal(response.headers['content-type'], 'application/json', 'Content-Type is application/json')
  t.equal(response.status, 500, 'response status is 500')
  t.equal(response.body.error, 'read error', 'error message is: read error')
  t.end()
})
