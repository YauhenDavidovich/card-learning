import React from 'react';
import {Route, Routes} from "react-router-dom";
import NewPassword from "../../components/newPassword/NewPassword";
import Login from "../../components/login/Login";
import Profile from "../../components/profile/Profile";
import RecoveryPassword from "../../components/recoveryPassword/RecoveryPassword";
import Registration from "../../components/registration/Registration";

const Main = () => {

    return (
        <Routes >
            <Route path='/login' element={<Login/>}/>
            <Route path='/new-password' element={<NewPassword/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/recovery-password' element={<RecoveryPassword/>}/>
            <Route path='/registration' element={<Registration/>}/>
            {/*<Route path='/404' element={<NotFound/>}/>*/}
        </Routes>


    )
}

export default Main;
