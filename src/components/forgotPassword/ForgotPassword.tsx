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


    return <Container maxWidth="lg" style={{background: "linear-gradient(45deg, white, blue)", height: "50vh"}}>
        <Grid container direction={"column"} justifyContent={"center"} alignItems="center" spacing={3}>
            <Grid item xs={4}>
                <form onSubmit={formik.handleSubmit}>
                    <Box component="span" display="block" style={{marginTop: "20px", marginBottom: "10px"}}>
                        <FormLabel htmlFor="email" filled={true} focused={true}
                                   style={{fontSize: "40px", color: "white"}}>Forgot Password</FormLabel>
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


                    <Button variant="contained"
                            color="primary"
                            type="submit"
                            style={{marginTop: "20px", width: "100%"}}
                            // disabled={forgotStatus === "loading"}
                    >Send</Button>
                </form>

                <Button variant={"outlined"} color={"primary"}
                        style={{
                            border: "1px solid blue",
                            background: "linear-gradient(45deg, orange, pink)",
                            marginTop: "30px",
                            width: "100%"
                        }}
                        onClick={() => {
                            history('/login')
                        }}>Login
                </Button>


            </Grid>
        </Grid>
    </Container>
});


export default ForgotPassword;
;
