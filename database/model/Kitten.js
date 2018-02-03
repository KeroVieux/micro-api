const mongoose = require('mongoose')
const kittySchema = require('../schema/kitty')

module.exports = mongoose.model('Kitten', kittySchema)
