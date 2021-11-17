import {useFormik} from 'formik';
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Grid from '@mui/material/Grid';
import {AppStateType} from "../../bll/store";
import {Button, FormControl, FormGroup, FormLabel, Paper, TextField} from "@mui/material";
import {Navigate} from 'react-router-dom';
import {loginTC} from "../../bll/login-reducer";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const history = useNavigate()
    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType>(state => state.login.isAuth)

    type FormikErrorType = {
        email?: string
        password?: string
        rememberMe?: boolean
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'required fill';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'password must have'
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(values))
        }
    });
    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }



    return <Grid container justifyContent={'center'} style={{padding: '30px'}}>
        <Grid item justifyContent={'center'}>
            <Paper style={{padding: '30px'}}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormLabel style={{textAlign:'center', color:'blue'}}>
                            <h2 style={{padding: '30px'}}>IT-INCUBATOR</h2>
                            <h2 style={{padding: '20px'}}>SIGN-IN</h2>
                        </FormLabel>
                        <FormGroup>
                            <TextField label='Email'
                                       margin='normal'
                                       {...formik.getFieldProps('email')}
                                       value={formik.values.email}
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}/>
                            {formik.touched.email && formik.errors.email
                                ? <div style={{color: 'red'}}>
                                    {formik.errors.email}
                                </div> : null}
                            <TextField type='password'
                                       label='Password'
                                       margin='normal'
                                       {...formik.getFieldProps('password')}
                                       value={formik.values.password}
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}/>
                            {formik.touched.password && formik.errors.password
                                ? <div style={{color: 'red'}}>
                                    {formik.errors.password}
                                </div>
                                : null}
                            <Button onClick={() => {
                                history('/recovery-password')
                            }} variant='text'>Forgot Password</Button>
                            <Button type={'submit'}
                                    variant={'contained'}
                                    color={'primary'}>
                                Login
                            </Button>
                            <div> Don`t have an account?</div>
                            <Button onClick={()=>{history('/registration')}}
                                variant='text' >Sign Up</Button>

                            {/*<div className={"main"}>LoginPage</div>*/}

                        </FormGroup>
                    </FormControl>
                </form>
            </Paper>
        </Grid>
    </Grid>
}

export default Login;
