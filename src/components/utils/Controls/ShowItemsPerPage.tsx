import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getCardsTC} from "../../../bll/packs-reducer";


const ShowItemsPerPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCardsTC({}))
    }, [])

    return (
        <div>ShowItemsPerPage</div>
    )

}

export default ShowItemsPerPage
