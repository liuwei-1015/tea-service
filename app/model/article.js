module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const ArticleListSchema = new Schema({
    //文章标题
    title: {
      type: String,
      required: true
    },
    //发布时间
    publishTime: {
      type: String,
      required: true
    },
    //浏览人数
    visitors: {
      type: Number,
      required: true
    },
    //是否发布
    isPublish: {
      type: Number,
      required: true
    },
    //分类
    type: {
      type: String,
      required: false
    },
    //封面图
    coverImage: {
      type: Number,
      required: false
    },
    //是否首页轮播
    isCarousel: {
      type: Number,
      required: false
    }
  })
  return mongoose.model('ArticleList', ArticleListSchema, 'articleList')
}