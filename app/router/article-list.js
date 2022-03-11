// 文章相关接口
module.exports = app => {
  const { router, controller } = app
  //文章列表
  router.get('/api/getArticleList', controller.article.getArticleList)
  //封面图列表
  router.get('/api/getCarouselList', controller.article.getCarouselList)
  //通过分类查询文章列表
  router.get('/api/getArticleByClassify', controller.article.getArticleByClassify)
}