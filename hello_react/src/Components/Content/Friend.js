import React from 'react'

function Friend(props) {
    let {person} = props;
    return (
        <div>
            <h1>Say Hello: {person.name}</h1>
        </div>
    )
}

export default Friend
