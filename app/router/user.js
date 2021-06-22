'use strict'

module.exports = app => {
  const { router, controller } = app
  router.post('/api/userRegistration', controller.user.add)
}