import {Todo} from './TodoType'
type TodoListProps = {
    todos: Todo[]
}

export default function TodoList(props: TodoListProps){



    return(
        <div>
            <TodoList todos = {props.todos} />
        </div>
    )
}