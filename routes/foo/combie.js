const { json, send } = require('micro')

const methods = {
  async GET(req, res) {
    send(res, 200, { params: req.params, query: req.query })
  },
  async POST(req, res) {
    const js = await json(req)
    send(res, 200, {
      js,
    })
  }
}

module.exports = methods