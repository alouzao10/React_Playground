import React from 'react'

function Info(props) {
    let {name, age, student, employee, hobbies} = props;
    return (
        <div>
            <h3>Some Info About {name}</h3>
            <ol>
                <li>Is {age} years old.</li>
                <li>{student ? ('Is') : ('Isn\'t')} a student.</li>
                <li>{employee ? ('Is') : ('Isn\'t')} an employee.</li>
            </ol>
            <h4>Hobbies</h4>
            <ul>
                {hobbies.map((hobby) => {
                    return <li>{hobby}</li>
                })}
            </ul>

        </div>
    )
}

export default Info;
