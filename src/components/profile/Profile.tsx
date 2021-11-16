import React from 'react';
import {ResponseUserType} from "../../dal/authApi";
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";



const Profile = () => {
    const user = useSelector<AppStateType,ResponseUserType>(state=>state.login.user)


    return ( <div> {user ? <div>
            <img src={user.avatar}/>
            {user.name}

        </div>: '' }</div>
    )
}

export default Profile
