import React, {useEffect} from "react";
import "./App.css";
import Header from "./ui/ui-header/Header";
import Main from "./ui/ui-main/Main";
import {useDispatch, useSelector} from "react-redux";
import {initializeAppTC} from "./bll/app-reducer";
import CircularProgress from "@mui/material/CircularProgress";
import {AppStateType} from "./bll/store";
import {useNavigate} from "react-router-dom";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';



const theme = createTheme({
    palette: {
        primary: {
            main: '#73926C',
        },
        secondary: {
            main: '#EDA909',
        },
    },
});

function App() {
    return (
        <MuiThemeProvider  theme={theme}>
            <div className={"App"}>
                <Header/>
                <Main/>
            </div>
        </MuiThemeProvider >
    )
}

export default App;
