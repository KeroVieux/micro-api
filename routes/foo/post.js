const _ = require('lodash')
const Joi = require('joi')
const validation = require('micro-joi')
const { send } = require('micro')

const validator = validation(Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30)
    .required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  access_token: [Joi.string(), Joi.number()],
  birthyear: Joi.number().integer().min(1900).max(2013),
  email: Joi.string().email({ minDomainAtoms: 2 }),
}).with('username', 'birthyear').without('password', 'access_token'))

module.exports.POST = validator(async (req, res) => {
  if (_.isObject(req.body)) {
    return send(res, 200, {
      msg: '成功',
      code: 0,
      exception: null,
      data: {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '16b48888-6e20-4133-ba0f-5eeb092dad6b', parameterCode: 'aaa', parameterName: 'aaa', parameterValue: '//wizplant.wizplant.online:2007/Attachment/0ab831b8cc948e82f028a7562bae7646.jpg', remark: 'ffff', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2019-01-21T19:00:31', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2019-01-21T19:00:31', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 5,
      },
    })
  }
  return send(res, 500, 'My custom error!')
})
