'use strict'

module.exports = app => {
  const { router, controller, middleware, config } = app
  //注册
  router.post('/api/userRegistration', controller.user.add)
  //登录
  router.get('/api/login', middleware.jwt(config.jwt), controller.user.get)
}