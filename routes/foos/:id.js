const { send } = require('micro')

module.exports = async (req, res) => {
  send(res, 200, {
    id: req.params.id,
  })
}