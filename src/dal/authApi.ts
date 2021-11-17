import axios, { AxiosResponse } from 'axios'



export type LoginParamsType={
    email:string
    password: string
}


export const authApi={
    logIn(data:LoginParamsType){
        return axios.post<LoginParamsType, AxiosResponse<ResponseUserType>>('https://neko-back.herokuapp.com/2.0/auth/login',data)
    },
    logOut(){
        debugger
        return axios.delete('https://neko-back.herokuapp.com/2.0/auth/me')
    },
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