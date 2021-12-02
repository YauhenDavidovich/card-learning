import React from "react";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {addPackTC} from "../../../bll/packs-reducer";

const AddPack = () => {
    const  dispatch = useDispatch()
    const addPackHandler = () => {
        dispatch(addPackTC( "newPack"))
    }
    return (
        <Button variant="contained" onClick={addPackHandler} color="success">ADD PACK</Button>
    )
}

export default AddPack
