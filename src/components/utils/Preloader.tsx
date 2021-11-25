import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Preloader = () => {
    return (<div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%', opacity: 0.5}}>
            <CircularProgress/>
        </div>
    )
}

export default Preloader
