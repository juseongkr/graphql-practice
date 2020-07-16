const { gql } = require('apollo-server')

const typeDefs = gql`
type Book {
    id: String!
    title: String!
    published: Int!
    author: String!
    genres: [String!]!
}

type Author {
    name: String!
    bookCount: Int!
    birth: Int
}

type Query {
    allBooks(
        author: String,
    ): [Book!]!
    allAuthors(
        name: String,
    ): [Author!]!
    bookCount: Int!
    authorCount: Int!
}

type Mutation {
    addBook(
        title: String!,
        author: String!,
        published: Int!,
        genres: [String!]!,
    ): Book!
    addAuthor(
        name: String!,
        birth: Int,
    ): Author!
    updateAuthorBirth(
        name: String!,
        setBirth: Int!,
    ): Author
    updateBookAuthor(
        title: String!
        setAuthor: String!,
    ): Book
}

`

module.exports = typeDefs