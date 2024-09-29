const test = require('tape')
const request = require('supertest')
const app = require('../src/app')

test('GET /', (t) => {
  request(app)
    .get('/')
    .expect(200, (err) => t.end(err))
})

test('GET /?delay=100', (t) => {
  const start = Date.now()
  request(app)
    .get('/?delay=100')
    .expect(200, (err) => {
      const end = Date.now()
      t.assert(end - start >= 100, `actual response time ${end - start}`)
      t.assert(end - start < 200, `actual response time ${end - start}`)
      t.end(err)
    })
})

test('POST /', (t) => {
  const max = 10
  t.plan(max * 3)

  // Test concurrency
  for (var i = 0; i < max; i++) {
    request(app)
      .post('/posts')
      .send({ body: 'foo' })
      .expect(201, (err) => {
        t.error(err)
        // Check that GET /posts length still returns 100 items
        request(app)
          .get('/posts')
          .expect(200, (err, res) => {
            t.error(err)
            const { length } = res.body
            t.equal(
              length,
              100,
              `more than 100 posts found (${length})`
            )
          })
      })
  }
})

test('POST /posts?delay=100', (t) => {
  const start = Date.now()
  request(app)
    .post('/posts?delay=100')
    .send({ body: 'foo' })
    .expect(201, (err) => {
      const end = Date.now()
      t.assert(end - start >= 100, `actual response time ${end - start}`)
      t.assert(end - start < 200, `actual response time ${end - start}`)
      t.end(err)
    })
})
