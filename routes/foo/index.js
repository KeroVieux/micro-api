const cors = require('micro-cors')()
const { json, send } = require('micro')
const Joi = require('joi')
const validation = require('micro-joi')

const validator = validation(Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30)
    .required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  access_token: [Joi.string(), Joi.number()],
  birthyear: Joi.number().integer().min(1900).max(2013),
  email: Joi.string().email({ minDomainAtoms: 2 }),
}).with('username', 'birthyear').without('password', 'access_token'))

const methods = {
  async GET(req, res) {
    send(res, 200, {
      msg: '成功',
      code: 0,
      data: []
      )
  },
  POST1: validator(async (req, res) => {
    return send(res, 200, {
      msg: '成功',
      code: 0,
      data: await json(req),
    })
  }),
  POST: cors((req, res) => { return send(res, 200, { a: 1 }) }),
}

module.exports = methods
