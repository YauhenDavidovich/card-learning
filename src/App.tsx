import React, {useEffect} from "react";
import "./App.css";
import Header from "./ui/ui-header/Header";
import Main from "./ui/ui-main/Main";
import {useDispatch, useSelector} from "react-redux";
import {initializeAppTC} from "./bll/app-reducer";
import CircularProgress from "@mui/material/CircularProgress";
import {AppStateType} from "./bll/store";
import {useNavigate} from "react-router-dom";

function App() {

    const dispatch = useDispatch()
    const isInitialized = useSelector<AppStateType, boolean>(state => state.app.isInitialized)
    const isAuth = useSelector<AppStateType, boolean>(state => state.login.isAuth)
    let navigate = useNavigate();


    useEffect(() => {
        dispatch(initializeAppTC())
        if (!isAuth) {
            navigate('/login')
        }
    }, [])

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }


    return (
        <div className={"App"}>
            <Header/>
            <Main/>
        </div>
    )
}

export default App;
