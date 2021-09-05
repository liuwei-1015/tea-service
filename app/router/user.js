'use strict'

module.exports = app => {
  const { router, controller, middleware, config } = app
  router.post('/api/userRegistration', controller.user.add)
  // const jwt = middleware.jwt(config.jwt)
  // router.get('/api/login', jwt, controller.user.get)
  router.get('/api/login', controller.user.get)
}