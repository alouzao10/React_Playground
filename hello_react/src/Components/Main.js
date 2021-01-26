import Info from "./Content/Info";
import Friend from "./Content/Friend"

function Main(){

let hobbies = ['walk', 'run', 'music', 'movies'];
let people = [{id: 1, name: 'Jim', age: 56}, {id: 2, name: "Sally", age: 87}, {id: 3, name: 'Sue', age: 45}, {id: 4, name: 'Danny', age: 32}];

    return(
        <div>
            <h1>Hello Home Page</h1>   
            <Info name="Mike" age={34} student={false} employee={true} hobbies={hobbies}/> 
            {people.map((person) => {
                return <Friend person={person}/>
            })}

        </div>
    )
}

export default Main;