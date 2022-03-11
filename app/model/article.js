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
    }
  })
  return mongoose.model('ArticleList', ArticleListSchema, 'articleList')
}