const Datastore = require('nedb')
const db = {}
db.users = new Datastore({
  filename: './database/users.db',
  autoload: true
})

module.exports = db