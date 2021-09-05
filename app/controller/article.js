const Controller = require('egg').Controller

class ArticleController extends Controller {
  async add () {
    const { ctx } = this
    const { userName, nickName, passWord } = ctx.request.body
    ctx.body = await ctx.service.user.add(userName, nickName, passWord)
  }
  async get () {
    const { ctx } = this
    const { userName, passWord } = ctx.request.query
    ctx.body = await ctx.service.user.get(userName, passWord)
  }
}

module.exports = ArticleController