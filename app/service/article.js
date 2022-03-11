const { Service } = require('egg')

class ArticleService extends Service {
  //获取文章列表
  async getList () {
    const { ctx } = this
    const result = await ctx.model.Article.find({isPublish: true})
    return {
      code: 2000,
      data: result,
      message: ''
    }
  }
}

module.exports = ArticleService