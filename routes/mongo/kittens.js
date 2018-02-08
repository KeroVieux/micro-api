const { send } = require('micro')
const _ = require('lodash')
const Joi = require('joi')
const validation = require('micro-joi')

const Kitten = require('../../database/model/Kitten')

const validator = validation(Joi.object({
  name: Joi.string().min(3).max(30)
    .required(),
}))


module.exports.GET = async (req, res) => {
  if (req.query && req.query.id) {
    return await Kitten.findById(req.query.id, (err, result) => {
      if (err) {
        return send(res, 500, err)
      }
      return send(res, 200, {
        result,
      })
    })
  }
  return await Kitten.find((err, result) => {
    if (err) {
      return send(res, 500, err)
    }
    return send(res, 200, {
      result,
    })
  })
}

module.exports.POST = validator(async (req, res) => {
  if (_.isObject(req.body) && req.body.name) {
    const kittenModel = new Kitten({ name: req.body.name })
    return kittenModel.save((err, result) => {
      if (err) {
        return send(res, 500, err)
      }
      return send(res, 200, {
        result,
        grinning: kittenModel.grinning(),
        beaming: kittenModel.beaming(),
        rolling: kittenModel.rolling(),
      })
    })
  }
  return send(res, 500, 'param must be a object')
})
