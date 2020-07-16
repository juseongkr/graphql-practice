import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ALL_AUTHORS, ADD_AUTHOR } from '../queries'
import { TextField, Button } from'@material-ui/core'

const AuthorForm = ({ setError }) => {
    const [ name, setName] = useState('')
    const [ ssn, setSsn ] = useState(null)
    const [ birth, setBirth ] = useState(null)
    const [ addAuthor ] = useMutation(ADD_AUTHOR, {
        refetchQueries: [ { query: ALL_AUTHORS } ],
        onError: error => {
            setError(error.graphQLErrors[0].message)
        }
    })

    const submit = event => {
        event.preventDefault()
        if (name && ssn && birth) {
            addAuthor({ variables: { name, ssn, birth } })
        } else {
            setError('invalid parameter')
        }
        setName('')
        setSsn('')
        setBirth('')
    }

    return (
        <div>
            <h2>Add new author</h2>
            <form onSubmit={ submit }>
                <div>
                    name
                    <TextField value={ name } onChange={({ target }) => setName(target.value)}/>
                </div>
                <div>
                    ssn
                    <TextField value={ ssn } onChange={({ target }) => setSsn(Number(target.value))}/>
                </div>
                <div>
                    birth
                    <TextField value={ birth } onChange={({ target }) => setBirth(Number(target.value))}/>
                </div>
                <Button type='submit'>add</Button>
            </form>
        </div>
    )
}

export default AuthorForm