const { json, send } = require('micro')
const _ = require('lodash')
const Joi = require('joi')
const validation = require('micro-joi')

const db = require('../../database/index')

const validator = validation(Joi.object({
  name: Joi.string().alphanum().min(3).max(30)
    .required(),
  birthyear: Joi.number().integer().min(1900).max(2013),
  email: Joi.string().email(),
}))


module.exports.GET = async (req, res) => {
  if (req.query && req.query.id) {
    return db.users.findOne({ _id: req.query.id }, (err, result) => {
      if (err) {
        return send(res, 500, err)
      }
      return send(res, 200, {
        result,
      })
    })
  }
  return send(res, 500, 'id in queryString is required')
}

module.exports.POST = validator(async (req, res) => {
  if (_.isObject(req.body)) {
    const params = await json(req)
    return db.users.insert(params, (err, result) => {
      if (err) {
        return send(res, 500, err)
      }
      return send(res, 200, {
        result,
      })
    })
  }
  return send(res, 500, 'param must be a object')
})
