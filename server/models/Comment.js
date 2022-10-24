const { Schema, model } = require('mongoose');


const commentSchema = new Schema({
    user_id: {
      type: String,
    },
    commentText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    commentAuthor: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    book_id: {
        type: String,
      },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;