import React from "react";
import {ResponseUserType} from "../../dal/authApi";
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {Navigate} from "react-router-dom";


const Profile = () => {
    const user = useSelector<AppStateType, ResponseUserType>(state => state.login.user)
    const isAuth = useSelector<AppStateType, boolean>(state => state.login.isAuth)

    if (!isAuth) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className={"main"}>
            <div className="mainBlock">
                <div> {user ? <div>
                    <img src={user.avatar}/>{user.name}
                </div> : ''}</div>
            </div>
        </div>

    )
}

export default Profile
