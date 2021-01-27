import {useState, useEffect, useReducer} from 'react';
function GitUser({userLogin}){
    const [data, setData] = useState(null);

    const [checked, toggleCheck] = useReducer((checked) => {
        return !checked
    }, false);

    useEffect(() => {
        fetch(`https://api.github.com/users/${userLogin.user}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error())

    }, [])

    return(
        <>
            <h4>GitHub User</h4>
            <input type="checkbox" value={checked} onChange={toggleCheck} />
            {checked ? 'checked' : 'not checked'}
            {data ? (<><h1>Data For: {userLogin.user}</h1>{JSON.stringify(data)}</>) : (<h5>No Data for User: {userLogin.user}</h5>)}
        </>
    )
}
export default GitUser;