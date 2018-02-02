const _ = require('lodash')
const Joi = require('joi')
const validation = require('micro-joi')
const { json, send } = require('micro')

const validator = validation(Joi.object({
  foo: Joi.number().required(),
  bar: Joi.number().required(),
}))

module.exports.POST = validator(async (req, res) => {
  if (_.isObject(req.body)) {
    const js = await json(req)
    return send(res, 200, {
      js,
    })
  }
  return send(res, 500, 'My custom error!')
})
