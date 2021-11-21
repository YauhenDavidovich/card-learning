import React, {useEffect} from "react";
import "./App.css";
import Header from "./ui/ui-header/Header";
import Main from "./ui/ui-main/Main";
import {MuiThemeProvider} from "@material-ui/core/styles";
import MyTheme from "./MyTheme";
import {initializeAppTC, RequestStatusType} from "./bll/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import Preloader from "./components/utils/Preloader";

function App() {
    const isLoading = useSelector<AppStateType, RequestStatusType>(state => state.app.status)
    const dispatch = useDispatch()
    useEffect(() => {
        debugger
        dispatch(initializeAppTC())
    }, [])


    return (
        <MuiThemeProvider theme={MyTheme}>
            <div className={"App"}>
                {isLoading === "loading" ? <Preloader/>
                    : <>
                        <Header/>
                        <Main/>
                    </>}
            </div>
        </MuiThemeProvider>
    )
}

export default App;
