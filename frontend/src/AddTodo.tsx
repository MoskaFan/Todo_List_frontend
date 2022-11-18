
import {ChangeEvent, useState} from "react";

type AddTodoProps = {
    text: string,
    addElement(description: string): void
}
//ein event das jedes Mal die Todo-Beschreibung aktualisiert
// ein event das gefeuert wird, wenn tatsächlich addTodo aufgerufen wird
export default function AddTodo(props: AddTodoProps){


    const [newTodo, setNewTodo] = useState("");



    const addNewTodo = (text: string)=>(
        setNewTodo(newTodo.concat(text)));


    const userTextSave = (event: ChangeEvent<HTMLInputElement>) => {

        setNewTodo(event.target.value);
    }

    function addElement(){
        props.addElement(props.text)
    }



    return(
        <div>
            <input value={newTodo} onChange={userTextSave}/>
            <button onClick={addElement}></button>
        </div>
    )
}