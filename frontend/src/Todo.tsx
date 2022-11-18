import {Todo} from './TodoType'
type TodoProps = {
    todo: Todo
}

export default function Todo(props: TodoProps){



    return(
        <div>
            <Todo todo = {props.todo} />
        </div>
    )
}