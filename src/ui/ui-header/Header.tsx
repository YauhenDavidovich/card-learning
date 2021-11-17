import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

import {authApi} from "../../dal/authApi";
import {logOutTC} from "../../bll/login-reducer";


const Header = () => {
    let isAuth = useSelector<AppStateType>(state => state.login.isAuth)
    const history = useNavigate();
    const dispatch = useDispatch()
 function handleLogout () {
    dispatch( logOutTC())}

    // if (!isAuth) {
    //
    //     history('/login')
    // }



    return (
        <div className={"header"}>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/forgot-password">Forgot Password</NavLink>
            <NavLink to="/recovery-password">Recovery Password</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/registration">Registration</NavLink>
            {isAuth && <Button color='inherit' onClick={handleLogout}>logout</Button>}
        </div>
    )
}

export default Header;
