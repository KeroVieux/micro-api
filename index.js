const { send } = require('micro')

const match = require('fs-router')(`${__dirname}/routes`)

module.exports = async (req, res) => {
  const matched = match(req)
  if (matched) {
    return await matched(req, res)
  }
  return send(res, 404, { error: 'Api Not found' })
}
