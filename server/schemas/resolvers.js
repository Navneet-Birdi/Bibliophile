const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('books');
    },
    // returns current reading books
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('books');
    },
    books: async (parent, { username }) => {

      //TODO: UPDATE BELOW
      const params = username ? { username } : {};
      return Book.find(params).sort({ createdAt: -1 });
    },
    book: async (parent, { Id }) => {
      return Book.findOne({ _id: Id });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('s');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addCurrentBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { books: bookId } }
        );
        return user;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addBook: async (parent, { authors, title, image, isbn, description }, context) => {

        const book = await Book.create({
          authors,
          title,
          image,
          isbn,
          description
        });

        return book;
    },
    saveBookToUser: async (parent, { authors, title, image, isbn, description }, context) => {

      const book = await Book.create({
        authors,
        title,
        image,
        isbn,
        description
      });

      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { books: book } }
      );

      return book;
  },
    addComment: async (parent, { bookId, commentText }, context) => {
      if (context.user) {
        return Book.findOneAndUpdate(
          { _id: bookId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const book = await Book.findOneAndDelete({
          _id: bookId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { books: book._id } }
        );

        return book;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { Id, commentId }, context) => {
      if (context.user) {
        return Book.findOneAndUpdate(
          { _id: Id },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
