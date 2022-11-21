    import {Todo} from './TodoType'
    import {ChangeEvent, useState} from "react";
    type TodoProps = {
        todoElement: Todo,
        deleteTodo(id: string): void,
        editTodo(todo: Todo, id: string): void
    }

    export default function TodoElement(props: TodoProps){


    function deleteTodo(){
        props.deleteTodo(props.todoElement.id!)
    }

    function editTodo(){
        props.editTodo(props.todoElement, props.todoElement.id!)
    }

    return(
        <div className={"todo-element"}>
            <input onChange={editTodo} type={"radio"}/>
            <input value={props.todoElement.description} className={"todo-description"}/>
            <button onClick={deleteTodo} className={"todo-button-delete"}>Delete</button>
            <button onClick={editTodo} className={"todo-button-edit"}>Edit</button>
        </div>
    )
}