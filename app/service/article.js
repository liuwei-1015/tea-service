const { Service } = require('egg')

function createItem(ctx) {
  let index = 0
  const titles = ['送茶礼的寓意是什么 茶叶为什么不能乱送人', '茉莉花茶是什么茶,属于红茶还是绿茶', '白茶致癌是肯定的 喝白茶会致癌吗？', '送茶叶代表什么？“送茶”的几种含义', '核桃分心木泡水喝禁忌及其作用']
  const timer = setInterval(async () => {
    if (index > titles.length - 1) {
      clearInterval(timer)
      return
    }
    await ctx.model.Article.create({
      title: titles[index],
      publishTime: Date.now(),
      visitors: Math.floor(Math.random() * 100),
      isPublish: 1,
      coverImage: index + 1
    })
    index++
  }, 2000)
}

class ArticleService extends Service {
  //获取文章列表
  async getList () {
    const { ctx } = this
    const result = await ctx.model.Article.find({ isPublish: 1 }).sort({ visitors: -1 })
    return {
      code: 2000,
      data: result,
      message: ''
    }
  }
  // 获取带轮播数据
  async getCarouselList () {
    const { ctx } = this
    const result = await ctx.model.Article.find({ isCarousel: 1 })
    return {
      code: 2000,
      data: result,
      message: ''
    }
  }
  //通过分类查询文章列表
  async getArticleByClassify (params) {
    const { ctx } = this
    const result = await ctx.model.Article.find({ isPublish: 1, type: params.type })
    return {
      code: 2000,
      data: result,
      message: ''
    }
  }
}

module.exports = ArticleService