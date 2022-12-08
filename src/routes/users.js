const express = require('express')
const router = express.Router()
const createError = require('http-errors')

const users = [{ id: 1, name: 'Abd Yun', email: 'aa@aa.com' }]

router
  .get('/', (req, res) => {
    res.json(users)
  })
  .post('/', (req, res, next) => {
    const { name, email } = req.body

    if ((typeof name !== 'string') | (typeof email !== 'string')) {
      return next(createError(422, 'Name and Email must be string'))
    }

    const id = users.length + 1

    const newUser = { id, name, email }

    users.push(newUser)

    res.status(201).json(newUser)
  })

router.get('/:id', (req, res, next) => {
  const foundUser = users.find(user => user.id === Number(req.params.id))

  if (!foundUser) {
    return next(createError(404, 'User not found'))
  }
  res.json(foundUser)
})

module.exports = router
