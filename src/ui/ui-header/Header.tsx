import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {AppStateType} from "../../bll/store";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import {logOutTC} from "../../bll/login-reducer";

const Header = () => {
    let isAuth = useSelector<AppStateType>(state => state.login.isAuth)
    const history = useNavigate();
    const dispatch = useDispatch()
    function handleLogout() {
        // @ts-ignore
        dispatch(logOutTC()).then(
            (res: any) => {
                history("/login");
            }
        )
    }




    return (
        <div className={"header"}>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/forgot-password">Forgot Password</NavLink>
            <NavLink to="/recovery-password">Recovery Password</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/registration">Registration</NavLink>
            {isAuth && <Button color='inherit' onClick={handleLogout}>Logout</Button>}

            </div>
    )
}

export default Header;
