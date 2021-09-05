module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const ArticleSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    publish_time: {
      type: String,
      required: true
    }
  })
  return mongoose.model('Article', ArticleSchema, 'article')
}