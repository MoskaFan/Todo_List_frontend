import {Todo} from './TodoType'
type TodoProps = {
    todoElement: Todo
}

export default function TodoElement(props: TodoProps){



    return(
        <div className={"todo-element"}>
            <input type={"radio"}/>
            <input value={props.todoElement.description} className={"todo-description"}/>
            <button className={"todo-button-delete"} >Delete</button>
            <button className={"todo-button-edit"}>Edit</button>
        </div>
    )
}