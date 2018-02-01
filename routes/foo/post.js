const { json, send } = require('micro')

module.exports.POST = async (req, res) => {
  const js = await json(req)
  send(res, 200, {
    js,
  })
}