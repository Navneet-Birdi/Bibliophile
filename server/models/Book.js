const { Schema } = require('mongoose');

const bookSchema = new Schema({
    authors: [
        {
            type: String,
        },
    ],
    title: [
        {
            type: String,
            required: true,
        },
    ],
    image: [
        {
         type: String,
        }, 
    ],
    isbn: [
        {
            type: String,
        },
    ],
    description: [
        {
            type: String,
        },
    ],
    bookId: [

    ]
});

module.exports = bookSchema;