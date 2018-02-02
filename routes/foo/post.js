const _ = require('lodash')
const { json, send } = require('micro')

module.exports.POST = async (req, res) => {
  if (_.isObject(req.body)) {
    const js = await json(req)
    return send(res, 200, {
      js,
    })
  }
  return send(res, 500, 'My custom error!')
}
