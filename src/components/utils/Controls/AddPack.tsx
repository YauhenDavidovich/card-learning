import React from "react";
import Button from "@mui/material/Button";
import {packsListAPI} from "../../../dal/packsListApi";

const AddPack = () => {
    const addPackHandler = () => {
        packsListAPI.addPack({cardsPack: {name: "INGVARR"}}).then(response => alert(response))
    }
    return (
        <Button variant="contained" onClick={addPackHandler} color="success">ADD PACK</Button>
    )
}

export default AddPack
