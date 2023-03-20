require('dotenv').config()
const express = require('express')
const sequelize = require('./db')


const app = express()
const PORT = process.env.PORT || 5000

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(() =>  console.log('Server started on PORT: ', PORT))
  } catch (e) {
    console.log(e)
  }
}

start()