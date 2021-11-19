import React, {useEffect, useState} from 'react';
import {AppStateType} from "../../bll/store";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {Navigate, useNavigate} from "react-router-dom";
import {requestForgotPasswordTC} from "../../bll/forgotPassword-reducer";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from '@material-ui/core/Button';
import {initializeAppTC} from "../../bll/app-reducer";

type ForgotProps = {}
type FormikErrorType = {
    email?: string
}

const ForgotPassword: React.FC<ForgotProps> = React.memo(() => {

    const isEmailRequestSend = useSelector<AppStateType, boolean>(state => state.forgot.IsRequestNewPasswordSent);
    const isAuth = useSelector<AppStateType, boolean>(state => state.login.isAuth)
    const navigate = useNavigate();
    const responseError = useSelector<AppStateType, string | null>(state => state.forgot.message)
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')


    const message =
        `<div style="background-color: lime; padding: 15px">
            password recovery link:
            <a href="https://yauhendavidovich.github.io/card-learning/#/recovery-password/$token$">link</a> 
          </div>`

    const history = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Please type your email!';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;

        },
        onSubmit: values => {
            dispatch(requestForgotPasswordTC(values.email, "davidovich336@gmail.com", message))
            setEmail("/check-email/" + values.email)
            formik.resetForm()
        },
    });


    useEffect(() => {
        dispatch(initializeAppTC())
        if (isAuth) {
            navigate('/profile')
        }
    }, [isAuth])


    if (isEmailRequestSend) {
        return <Navigate to={email}/>
    }


    return (
        <div className={"main"}>
            <div className='mainBlock'>
                <Grid container justifyContent={"center"}>
                    <Grid item justifyContent={"center"}>
                        <form onSubmit={formik.handleSubmit}                        >
                            <FormControl>
                                <FormLabel>
                                    <Box component="span" sx={{marginTop: "20px", marginBottom: "10px"}}>
                                        <h2 style={{textAlign: 'center'}}>Forgot your password?</h2>
                                    </Box>
                                </FormLabel>

                                <FormGroup>
                                    <Grid container justifyContent={"space-between"} direction={"column"}
                                          alignItems={'center'}>
                                        <TextField  type="email" label="Email"
                                                   margin="normal"
                                            color={"primary"}
                                            placeholder={"Email"}
                                            {...formik.getFieldProps("email")}
                                        />
                                        {formik.touched.email && formik.errors.email &&
                                        <div style={{color: 'red'}}>{formik.errors.email}</div>}
                                        {responseError && <div style={{color: 'red'}}>{responseError}</div>}

                                        <Grid container justifyContent={"center"}>
                                            <Grid item justifyContent={"center"}>
                                            <h4>Enter your email address and we will send you further instructions</h4>
                                            </Grid>
                                            </Grid>
                                        <Button variant="contained"
                                                color="primary"
                                                type="submit"
                                            // disabled={forgotStatus === "loading"}
                                        >Send Instructions</Button>
                                        <Box>
                                            <h4>Did you remember your password?</h4>
                                        </Box>
                                        <Button variant="contained"
                                                color="secondary"
                                            // disabled={forgotStatus === "loading"}
                                                onClick={() => {
                                                    history('/login')
                                                }}>Try logging in
                                        </Button>
                                    </Grid>
                                </FormGroup>
                            </FormControl>
                        </form>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
});


export default ForgotPassword;
;
