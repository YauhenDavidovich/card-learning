import React, {useState} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {Navigate} from "react-router-dom";
import ProfileInfo from "./ProfileInfo";
import ProfileDataForm from "./ProfileDataForm";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


const Profile = () => {
    const name = useSelector<AppStateType, string>(state => state.login.user.name)
    const avatar = useSelector<AppStateType, string | undefined>(state => state.login.user.avatar)
    const isAuth = useSelector<AppStateType, boolean>(state => state.login.isAuth)
    const [editProfile, setEditProfile] = useState(false)

    const offEditModeHandler = (value: boolean) => {
        setEditProfile(value)
    }

    if (!isAuth) {
        return <Navigate to={"/login"}/>
    }


    return (
        <div className={"main"}>
            <div className="mainBlock">
                <Grid container justifyContent={"center"} alignItems={"center"}>
                    <Grid item justifyContent={"center"}>
                        {editProfile
                            ?
                            <ProfileDataForm name={name} avatar={avatar} offEditMode={(value) => {
                                offEditModeHandler(value)
                            }}/>
                            :
                            <div>
                                <ProfileInfo name={name} avatar={avatar}/>
                                <Button
                                    variant={"contained"}
                                    color={"secondary"}
                                    onClick={() => {
                                        setEditProfile(true)
                                    }}>Edit profile</Button>
                            </div>
                        }
                    </Grid>
                </Grid>
            </div>
        </div>

    )
}

export default Profile
