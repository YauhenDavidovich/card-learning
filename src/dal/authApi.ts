import axios, { AxiosResponse } from 'axios'


export type LoginParamsType={
    email:string
    password: string
}

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0",
    withCredentials: true,
})

export const authApi = {
    logIn(data:LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse<ResponseUserType>>('/auth/login',data)
    },
    logOut(){
        return instance.delete('/auth/me')
    }
}

export type ResponseUserType = {
    _id:string
    email:string
    name:string
    avatar?:string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string
}
