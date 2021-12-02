import React from "react";
import Button from "@mui/material/Button";


type SuperButtonPropsType = {
    callback: () => void
    title: string
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({callback, title}) => {

    return (<>
            <Button style={{backgroundColor: "white", color: "#2D2E46"}} onClick={callback} variant={"contained"}>{title}</Button>
        </>

    )
}
