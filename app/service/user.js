const Service = require('egg').Service

class UserService extends Service {
  async add () {
    const { ctx } = this
    const { userName, nickName, passWord } = ctx.request.body
    const result = await ctx.model.User.create({
      user_name: userName,
      nick_name: nickName,
      pass_word: passWord
    }, (err) => {
      this.logger.warn(err)
    })
    return result
  }
}

module.exports = UserService