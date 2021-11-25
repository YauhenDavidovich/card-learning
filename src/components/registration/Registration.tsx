import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {registrationTC} from "../../bll/registration-reducer";
import {AppStateType} from "../../bll/store";
import {Navigate} from "react-router-dom";

type FormikErrorType = {
    email?: string
    password?: string
    confirmPassword?: string
}

const Registration = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.login.isAuth)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            if (!values.password) {
                errors.password = "Required";
            } else if (values.password.length < 3) {
                errors.password = "Password must be more than two characters"
            }
            if (!values.confirmPassword) {
                errors.confirmPassword = "Required";
            } else if (values.confirmPassword !== values.password) {
                errors.confirmPassword = "Passwords must match"
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(registrationTC(values.email, values.password))
            formik.resetForm()
        },
    });

    const resetHandler = () => {
        formik.resetForm()
    }


    if (isAuth) {
        return <Navigate to={"/profile"}/>
    }


    return (
        <div className="main">
            <div className="mainBlock authBlock">
                <Grid container justifyContent={"center"}>
                    <Grid item justifyContent={"center"}>
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl>
                                <FormLabel>
                                    <Grid container justifyContent={"center"}>
                                        <Grid item justifyContent={"center"}>
                                            <h1>It-incubator</h1>
                                            <Grid container justifyContent={"center"}>
                                                <Grid item justifyContent={"center"}>
                                                    <h3>Sign up</h3>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </FormLabel>
                                <FormGroup>
                                    <TextField label="Email"
                                               margin="normal" {...formik.getFieldProps("email")}/>
                                    {formik.touched.email && formik.errors.email &&
                                    <div style={{color: "red"}}>{formik.errors.email}</div>}
                                    <TextField type="password" label="Password"
                                               margin="normal" {...formik.getFieldProps("password")}
                                    />
                                    {formik.touched.password && formik.errors.password &&
                                    <div style={{color: "red"}}>{formik.errors.password}</div>}

                                    <TextField type="password" label="Confirm password"
                                               margin="normal" {...formik.getFieldProps("confirmPassword")}
                                    />
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword &&
                                    <div style={{color: "red"}}>{formik.errors.confirmPassword}</div>}
                                    <Box>
                                        <Grid container justifyContent={"space-between"}>
                                            <Button onClick={resetHandler} variant={"contained"}
                                                    color={"secondary"}>Cancel</Button>
                                            <Button type={"submit"} variant={"contained"}
                                                    color={"primary"}>Register</Button>
                                        </Grid>
                                    </Box>
                                </FormGroup>
                            </FormControl>
                        </form>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Registration
