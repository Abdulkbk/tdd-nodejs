const request = require('supertest')
const app = require('./src/app')

describe('Users', () => {
  it('GET /users --> array user', async () => {
    return request(app)
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              name: expect.any(String),
              email: expect.any(String),
              password: expect.any(String),
            }),
          ])
        )
      })
  })

  it('GET /users/id --> specific user', async () => {
    return request(app)
      .get('/users/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(
          expect.objectContaining({
            name: expect.any(String),
            email: expect.any(String),
          })
        )
      })
  })

  it('GET /users/id --> 404 if user not found', () => {
    return request(app).get('/users/555').expect(404)
  })

  it('POST /users --> created user', () => {
    return request(app)
      .post('/users')
      .send({
        email: 'abd@kbk.com',
        name: 'Abd Kbk',
      })
      .expect(201)
      .then(response => {
        expect.objectContaining({
          name: 'Abd Kbk',
          email: 'abd@kbk.com',
        })
      })
  })

  it('GET /users --> validate request body', () => {
    return request(app)
      .post('/users')
      .send({ name: 123, email: 2344 })
      .expect(422)
  })
})
