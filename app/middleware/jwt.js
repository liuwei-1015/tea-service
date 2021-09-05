module.exports = options => {
  return async function jwt (ctx, next) {
    const token = ctx.request.header.authorization.substring(7)
    let userInfo
    if (token) {
      try {
        // 解码token
        userInfo = ctx.app.jwt.verify(token, options.secret)
        await next()
      } catch (error) {
        ctx.status = 401
        ctx.body = {
          code: 401,
          data: false,
          message: error.message
        }
        return
      }
    } else {
      ctx.status = 401
      ctx.body = {
        code: 401,
        data: false,
        message: '请传入token'
      }
      return
    }
  }
}