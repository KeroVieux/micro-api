const mongoose = require('mongoose')

mongoose.connect('mongodb://sandUser:1qCu5fpL@112.124.57.15:27018/sandbox')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('we\'re connected!')
})
module.exports = db
