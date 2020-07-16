import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ALL_BOOKS, ADD_BOOK } from '../queries'
import { TextField, Button } from'@material-ui/core'

const BookForm = ({ setError }) => {
    const [ title, setTitle ] = useState('')
    const [ isbn, setIsbn ] = useState(null)
    const [ published, setPublished ] = useState(null)
    const [ author, setAuthor ] = useState('')
    const [ genres, setGenres ] = useState([])

    const [ addBook ] = useMutation(ADD_BOOK, {
        refetchQueries: [ { query: ALL_BOOKS } ],
        onError: error => {
            setError(error.graphQLErrors[0].message)
        }
    })

    const submit = event => {
        event.preventDefault()
        if (title && isbn && published && author && genres) {
            addBook({ variables: { title, isbn, published, author, genres }})
        } else {
            setError('invalid parameter')
        }
        setTitle('')
        setIsbn('')
        setPublished('')
        setAuthor('')
        setGenres([])
    }

    return (
        <div>
            <h2>Add new book</h2>
            <form onSubmit={ submit }>
                <div>
                    title
                    <TextField value={ title } onChange={({ target }) => setTitle(target.value)}/>
                </div>
                <div>
                    isbn
                    <TextField value={ isbn } onChange={({ target }) => setIsbn(Number(target.value))}/>
                </div>
                <div>
                    published
                    <TextField value={ published } onChange={({ target }) => setPublished(Number(target.value))}/>
                </div>
                <div>
                    author
                    <TextField value={ author } onChange={({ target }) => setAuthor(target.value)}/>
                </div>
                <div>
                    genres
                    <TextField value={ genres } onChange={({ target }) => setGenres(target.value.split(','))}/>
                </div>
                <Button type='submit'>add</Button>
            </form>
        </div>
    )
}

export default BookForm