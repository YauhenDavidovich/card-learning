import {useFormik} from 'formik';
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Grid from '@mui/material/Grid';
import {AppStateType} from "../../bll/store";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from '@material-ui/core/Button';
import {Link as RouterLink, Navigate, useNavigate} from 'react-router-dom';
import {loginTC} from "../../bll/login-reducer";
import {Checkbox, Link} from "@material-ui/core";
import {FormControlLabel} from "@mui/material";


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

    return (
        <div className='main'>
            <div className='mainBlock'>
                <Grid container justifyContent={"center"}>
                    <Grid item justifyContent={"center"}>
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl>
                                <FormLabel>
                                    <h2 style={{padding: '20px'}}>SIGN-IN</h2>
                                </FormLabel>
                                <FormGroup>
                                    <Grid container justifyContent={"center"} direction={"column"}>

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
                                        <FormControlLabel
                                            label={'Remember me'}
                                            control={<Checkbox
                                                name="rememberMe"
                                                onChange={formik.handleChange}
                                                value={formik.values.rememberMe}
                                            />}
                                        />
                                        <Link component={RouterLink} to="/forgot-password" color="secondary">
                                            {'Forgot Password'}
                                        </Link>
                                        <Button color={'primary'}
                                                type={'submit'}
                                                variant={'contained'}>

                                            Login
                                        </Button>
                                        <div> Don`t have an account?</div>
                                        <Button onClick={() => {
                                            history('/registration')
                                        }}
                                                variant={'contained'}
                                                color={'secondary'}
                                        >Sign Up</Button>
                                    </Grid>
                                </FormGroup>
                            </FormControl>
                        </form>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Login;
