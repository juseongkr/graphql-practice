const { UserInputError } = require('apollo-server')
const Book = require('../models/book')
const Author = require('../models/author')

const resolvers = {
    Query: {
        allBooks: (root, args) => {
            if (args.author) {
                return Book.find({ author: args.author })
            }
            return Book.find({})
        },

        allAuthors: (root, args) => {
            if (args.name) {
                return Author.find({ name: args.name })
            }
            return Author.find({})
        },

        bookCount: () => Book.collection.countDocuments(),
        authorCount: () => Author.collection.countDocuments(),
    },

    Mutation: {
        addBook: async (root, args) => {
            const book = new Book({ ...args })
            try {
                await book.save()
            } catch (err) {
                throw new UserInputError(err.message, {
                    invalidArgs: args,
                })
            }
            return book
        },

        addAuthor: async (root, args) => {
            const author = new Author({ ...args })
            try {
                await author.save()
            } catch (err) {
                throw new UserInputError(err.message, {
                    invalidArgs: args,
                })
            }
            return author
        },

        updateAuthorBirth: async (root, args) => {
            const author = await Author.findOne({ name: args.name })
            author.birth = args.setBirth

            try {
                await author.save()
            } catch (err) {
                throw new UserInputError(err.message, {
                    invalidArgs: args,
                })
            }
            return author
        },

        updateBookAuthor: async (root, args) => {
            const book = await Book.findOne({ title: args.title })
            book.author = args.setAuthor

            try {
                await book.save()
            } catch (err) {
                throw new UserInputError(err.message, {
                    invalidArgs: args,
                })
            }
            return book
        }
    }
}

module.exports = resolvers