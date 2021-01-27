import React from 'react'

function Friend(props) {
    let {person} = props;
    return (
        <div key={person.id}> 
        {person.isFriend ? (    
            <div>    
                <hr />
                <h1>Say Hello: {person.name}</h1>
                <p>{person.name} is {person.age} years old and IS a friend</p>
            </div>
        ) : (      
            <div>  
                <hr />
                <h1>Say Hello: {person.name}</h1>
                <p>{person.name} is {person.age} years old and IS NOT a friend</p>
            </div>
        )}
        </div>
    )
}

export default Friend
