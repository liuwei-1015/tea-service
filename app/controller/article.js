const Controller = require('egg').Controller

class ArticleController extends Controller {
  //文章列表
  async getArticleList () {
    const { ctx } = this
    ctx.body = await ctx.service.article.getList()
  }
}

module.exports = ArticleController