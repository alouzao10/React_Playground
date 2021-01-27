import React, {useState, useEffect} from 'react'

function Info(props) {
    let {name, age, student, employee, hobbies} = props;
    let {snacks} = props;
    let [snack1, snack2, snack3, snack4] = snacks;

    const[status, setStatus] = useState('');

    function doSomething(currStatus) {
        if(currStatus === 'Studying'){
            setStatus('Working')
        } else {
            setStatus('Studying')
        }
    }

    useEffect(() => {
        if(status === 'Working'){
            alert('Back to work.')
        } else if(status === 'Studying') {
            alert('Study and learn something.')
        }
    }, [status])

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
                {hobbies.map((hobby) => (
                    <li key={Math.random() * 10 + 10}>{hobby}</li>
                ))}
            </ul>
            <p>I like to eat {snack1}, {snack2}, {snack3}, and {snack4} everyday!</p>
            <h4>Currently I am: {status}</h4>
            <button onClick={() => doSomething(status)}>Update Status</button>

        </div>
    )
}

export default Info;
