import Search from "./Search";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function TodoApp(){

    const [todoList, setTodoList] = useState([]);

    useEffect(()=>{
        getTodoList()
    },[])

    function getTodoList(){
        axios.get("/api/todo")
            .then((response)=>{
            setTodoList(response.data)})
    }

    return(
        <div>
            <pre><TodoApp></TodoApp></pre>
        </div>
    )
}