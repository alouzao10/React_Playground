import { useState, useEffect } from "react";

function List({toDos}){
    const [checked, setCheck] = useState(false);

    const [phrase1, setP1] = useState("");
    const [phrase2, setP2] = useState("");

    function checkList(){
        if(checked === true) {
            setCheck(false);
        } else {
            let allDone = true;
            toDos.forEach(toDo => {
                if(toDo.completed === false){
                    allDone = false;
                }
            });
            console.log(allDone)
            setCheck(allDone);
        }
    }

    function updateToDo(toDo){
        toDo.completed = !toDo.completed;
        console.log(toDo.task, toDo.completed)

    }

    function getPhrase(e){
        e.preventDefault();
        let phrase = e.target.name;
        if(phrase === "phrase1"){
            setP1(e.target.value);
        } else if(phrase === "phrase2"){
            setP2(e.target.value);
        }
    }

    useEffect(() => {
        console.log("Phrase1 = " + phrase1)
    }, [phrase1])

    useEffect(() => {
        console.log("Phrase2 = " + phrase2)
    }, [phrase2])

    return(
        <>
            <h3>My ToDo List:</h3>
            <div><input type='checkbox' value={checked} checked={checked} onChange={checkList}/> All Done?
            {checked ? (<h3>YES</h3>) : (<h3>NO</h3>)}
            </div>
            {toDos.map((toDo) => (
                <div key={toDo.id}><input type='checkbox' value={toDo.completed}  onChange={() => updateToDo(toDo)}/>{toDo.task}</div>
            ))}

            <label>Favorite Phrase <input value={phrase1} name="phrase1" onChange={(e) => getPhrase(e)}/></label> <br />
            <label>Other Favorite Phrase <input value={phrase2} name="phrase2" onChange={(e) => getPhrase(e)}/></label>
        </>
    )
}
export default List;