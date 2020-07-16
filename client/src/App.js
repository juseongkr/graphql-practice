import React, { useState } from 'react';
import { useQuery } from '@apollo/client'
import Authors from './components/Authors'
import Books from './components/Books'
import AuthorForm from './components/AuthorForm'
import BookForm from './components/BookForm'
import Notification from './components/Notification'
import { ALL_AUTHORS, ALL_BOOKS } from './queries'
import { Container } from'@material-ui/core'

const App = () => {
  const [ errMessage, setErrMessage ] = useState(null)
  const author_result = useQuery(ALL_AUTHORS)
  const book_result = useQuery(ALL_BOOKS)

  if (author_result.loading || book_result.loading) {
    return <div>data loading...</div>
  }
  
  const notify = msg => {
    setErrMessage(msg)
    setTimeout(() => {
      setErrMessage(null)
    }, 5000)
  }

  return (
    <div>
      <Container>
        <Notification errMessage={ errMessage }/>
        <Authors authors={ author_result.data.allAuthors }/>
        <Books books={ book_result.data.allBooks }/>
        <AuthorForm setError={ notify }/>
        <BookForm setError={ notify }/>
      </Container>
    </div>
  )
}

export default App