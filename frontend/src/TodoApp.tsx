import Search from "./Search";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import React, {useEffect, useState} from "react";
import axios from "axios";
import TodoList from "./TodoList";
type TodoAppProps = {
    todo: Todo,
    todos: Todo[],

}
export default function TodoApp(props: TodoAppProps){

    const [todoList, setTodoList] = useState([]);

    useEffect(()=>{
        getTodoList()
    },[])

    function getTodoList(){
        axios.get("/api/todo")
            .then((response)=>{
            setTodoList(response.data)})
    }
    const addElement = todoList.map((todo: Todo) => {
        return <AddTodo addElement={addElement} />
    })

    return(
        <div>
            {addElement}
        </div>
    )
}