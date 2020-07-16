const { gql } = require('apollo-server')

const typeDefs = gql`
type Book {
    isbn: Int
    title: String!
    published: Int!
    author: String!
    genres: [String!]!
}

type Author {
    ssn: Int
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
    findBook(
        title: String!
    ): Book
    findAuthor(
        name: String!
    ): Author
}

type Mutation {
    addBook(
        isbn: Int!,
        title: String!,
        author: String!,
        published: Int!,
        genres: [String!]!,
    ): Book!
    addAuthor(
        name: String!,
        ssn: Int!,
        birth: Int,
    ): Author!
    updateAuthorBirth(
        name: String!,
        setBirth: Int!,
    ): Author
    updateBookAuthor(
        isbn: Int!,
        title: String!,
        setAuthor: String!,
    ): Book
}

`

module.exports = typeDefs