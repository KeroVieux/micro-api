const mongoose = require('mongoose')

const kitty = mongoose.Schema({
  name: String,
})
kitty.methods = {
  grinning() {
    return `${this.name} is grinning`
  },
  beaming() {
    return `${this.name} is beaming`
  },
  rolling() {
    return `${this.name} is rolling`
  },
}

module.exports = kitty
