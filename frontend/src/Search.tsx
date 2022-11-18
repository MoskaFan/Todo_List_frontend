import {ChangeEvent, useState} from "react";
import {Todo} from './TodoType';

type SearchProps = {
  todos: Todo[]
}
export default function Search(props: SearchProps){

    const[searchText, setSearchText] = useState("");
    const filterList = props.todos.filter((element)=>{
        if(element.description.includes(searchText)){
            return true;
        }
        return false;
    })



    const onSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {

        setSearchText(event.target.value);
    }




    return(
        <div>
            <input value={searchText} name = {searchText} onChange={onSearchTextChange}/><br />
            <input type={"radio"} />Show completed todos<br />
        </div>
    )
}