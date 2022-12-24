const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const { getUsersController, addUserController } = require('../controllers/user')

const users = [{ id: 1, name: 'Abd Yun', email: 'aa@aa.com' }]

router.get('/', getUsersController).post('/', addUserController)

router.get('/:id', (req, res, next) => {
  const foundUser = users.find(user => user.id === Number(req.params.id))

  if (!foundUser) {
    return next(createError(404, 'User not found'))
  }
  res.json(foundUser)
})

module.exports = router
