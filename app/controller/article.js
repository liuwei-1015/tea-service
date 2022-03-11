const Controller = require('egg').Controller

class ArticleController extends Controller {
  //文章列表
  async getArticleList () {
    const { ctx } = this
    ctx.body = await ctx.service.article.getList()
  }
  //获取轮播图列表
  async getCarouselList () {
    const { ctx } = this
    ctx.body = await ctx.service.article.getCarouselList()
  }
  //通过分类查询文章列表
  async getArticleByClassify () {
    const { ctx } = this
    ctx.body = await ctx.service.article.getArticleByClassify(ctx.query)
  }
}

module.exports = ArticleController