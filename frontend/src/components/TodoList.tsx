import TodoElement from './TodoElement'
import {Todo} from './TodoType'
type TodoListProps = {
    todos: Todo[]
}

export default function TodoList(props: TodoListProps){

    const todoList = props.todos.map((todo: Todo) =>{

        return <TodoElement todoElement={todo} />
    })

    return(
        <div>
            {todoList}
        </div>
    )
}