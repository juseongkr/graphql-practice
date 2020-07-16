import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { FIND_AUTHOR } from '../queries'
import { Button } from'@material-ui/core'

const Authors = ({ authors }) => {
    const [ author, setAuthor ] = useState(null)
    const [ getAuthor, result ] = useLazyQuery(FIND_AUTHOR)
    const showAuthor = name => getAuthor({ variables: { nameToSearch: name } })

    useEffect(() => {
        if (result.data) {
            setAuthor(result.data.findAuthor)
        }
    }, [result.data])

    if (author) {
        return (
            <div>
                <h2>{ author.name }</h2>
                <div>ssn: { author.ssn }</div>
                <div>birth: { author.birth }</div>
                <Button onClick={ () => setAuthor(null) }>back</Button>
            </div>
        )
    }

    return (
        <div>
            <h2>Authors</h2>
            {
                authors.map((a, i) =>
                    <div key={ i }>
                        { a.name }
                        <Button onClick={ () => showAuthor(a.name) }>
                            info
                        </Button>
                    </div>
                )
            }
        </div>
    )
}

export default Authors