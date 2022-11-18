import {Todo} from './TodoType'
type TodoProps = {
    todoElement: Todo
}

export default function TodoElement(props: TodoProps){



    return(
        <div>
            {props.todoElement.id}
            {props.todoElement.description}
            {props.todoElement.status}

        </div>
    )
}