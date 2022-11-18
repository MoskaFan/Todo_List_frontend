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
        <div>
            <input onChange={onSearchTextChange}/>

        </div>
    )
}