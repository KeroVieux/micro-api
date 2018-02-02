const { send } = require('micro')

const config = {
  filter(f) {
    return f.indexOf('foo') !== -1
  },
}
const match = require('fs-router')(`${__dirname}/routes`, config)

module.exports = async (req, res) => {
  const matched = match(req)
  if (matched) {
    return await matched(req, res)
  }
  return send(res, 404, { error: 'Not found' })
}
