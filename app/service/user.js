const Service = require('egg').Service

class UserService extends Service {
  async add () {
    const { ctx } = this
    const { userName, nickName, passWord } = ctx.request.body
    const result = await ctx.model.User.find({ 'user_name': userName })
    if (result.length) {
      return {
        code: -1,
        message: '该用户名已经注册！'
      }
    } else {
      const info = await ctx.model.User.create({
        user_name: userName,
        nick_name: nickName,
        pass_word: passWord
      })
      if (info) {
        return {
          code: 0,
          message: '注册成功！'
        }
      }
      return {
        code: -1,
        message: '注册失败！'
      }
    }
  }
}

module.exports = UserService