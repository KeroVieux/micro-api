const requestIp = require('request-ip')
const { send } = require('micro')

const config = {filter: f => f.indexOf('foo') !== -1}

let match = require('fs-router')(__dirname + '/routes', config)

module.exports = async (req, res) => {
  console.log('ip', requestIp.getClientIp(req))
  console.log('res', res.requests)
  let matched = match(req)
  if (matched) return await matched(req, res)
  send(res, 404, { error: 'Not found' })
}