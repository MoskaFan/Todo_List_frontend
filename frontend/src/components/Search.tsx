import {ChangeEvent} from "react";


type SearchProps = {
    searchText: string,
    searchElement (searchText: string): void
}
export default function Search(props: SearchProps){


    const onSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {

        props.searchElement(event.target.value);
    }


    return(
        <div className={"todo-search"}>
            <input className={"todo-search-input"} onChange={onSearchTextChange}/> <h4>Search your Todo</h4>


        </div>
    )
}