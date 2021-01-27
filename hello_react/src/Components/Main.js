import Info from "./Content/Info";
import Friend from "./Content/Friend";
import List from "./Content/List";
import GitUser from "./Content/GitUser";

function Main(){

let hobbies = ['walk', 'run', 'music', 'movies'];
let people = [
    {id: 1, name: 'Jim', age: 56, isFriend: false}, 
    {id: 2, name: "Sally", age: 87, isFriend: true}, 
    {id: 3, name: 'Sue', age: 45, isFriend: true}, 
    {id: 4, name: 'Danny', age: 32, isFriend: false}
];
let snacks = ['candy', 'fruit', 'chips', 'popcorn'];

let toDos = [
    {id: 1, task: 'Wash Dishes', completed: false},
    {id: 2, task: 'Study Web Dev', completed: false},
    {id: 3, task: 'Feed The Cat', completed: false}
]

const userLogin = {user: 'alouzao10', pass: 'ABC123'}

    return(
        <div>
            <h1>Hello Home Page</h1>   
            <Info name="Mike" age={34} student={false} employee={true} hobbies={hobbies} snacks={snacks}/> 
            {people.map((person) => (
                <Friend person={person} key={person.id}/>
            ))}
            <List toDos={toDos} />
            <GitUser userLogin={userLogin}/>

        </div>
    )
}

export default Main;