import {ChangeEvent, useState} from "react";
import {Todo} from './TodoType';

type SearchProps = {
    searchText: string,
    searchElement (searchText: string): void
}
export default function Search(props: SearchProps){

    const[searchText, setSearchText] = useState("");
    const[todos, setTodos] = useState<Todo[]>([]);

    const filterList = todos.filter((todo: Todo)=>{
        if(todo.description.toLowerCase().includes(searchText.toLowerCase())){
            return true
        }
        return false
    })



    const onSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {

        props.searchElement(event.target.value);
    }





    return(
        <div>
            <input onChange={onSearchTextChange}/>

        </div>
    )
}