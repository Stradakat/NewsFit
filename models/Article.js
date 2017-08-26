// mongoose
var mongoose = require('mongoose');
// Schema class
var Schema = mongoose.Schema;

// article schema
var ArticleSchema = new Schema({
  // title is required
  title: {
    type:String,
    required:true
  },
  // link is required
  link: {
    type:String,
    required:true
  },
  // this only saves one note's ObjectId. ref refers to the Note model.
  note: {
      type: Schema.Types.ObjectId,
      ref: 'Note'
  }
});

// Create the Article model w/ArticleSchema
var Article = mongoose.model('Article', ArticleSchema);

// exports model
module.exports = Article;