
import {ChangeEvent, useState} from "react";
import {Todo} from "./TodoType";

type AddTodoProps = {

    addElement(description: Todo): void
}

export default function AddTodo(props: AddTodoProps){


    const [todoDescription, setTodoDescription] = useState("");


    const userTextSave = (event: ChangeEvent<HTMLInputElement>) => {

        setTodoDescription(event.target.value);
    }

    function addElement(){
        const newTodo: Todo = {
            description: todoDescription,
            status: "OPEN"
        }
        props.addElement(newTodo)
    }



    return(
        <div>
            <label><h4>Add your new Todo</h4></label>
            <input className={"addTodo-input"} onChange={userTextSave}/>
            <button onClick={addElement}>Add</button>
        </div>
    )
}