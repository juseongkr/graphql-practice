import { gql } from '@apollo/client'

export const ALL_AUTHORS = gql`
query {
    allAuthors {
        name
        birth
    }
}
`

export const ALL_BOOKS = gql`
query {
    allBooks {
        title
        published
        author
        genres
    }
}
`

export const BOOK_COUNT = gql`
query {
    bookCount
}
`

export const AUTHOR_COUNT = gql`
query {
    authorCount
}
`

export const FIND_AUTHOR = gql`
query findAuthorByName($nameToSearch: String!) {
    findAuthor(name: $nameToSearch) {
        name
        ssn
        birth
    }
}
`

export const FIND_BOOK = gql`
query findBookByName($titleToSearch: String!) {
    findBook(title: $titleToSearch) {
        isbn
        title
        published
        author
        genres
    }
}
`

export const ADD_AUTHOR = gql`
mutation addAuthor($ssn: Int!, $name: String!, $birth: Int) {
    addAuthor(
        name: $name,
        ssn: $ssn,
        birth: $birth,
    ) {
        name
        ssn
        birth
    }
}
`

export const ADD_BOOK = gql`
mutation addBook($title: String!, $isbn: Int!, $published: Int!, $author: String!, $genres: [String!]!) {
    addBook(
        title: $title,
        isbn: $isbn,
        author: $author,
        published: $published,
        genres: $genres
    ) {
        title
        isbn
        published
        author
        genres
    }
}
`