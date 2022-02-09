const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  eventId: {
    type: Schema.Types.ObjectId,
    ref: 'events'
  },
  index: {
    type: Number,
    required: false
  },
}, {
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Comment = mongoose.model('comments', CommentSchema);