import React from 'react';
import {NavLink} from "react-router-dom";
import {AppStateType} from "../../bll/store";
import {useDispatch, useSelector} from "react-redux";
import {logOutTC} from "../../bll/login-reducer";
import Button from "@mui/material/Button";

const Header = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType, boolean>(state => state.login.isAuth)
    function handleLogout() {
        dispatch(logOutTC())
    }


    return (
        <div className={"header"}>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/packs-list">Packs List</NavLink>
            {isAuth && <Button color='inherit' onClick={handleLogout}>Logout</Button>}
        </div>
    )
}

export default Header;
