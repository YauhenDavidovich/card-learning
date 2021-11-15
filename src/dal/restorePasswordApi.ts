import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_PATH,
    withCredentials: true
});

export const restorePasswordApi = {

    requestForgotPassword(data: ForgotRequestDataType) {
        return instance.post<CheckEmailResponseType>('auth/forgot', data )
    },
    setNewPassword(data: NewPasswordRequestType) {
        return instance.post<NewPasswordResponseType>('auth/set-new-password', data)
    }
}

export type ForgotRequestDataType = {
    email: string
    from: string
    message: string
}

export type CheckEmailResponseType = {
    info: string | null
    answer: boolean
    html: boolean
    success: boolean
}

export type NewPasswordRequestType = {
    password: string
    resetPasswordToken: string
}

export type NewPasswordResponseType = {
    info: string
    error: string
}
