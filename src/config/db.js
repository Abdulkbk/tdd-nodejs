const mongoose = require('mongoose')
const { logger } = require('./logging')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan)
    logger.info(`MongoDB connected: ${conn.connection.host}`)
  } catch (err) {
    console.log(err)
    logger.fatal(`${err}`)
    process.exit(1)
  }
}

module.exports = connectDB
