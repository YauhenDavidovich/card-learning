import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {Navigate, useParams} from "react-router-dom";
import {useFormik} from "formik";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {setNewPasswordTC} from "../../bll/setNewPassword-reducer";

type RecoveryProps = {}
type FormikErrorType = {
    password?: string
}

const RecoveryPassword: React.FC<RecoveryProps> = React.memo(() => {

    const isNewPasswordSend = useSelector<AppStateType, boolean>(state => state.newPassword.isNewPasswordSet);
    const responseError = useSelector<AppStateType, string | null>(state => state.newPassword.message)
    const dispatch = useDispatch();

    const { token } = useParams() as {
        token: string;
    }

    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if(!values.password) {
                errors.password = 'Please type new password';
            } else if (values.password.length < 8) {
                errors.password = 'Must be 8 characters or more';
            }
            return errors;

        },
        onSubmit: values => {
            dispatch(setNewPasswordTC(values.password, token ))
            formik.resetForm()
        },
    });

    if(isNewPasswordSend) {
        return <Navigate to='/login' />
    }
    return <div className={"main"}>
        <Container maxWidth="sm" style={{background: "#F9F9FE", height: "50vh", borderRadius: "8px"}}>
            <Grid container spacing={3}>
                <Grid item style={{
                    marginTop: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: "center"
                }}>
                    <form onSubmit={formik.handleSubmit} style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>
                        <Box component="span" sx={{marginTop: "20px", marginBottom: "20px"}}>
                            <h2 style={{textAlign: 'center'}}>Create new password</h2>
                        </Box>
                        <Box component="span" display="block">
                            <TextField
                                variant={"outlined"}
                                style={{marginTop: "20px", width: "100%"}}
                                id={"outlined-basic"}
                                type={"password"}
                                color={"primary"}
                                placeholder={"password"}
                                {...formik.getFieldProps("password")}
                            />
                            {formik.touched.password && formik.errors.password && <div style={{color: 'red'}}>{formik.errors.password}</div>}
                            {responseError &&  <div style={{color: 'red'}}>{responseError}</div>}
                        </Box>
                        <Box>
                            <h4>Create new password and we will send you further instructions to email</h4>
                        </Box>
                        <Button variant="contained"
                                color="primary"
                                type="submit"
                                style={{
                                    borderRadius: "30px",
                                    background: "#73926C",
                                    marginTop: "30px",
                                    alignSelf: 'center',
                                    boxShadow: '0px 4px 18px rgba(33, 38, 143, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3)'
                                }}
                            // disabled={forgotStatus === "loading"}
                        >Create new password</Button>
                    </form>
                </Grid>
            </Grid>
        </Container></div>

});

export default RecoveryPassword
