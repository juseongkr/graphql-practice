import React from 'react'

const Notification = ({ errMessage }) => {
    if (!errMessage) {
        return null
    }

    return (
        <div style={ { color: 'red' } }>
            { errMessage }
        </div>
    )
}

export default Notification