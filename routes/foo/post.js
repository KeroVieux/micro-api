const { send } = require('micro')

module.exports.POST = async (req, res) => {
  send(res, 200, { params: req.params, query: req.query })
}
