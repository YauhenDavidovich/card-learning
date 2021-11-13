import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import ForgotPassword from "../../components/forgotPassword/ForgotPassword";
import Login from "../../components/login/Login";
import Profile from "../../components/profile/Profile";
import RecoveryPassword from "../../components/recoveryPassword/RecoveryPassword";
import Registration from "../../components/registration/Registration";
import NotFound from "../../components/notFound/NotFound";

const Main = () => {

    return (
        <Routes >
            <Route path='/login' element={<Login/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/recovery-password' element={<RecoveryPassword/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/404' element={<NotFound/>}/>*/
            <Route path="*" element={<Navigate to="/404" />}/>
        </Routes>


    )
}

export default Main;
