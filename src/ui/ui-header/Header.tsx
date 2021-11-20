import React from 'react';
import {NavLink} from "react-router-dom";
import {AppStateType} from "../../bll/store";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import {logOutTC} from "../../bll/login-reducer";
import PacksListsContainer from "../../components/PacksList/PackLIstsContainer";

const Header = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType, boolean>(state => state.login.isAuth)
    function handleLogout() {
        dispatch(logOutTC())
    }


    return (
        <div className={"header"}>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/forgot-password">Forgot Password</NavLink>
            <NavLink to="/recovery-password">Recovery Password</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/packs-list">Packs List</NavLink>
            <NavLink to="/registration">Registration</NavLink>
            {isAuth && <Button color='inherit' onClick={handleLogout}>Logout</Button>}
        </div>
    )
}

export default Header;
