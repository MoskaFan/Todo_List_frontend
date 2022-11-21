import Search from "./Search";
import AddTodo from "./AddTodo";
import React, {useEffect, useState} from "react";
import axios from "axios";
import TodoList from "./TodoList";
import {Todo} from "./TodoType";
import "./TodoApp.css";


export default function TodoApp(){

    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [searchText, setSearchText] = useState<string>("");


    useEffect(()=>{
        getTodoList()
    },[])

    function getTodoList(){
        axios.get("/api/todo")
            .then((response)=>{
            setTodoList(response.data)})
            .catch(console.error)
    }

    function addTask(newTodo: Todo) {
        axios.post("/api/todo", newTodo)
            .then(savedTodo => {
                setTodoList((prevTodoList) => {
                    return [...prevTodoList, savedTodo.data]
                })

            })
    }

    function getOneTask(id: string){
        setSearchText(searchText)
    }

    function deleteTodo(deletedIdTodo: string){
        axios.delete("/api/todo/" + deletedIdTodo).then(()=>{
            const newList = todoList.filter((todo: Todo)=>
                todo.id!==deletedIdTodo)
            setTodoList(newList)
            }
        )
    }

    function editTodo(newTodo: Todo, id: string){
        axios.put("/api/todo/" + newTodo, id)
            .then((updatedTodoResponse)=>{
                setTodoList((prevState) => {
                    const updatedTodo: Todo = updatedTodoResponse.data
                        return prevState.map((todo: Todo)=>{
                            if(todo.id === updatedTodo.id){
                                return updatedTodo
                            }else{
                                return todo
                            }
                        })
                })
            })
    }




    const filteredTodos = todoList.filter((todo: Todo) =>
        todo.description.toLowerCase().includes(searchText.toLowerCase()))


    return(
        <div className={"todo-form"}>

            <div><h1>Todo Liste</h1></div>
            <div><Search searchText={searchText} searchElement={getOneTask}/></div>
            <div><TodoList  todos={todoList} deleteTodo={deleteTodo} editTodo={editTodo}/></div>
            <div><AddTodo addElement={addTask}/></div>
        </div>
    )
}