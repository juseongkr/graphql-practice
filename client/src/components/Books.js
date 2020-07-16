import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { FIND_BOOK } from '../queries'
import { Button } from'@material-ui/core'

const Book = ({ books }) => {
    const [ book, setBook ] = useState(null)
    const [ getBook, result ] = useLazyQuery(FIND_BOOK)
    const showBook = title => getBook({ variables: { titleToSearch: title } })

    useEffect(() => {
        if (result.data) {
            setBook(result.data.findBook)
        }
    }, [result.data])

    if (book) {
        return (
            <div>
                <h2>{ book.title }</h2>
                <div>isbn: { book.isbn }</div>
                <div>published: { book.published }</div>
                <div>author: { book.author }</div>
                <div>genres: { book.genres.join(', ') }</div>
                <Button onClick={ () => setBook(null) }>back</Button>
            </div>
        )
    }

    return (
        <div>
            <h2>Books</h2>
            {
                books.map((b, i) =>
                <div key={ i }>
                    { b.title }
                        <Button onClick={ () => showBook(b.title) }>
                            info
                        </Button>
                    </div>
                )
            }
        </div>
    )
}

export default Book