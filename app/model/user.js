module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const UserSchema = new Schema({
    user_name: {
      type: String,
      required: true
    },
    nick_name: {
      type: String,
      required: true
    },
    pass_word: {
      type: String,
      required: true
    }
  })
  return mongoose.model('User', UserSchema, 'user')
}