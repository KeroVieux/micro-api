const mongoose = require('mongoose')

mongoose.connect('mongodb://admin:1qCu5fpL@server.hidoge.cn:27018/sandbox')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('we\'re connected!')
})
module.exports = db
