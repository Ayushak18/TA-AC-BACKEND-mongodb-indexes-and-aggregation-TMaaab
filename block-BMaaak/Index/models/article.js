let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let articleSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
});

articleSchema.index({ tags: 1 });
articleSchema.index({ title: 'text' });
articleSchema.index({ title: 'text', description: 'text' });

module.exports = mongoose.model('article', articleSchema);
