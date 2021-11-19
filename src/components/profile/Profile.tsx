import React from 'react';
import {ResponseUserType} from "../../dal/authApi";
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {useNavigate} from "react-router-dom";


const Profile = () => {
    const user = useSelector<AppStateType, ResponseUserType>(state => state.login.user)
    const isAuth = useSelector<AppStateType, boolean>(state => state.login.isAuth)
    let navigate = useNavigate();

    if (!isAuth) {
        navigate('/login')
    }

    return (
        <div> {user ? <div>
            <img src={user.avatar}/>{user.name}
        </div> : ''}</div>
    )
}

export default Profile
