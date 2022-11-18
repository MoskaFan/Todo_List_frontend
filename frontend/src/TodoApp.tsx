import Search from "./Search";
import AddTodo from "./AddTodo";
import {Todo} from "./TodoType";
import React, {useEffect, useState} from "react";
import axios from "axios";
import TodoList from "./TodoList";

export default function TodoApp(){

    const [todoList, setTodoList] = useState([]);
    const [searchText, setSearchText] = useState<string>("");
    const [addDescription, setAddDescription] = useState<string>("");

    useEffect(()=>{
        getTodoList()
    },[])

    function getTodoList(){
        axios.get("/api/todo")
            .then((response)=>{
            setTodoList(response.data)})
    }

    function addElement(description: string){

        setAddDescription(addDescription)
    }
    function searchElement(searchText: string){
        setSearchText(searchText)
    }


    return(
        <div>
            <AddTodo text={addDescription} addElement={addElement}/>
            <Search searchText={searchText} searchElement={searchElement}/>
            <TodoList todos={todoList}/>
        </div>
    )
}