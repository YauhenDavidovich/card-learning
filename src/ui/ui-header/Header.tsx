import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/new-password">New Password</NavLink>
            <NavLink to="/recovery-password">Recovery Password</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/registration">Registration</NavLink>
        </div>
    )
}

export default Header;
