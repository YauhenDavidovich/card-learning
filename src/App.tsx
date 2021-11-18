import React from "react";
import "./App.css";
import Header from "./ui/ui-header/Header";
import Main from "./ui/ui-main/Main";
import { MuiThemeProvider } from '@material-ui/core/styles';
import MyTheme from "./MyTheme";

function App() {
    return (
         <MuiThemeProvider  theme={MyTheme}>
            <div className={"App"}>
                <Header/>
                <Main/>
            </div>
         </MuiThemeProvider >
    )
}

export default App;
