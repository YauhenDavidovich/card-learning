import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";

import defaultPhotoProfile from "../../assets/profile-picture.png";
import {updateProfileDataTC} from "../../bll/login-reducer";

type FormikErrorType = {
    fullName?: string
}

type UpdateProfileDataPropsType = {
    offEditMode: (value: boolean) => void
    avatar: string | undefined
    name: string
}

const UpdateProfileData = (props: UpdateProfileDataPropsType) => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            fullName: props.name,
        },
        onSubmit: values => {
            if(values.fullName){
                dispatch(updateProfileDataTC({name: values.fullName}))
                formik.resetForm()
                props.offEditMode(false)
            }

        },
    });

    const resetHandler = () => {
        formik.resetForm()
        props.offEditMode(false)
    }


    return (
        <div>
            <Grid container justifyContent={"center"}>
                <Grid item justifyContent={"center"}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormLabel>
                                <Grid container justifyContent={"center"}>
                                    <Grid item justifyContent={"center"}>
                                        <img style={{maxWidth: "150px", maxHeight: "150px"}}
                                             src={props.avatar ? props.avatar :defaultPhotoProfile}/>
                                        <Grid container justifyContent={"center"}>
                                            <Grid item justifyContent={"center"}>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </FormLabel>
                            <FormGroup>
                                <TextField label="Enter your name"
                                           margin="normal" {...formik.getFieldProps("fullName")}/>
                                {formik.touched.fullName && formik.errors.fullName &&
                                <div style={{color: "red"}}>{formik.errors.fullName}</div>}
                                <Box>
                                    <Grid container justifyContent={"space-between"}>
                                        <Button onClick={resetHandler} variant={"contained"}
                                                color={"secondary"}>Cancel</Button>
                                        <Button type={"submit"} variant={"contained"}
                                                color={"primary"}>Save</Button>
                                    </Grid>
                                </Box>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default UpdateProfileData
