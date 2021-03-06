import React, {useEffect, useState} from "react";
import {TextField} from "@mui/material";

type SearchType = {
    searchResult: number
    getSearchResult: (searchTerm: string) => void
    title: string
}


const Search = (props: SearchType) => {
    const [searchTerm, setSearchTerm] = useState("")
    useEffect(() => {

        const delayDebounceFn = setTimeout(() => {
            props.getSearchResult(searchTerm)
        }, 700)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])


    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", margin: 10}}>
            <TextField style={{width: "70%"}} id="outlined-basic" label="🔍 Search" variant="outlined"
                       onChange={(e) => setSearchTerm(e.target.value)}/>
            {props.searchResult && <h4>{props.searchResult} {props.title}</h4>}

        </div>

    )

}

export default Search
