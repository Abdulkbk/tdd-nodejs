const { getAllUsers, addUser, getUserById } = require('../repos/user')

const getUsersController = async (req, res) => {
  const users = await getAllUsers()
  res.json(users)
}

const getUserByIdController = async (req, res) => {
  const { id } = req.params
  const user = await getUserById(id)

  if (!user) {
    return next(createError(404, `User with not found`))
  }
}

const addUserController = async (req, res, next) => {
  const { name, email, password } = req.body

  if (
    (typeof name !== 'string') |
    (typeof email !== 'string') |
    (typeof password !== 'string')
  ) {
    return next(
      createError(422, 'Name, Email, and Password must all be string')
    )
  }

  const newUser = { name, email, password }
  const addedUser = await addUser(newUser)

  res.status(201).json(addedUser)
}

module.exports = {
  getUsersController,
  addUserController,
}
