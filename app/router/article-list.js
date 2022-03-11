// 文章相关接口
module.exports = app => {
  const { router, controller } = app
  //文章列表
  router.get('/api/getArticleList', controller.article.getArticleList)
}