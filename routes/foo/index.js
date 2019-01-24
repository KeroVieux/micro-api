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
      data: [{
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '16b48888-6e20-4133-ba0f-5eeb092dad6b', parameterCode: 'aaa', parameterName: 'aaa', parameterValue: '//wizplant.wizplant.online:2007/Attachment/0ab831b8cc948e82f028a7562bae7646.jpg', remark: 'ffff', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2019-01-21T19:00:31', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2019-01-21T19:00:31', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 5,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '2ef5dd02-7ef2-40c5-8d0e-c9847c002eef', parameterCode: 'appId', parameterName: 'appId', parameterValue: '1d47639f-b0bd-4438-ba78-0921a7af0be8', remark: null, parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-10-09T17:30:33', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-10-09T17:30:33', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 0,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: 'a4bfdf72-8beb-4a91-998b-00d797171978', parameterCode: 'equipUrl', parameterName: 'easc关于设备接口的base url', parameterValue: 'http://rydw.wizplant.online:7435', remark: null, parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-11-21T17:23:14', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-11-21T17:43:27', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 0,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: 'e71af3fa-5add-4e2f-a151-cc10c62b2507', parameterCode: 'isEnableClientInModelCenter', parameterName: 'isEnableClientInModelCenter', parameterValue: 'isEnableClientInModelCenter', remark: '模型中心是否显示启动客户端按钮，值为isEnableClientInModelCenter时显示按钮', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-12-19T20:45:52', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-12-20T09:47:38', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 1,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: 'f1aa835e-f14c-4252-b4c0-809257377873', parameterCode: 'logo_mini', parameterName: 'logo_mini', parameterValue: '/Attachment/f800bec1ce603a2b4e97dc0deebffb00.png', remark: '收起侧边栏显示的logo', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-11-16T11:45:45', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2019-01-21T19:38:32', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 5,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: 'cf0436df-98f1-41f9-ab30-e2c4846a747c', parameterCode: 'logo_regular', parameterName: 'logo_regular', parameterValue: '/Attachment/04ea13574996b1c0e86e964b622edd7c.png', remark: '展开侧边栏显示的logo', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-11-16T11:45:16', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2019-01-21T19:38:24', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 5,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '0403436b-ae3b-4c8d-8504-065157184840', parameterCode: 'code', parameterName: 'name', parameterValue: '0e89c1da-09eb-48b8-bf39-a5b593318751', remark: '备注', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2019-01-23T10:54:55', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2019-01-23T10:54:55', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 3,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '55aca03b-7483-46bc-928a-dd689fa26a3d', parameterCode: 'playerServer', parameterName: 'playerServer', parameterValue: 'wp2ws.wizplant.online:9001', remark: 'player的服务端地址', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-11-19T11:43:55', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2019-01-19T16:29:20', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 1,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '49e4f2aa-c5b3-42f4-badc-a98d57df5579', parameterCode: 'test1', parameterName: 'test12', parameterValue: '4A58C2D0-3492-43CD-AA24-6D406B0EA149', remark: 'test1', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-10-25T10:25:47', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-10-25T10:55:42', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 4,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: 'b235c466-9795-4dc4-9599-92ace6f214ed', parameterCode: 'userLocationBackground', parameterName: 'userLocationBackground', parameterValue: '//wizplant.wizplant.online:2007/Attachment/86909b19952e66932c127fc7b0a976e1.jpg', remark: '人员定位背景图', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-12-28T10:00:30', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-12-28T10:20:17', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 5,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '8736c265-9148-40b0-b10a-b0b89c286528', parameterCode: 'WIZ_TALK_API', parameterName: 'WIZ_TALK_API', parameterValue: 'http://192.168.1.91:6080', remark: '人员档案模块，移动端人员增删改接口base url', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-12-11T11:27:07', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2019-01-22T10:19:58', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 1,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: 'f596a0b5-7db2-4b55-98c6-0654965d568b', parameterCode: 'changeTokenApi', parameterName: '从地址栏中获取token接着将token调用接口转换token的api', parameterValue: 'http://wizplant.online:2002/loginbytoken', remark: null, parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-11-29T14:49:59', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-11-29T19:12:28', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 0,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '2b6fa998-9571-4493-b728-717f10b0df78', parameterCode: 'TagClass_Building_Type', parameterName: '单体/装置类别', parameterValue: 'cfd1a5f1-3eed-4fa6-8e35-364f990ea81a', remark: '单体类型', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-09-13T14:52:20', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-09-14T11:46:05', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 2,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: 'e3067626-2487-4c84-8047-af32f6ed0df6', parameterCode: 'SYS_Login_Name', parameterName: '登录界面文本', parameterValue: 'XXXXXX', remark: '在系统登录界面上的名称【现在WIZ PLANT几个字写在图片上】，希望支持css的写法，比如可以在此处控制大小，样式。', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-09-13T14:47:19', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-09-19T20:35:52', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 1,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: 'ba0df3a0-46f2-4efe-8f65-2a7779e0140b', parameterCode: 'qrCodeApi', parameterName: '二维码api请求地址', parameterValue: 'http://wizplant.wizplant.online:2010', remark: null, parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-11-07T14:25:29', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-12-21T13:50:31', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 0,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '2ed4c278-e37b-4c6c-9a33-54a16bcadc2e', parameterCode: 'qrCodeUrl', parameterName: '二维码下载地址', parameterValue: 'http://vue.wizplant.online:8086/static/qrCode/home.html', remark: null, parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-10-12T17:44:56', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2019-01-22T17:22:07', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 0,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '4a0996f2-cdcd-4204-ab7f-32c834e1f494', parameterCode: 'wizint_swith', parameterName: '隔离开关', parameterValue: 'http://www.baidu.com', remark: null, parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-12-04T22:42:44', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-12-04T22:42:44', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 1,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: 'b2a55e99-bbf7-4bb2-ae23-310c0e3d6883', parameterCode: 'wizinte_monitor', parameterName: '唤起视频监控程序', parameterValue: 'http://nwplant.wizplant.online:5580/cameras/index.html', remark: 'http://nwplant.wizplant.online:5580/Wizintepage/monitor', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-11-07T13:27:50', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-11-19T14:17:52', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 0,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '4a721237-acbe-4363-9182-849e8a7633de', parameterCode: 'modelInstallUrl', parameterName: '模型安装包下载地址', parameterValue: 'http://www.baidu.com', remark: null, parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-11-29T10:30:24', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-11-29T10:30:24', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 0,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: 'af0b7e26-4fd2-4114-8424-18a54dd989c5', parameterCode: 'MODELTYPE', parameterName: '模型交互', parameterValue: '0', remark: '判断与模型交互是否带‘/’ 1没有 !== 1 有', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-10-09T16:52:50', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-10-09T16:52:50', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 0,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '83acf426-2cdc-47e9-9d9e-9af24c3cf98d', parameterCode: 'modelCenter', parameterName: '模型中心', parameterValue: 'nonstandard', remark: null, parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-10-09T17:11:45', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2019-01-02T16:08:53', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 0,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '3f6bff95-b75d-4645-924e-aa73777fb2ba', parameterCode: 'nfdwServer', parameterName: '南网集成服务index', parameterValue: 'http://nwplant.wizplant.online:5580/wizplant-home/index.html', remark: '南网集成服务index页面', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-10-26T14:50:05', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-10-26T14:50:05', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 1,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: 'a752fb7a-bfd3-4e65-bfa2-919ced7d2a8c', parameterCode: 'DocClass_CrashReport_Type', parameterName: '碰撞报告文档类别', parameterValue: 'e03ff153-059f-405e-b59a-950385d010c7', remark: 'Xxxxx-1111-1111;xxx;xx', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-09-13T14:54:41', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-09-13T14:54:41', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 3,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '4aa1b7fa-5e4f-4d50-821b-04f2608b2357', parameterCode: 'DocClass_3DModel_Type', parameterName: '三维模型位号类别', parameterValue: '88455a63-cb9d-41af-b7e8-4181b828cbd5', remark: 'Xxxxx-1111-1111', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-09-13T14:53:14', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-10-19T11:05:05', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 3,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '9b4a64f6-54d0-4733-800b-26c9ce7ee48b', parameterCode: 'cameraClassId', parameterName: '摄像头类别', parameterValue: '6821cee8-e12e-40a0-bb1e-03f54982016c', remark: null, parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-10-16T17:08:25', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-10-19T14:05:48', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 1,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '16e851c5-585f-4cb4-831f-7ccc3ef461ba', parameterCode: 'TagClass_Monitor_Type', parameterName: '视频监控位号类别', parameterValue: '6710e811-8725-433f-870f-b8c189433ef4', remark: '视频监控的类别', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-09-13T14:51:38', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-09-13T14:51:38', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 2,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '297721c8-2f33-4bfc-94f6-f42a658973d7', parameterCode: 'search', parameterName: '首页搜索', parameterValue: 'nonstandard0', remark: '是否切换全文检索', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-12-21T09:45:54', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-12-27T17:04:08', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 0,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: 'b20c3c3e-049f-4fe3-a001-1cd8b02e17f8', parameterCode: 'SYS_Login_Background', parameterName: '系统登录背景', parameterValue: '/Attachment/35f1afdf7f0e703809c179ed471c2ce7.jpg', remark: '5f1afdf7f0e703809c179ed471c2ce7.jpg', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-09-29T11:50:38', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2019-01-21T19:31:16', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 5,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: 'b448dd83-762f-45f5-b211-4c92b8237de7', parameterCode: 'SYS_Name', parameterName: '系统名称', parameterValue: '三维数字化信息管理平台', remark: '登陆后，在title的名称', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-09-13T14:36:22', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-12-10T10:34:14', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 1,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '4f63f19b-a1f9-484c-92b5-ce00cd8fdca2', parameterCode: 'initPage', parameterName: '页面初始化', parameterValue: '/', remark: '初始化路由55', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-10-09T15:00:09', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-12-17T00:10:45', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 0,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '43a0460f-194e-4fcb-9d13-ca3efefa6f7f', parameterCode: 'mobile_area_content', parameterName: '移动端两票情况刷新时间', parameterValue: '6000', remark: null, parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-11-14T11:31:57', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-11-14T13:55:19', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 0,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: 'f1bbba16-a6d1-4b9e-9db3-256b35f722e6', parameterCode: 'mobile_area', parameterName: '移动端区域列表刷新时间', parameterValue: '600000', remark: null, parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-11-14T11:30:20', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-12-29T18:28:12', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 0,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '80e4e1d4-a408-4f80-9818-f3dd48aedcaa', parameterCode: 'mobile_alarm', parameterName: '移动端刷新报警列表时间', parameterValue: '6000', remark: null, parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-11-14T10:43:18', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-11-14T13:44:35', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 0,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '4c1d8a94-2dd3-4d45-8c0f-716047207d56', parameterCode: 'DocClass_MonthlyReport_Type', parameterName: '月报文档类别', parameterValue: '18dc47a0-9dbe-4559-b22a-b94aa1c55f44', remark: null, parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-09-13T14:55:13', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-09-13T14:55:13', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 3,
      }, {
        createdUserName: 'admin', lastModifiedUserName: 'admin', id: '5b9fb3a7-f749-413f-bb15-0e0cd693b1be', parameterCode: 'DocClass_WeeklyReport_Type', parameterName: '周报文档类别', parameterValue: '83bfe0a8-cec8-4895-9d32-17d7f73380ed', remark: 'http://wizplant.wizplant.online:2007/file/getfilecontentasync/51e5524c03d40909e3825bfdf40eeb42', parentId: '00000000-0000-0000-0000-000000000000', version: 0, status: 0, createdTime: '2018-09-13T14:55:54', createdUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', lastModifiedTime: '2018-09-29T17:03:20', lastModifiedUser: 'bc4ba096-ac22-4f68-b43d-9499679ede7a', parameterType: 3,
      }],
      page: {
        pageSize: 999, pageNo: 1, recordCount: 35, pageCount: 1,
      },
    })
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
