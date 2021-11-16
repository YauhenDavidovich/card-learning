import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <div className={"header"}>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/forgot-password">Forgot Password</NavLink>
            <NavLink to="/recovery-password">Recovery Password</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/registration">Registration</NavLink>
        </div>
    )
}

export default Header;
