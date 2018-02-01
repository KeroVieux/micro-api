const { send } = require('micro')

const config = {filter: f => f.indexOf('foo') !== -1}

let match = require('fs-router')(__dirname + '/routes', config)

module.exports = async (req, res) => {
  let matched = match(req)
  if (matched) return await matched(req, res)
  send(res, 404, { error: 'Not found' })
}