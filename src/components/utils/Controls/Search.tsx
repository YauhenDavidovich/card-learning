import React, {useEffect, useState} from "react";
import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getCardsTC} from "../../../bll/packs-reducer";
import {AppStateType} from "../../../bll/store";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const packsAmount = useSelector<AppStateType, number>(state => state.packs.cardPacksTotalCount)
    const dispatch = useDispatch()

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            dispatch(getCardsTC({packName: searchTerm, page: 1}))
        }, 700)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])


    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
            <TextField id="outlined-basic" label="Search pack" variant="outlined"
                       onChange={(e) => setSearchTerm(e.target.value)}/>
            {packsAmount && <h4>{packsAmount} packs were founded</h4>}

        </div>

    )

}

export default Search
