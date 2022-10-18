const { Schema, model } = require('mongoose');


const commentSchema = new Schema({
    user_id: {
      type: String,
    },
    book_id: {
        type: String,
      },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at' // and `updated_at` to store the last updated date
      }
  },
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;