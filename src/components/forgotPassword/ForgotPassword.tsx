import React from 'react';
import {AppStateType} from "../../bll/store";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {RequestStatusType} from "../../bll/app-reducer";
import {useNavigate} from "react-router-dom";
import {requestForgotPasswordTC} from "../../bll/forgotPassword-reducer";
import Grid from "@material-ui/core/Grid";
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

type ForgotProps = {}

const ForgotPassword: React.FC<ForgotProps> = React.memo(() => {

    //ForgotPassword component state
    const forgotStatus = useSelector<AppStateType, boolean>(state => state.forgot.IsRequestNewPasswordSent);
    const dispatch = useDispatch();

    const message =
        `<div style="background-color: lime; padding: 15px">
            password recovery link:
            <a href="http://localhost:3000/#/set-new-password/$token$">link</a> 
          </div>`
    //hooks
    let history = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            dispatch(requestForgotPasswordTC(values.email, "davidovich336@gmail.com", message))
        },
    });


    return <div className={"main"}>
        <Container maxWidth="sm" style={{background: "#F9F9FE", height: "50vh", borderRadius: "8px"}}>
            <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={3}>
                <Grid item style={{
                    marginTop: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: "center"
                }}>
                    <form onSubmit={formik.handleSubmit}>
                        <Box component="span" sx={{marginTop: "20px", marginBottom: "10px"}}>
                            <h2 style={{textAlign: 'center'}}>Forgot your password?</h2>
                        </Box>

                        <Box component="span" display="block">
                            <TextField
                                variant={"outlined"}
                                style={{marginTop: "20px", width: "100%"}}
                                id={"outlined-basic"}
                                type={"email"}
                                color={"primary"}
                                placeholder={"Email"}
                                {...formik.getFieldProps("email")}
                            />
                        </Box>
                        <Box>
                            <h4>Enter your email address and we will send you further instructions</h4>
                        </Box>
                        <Button variant="contained"
                                color="primary"
                                type="submit"
                                style={{
                                    borderRadius: "30px",
                                    background: "#73926C",
                                    marginTop: "30px",
                                    width: "100%",
                                    boxShadow: '0px 4px 18px rgba(33, 38, 143, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3)'
                                }}
                            // disabled={forgotStatus === "loading"}
                        >Send Instructions</Button>
                    </form>
                    <Box>
                        <h4>Did you remember your password?</h4>
                    </Box>

                    <Button variant={"contained"} color={"primary"}
                            style={{
                                borderRadius: "30px",
                                background: "#EDA909",
                                marginTop: "30px",
                                width: "100%",
                                boxShadow: '0px 4px 18px rgba(33, 38, 143, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3)'
                            }}
                            onClick={() => {
                                history('/login')
                            }}>Try logging in
                    </Button>


                </Grid>
            </Grid>
        </Container></div>

});


export default ForgotPassword;
;
