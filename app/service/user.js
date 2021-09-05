const Service = require('egg').Service

class UserService extends Service {
  async add (userName, nickName, passWord) {
    const { ctx } = this
    const userInfo = await ctx.model.User.find({user_name: userName})
    if (userInfo.length) {
      return {
        code: 2000,
        data: false,
        message: '该用户名已被使用！'
      }
    }
    const result = await ctx.model.User.create({
      user_name: userName,
      nick_name: nickName,
      pass_word: passWord
    }, (err) => {
      console.log(err, 'err')
      this.logger.warn(err)
    })
    return {
      code: 2000,
      data: true,
      message: '注册成功！'
    }
  }
  async get (userName, passWord) {
    const { ctx } = this
    const result = await ctx.model.User.find({user_name: userName})
    if (result.length) {
      const pw = result[0].pass_word
      if (pw === passWord) {
        const token = ctx.app.jwt.sign({
          userName: userName,
          passWord: passWord
        }, this.app.config.jwt.secret, {
          expiresIn: '60m', // 时间根据自己定，具体可参考jsonwebtoken插件官方说明
        })
        return {
          code: 2000,
          data: token,
          message: '登录成功！'
        }
      }
      return {
        code: 2000,
        data: false,
        message: '用户名密码输入有误！'
      }
    }
    return {
      code: 2000,
      data: false,
      message: '用户名密码输入有误！'
    }
  }
}

module.exports = UserService