import React from "react";
import defaultPhotoProfile from "../../assets/profile-picture.png"
import Grid from "@material-ui/core/Grid";

type ProfileInfoPropsType = {
    avatar: string | undefined
    name: string
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    return (
        <div >
            <Grid container justifyContent={"center"}>
                <Grid item justifyContent={"center"}>
                    <div><img style={{maxWidth: "150px", maxHeight: "150px"}}
                              src={props.avatar ? props.avatar : defaultPhotoProfile}/></div>
                    <h3>{props.name}</h3>
                    <h4>Front-end developer</h4>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProfileInfo
