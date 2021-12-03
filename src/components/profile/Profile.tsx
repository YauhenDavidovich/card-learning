import React from "react";
import {ResponseUserType} from "../../dal/authApi";
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {Navigate} from "react-router-dom";
import defaultPhotoProfile from "../../assets/profile-picture.png"


const Profile = () => {
    const user = useSelector<AppStateType, ResponseUserType>(state => state.login.user)
    const isAuth = useSelector<AppStateType, boolean>(state => state.login.isAuth)

    if (!isAuth) {
        return <Navigate to={"/login"}/>
    }

    return (
        <div className={"main"}>
            <div className="mainBlock">
                <div>
                    <h4>{user.name}</h4>
                    <div><img src={user.avatar ? user.avatar : defaultPhotoProfile}/></div>
                </div>
            </div>
        </div>
    )
}

export default Profile
