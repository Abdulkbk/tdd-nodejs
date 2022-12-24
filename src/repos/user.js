const User = require('../models/user')

const getAllUsers = async () => {
  return await User.find({})
}

const getUserById = async id => {
  return await User.findById(id)
}

const getUserByEmail = async email => {
  return await User.findOne({ email })
}

const addUser = async user => {
  const newUser = new User(user)
  newUser.password = await newUser.encryptPassword(newUser.password)
  return await newUser.save()
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  addUser,
}
