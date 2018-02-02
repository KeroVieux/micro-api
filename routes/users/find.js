const { json, send } = require('micro')
const _ = require('lodash')

const db = require('../../database/index')

module.exports.POST = async (req, res) => {
  if (_.isObject(req)) {
    const params = await json(req)
    return db.users.find(params, (err, result) => {
      if (err) {
        return send(res, 500, err)
      }
      return send(res, 200, {
        result,
      })
    })
  }
  return send(res, 500, req)
}