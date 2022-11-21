import TodoElement from './TodoElement'
import {Todo} from './TodoType'
import {useState} from "react";
type TodoListProps = {

    todos: Todo[],
    deleteTodo(id: string): void,
    editTodo(todo: Todo, id: string): void
}

    export default function TodoList(props: TodoListProps){

    const todoList = props.todos.map((todo: Todo) =>{

        return <TodoElement todoElement={todo} key={todo.id}
                            deleteTodo={props.deleteTodo} editTodo={props.editTodo}/>
    })

    return(
        <section>
            <div>{todoList}</div>

            <button>Show all tasks</button>

        </section>
    )
}