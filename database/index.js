const Config = require('../argument.config')
const mongoose = require('mongoose')

mongoose.connect(Config.mongoServer)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('we\'re connected!')
})
module.exports = db
