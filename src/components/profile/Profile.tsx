import React, {useEffect} from 'react';
import {ResponseUserType} from "../../dal/authApi";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {useNavigate} from "react-router-dom";
import {initializeAppTC} from "../../bll/app-reducer";
import CircularProgress from "@mui/material/CircularProgress";



const Profile = () => {
    const user = useSelector<AppStateType,ResponseUserType>(state=>state.login.user)
    const dispatch = useDispatch()
    const isInitialized = useSelector<AppStateType, boolean>(state => state.app.isInitialized)
    const isAuth = useSelector<AppStateType, boolean>(state => state.login.isAuth)
    let navigate = useNavigate();


    useEffect(() => {
        dispatch(initializeAppTC())
        if (!isAuth) {
            navigate('/login')
        }
    }, [isAuth])

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }


    return ( <div> {user ? <div>
            <img src={user.avatar}/>
            {user.name}

        </div>: '' }</div>
    )
}

export default Profile
