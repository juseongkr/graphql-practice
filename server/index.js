const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI

const Book = require('./models/book')
const Author = require('./models/author')

const authors = require('./data/authors')
const books = require('./data/books')

const typeDefs = require('./gql/type')
const resolvers = require('./gql/resolver')

mongoose.set('useFindAndModify', false)
mongoose.set('useUnifiedTopology', true)

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
}).then(async () => {
    console.log('DB Connected')
    try {
        await Book.deleteMany({})
        await Author.deleteMany({})
    } catch (err) {
        console.error(err);
    }
    
    for (let book of books) {
        await new Book({ ...book }).save()
    }
    for (let author of authors) {
        await new Author({ ...author }).save()
    }
}).catch(error => {
    console.error('Connection Error', error)
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
})
  
server.listen().then(({ url }) => {
    console.log(`Server is running... ${url}`)
})