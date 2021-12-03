import axios, {AxiosResponse} from "axios"
import {ResponseUserType} from "./authApi";


export type ProfileDataParamsType = {
    name: string
    avatar?: string
}

const instance = axios.create({
    // baseURL: "https://neko-back.herokuapp.com/2.0",
    baseURL: process.env.REACT_APP_API_PATH,
    withCredentials: true,
})

export const profileApi = {
    getProfileData(){
        return instance.get<ResponseUserType>("/auth/me")
    }
    ,
    updateProfileData(data: ProfileDataParamsType) {
        return instance.put<ProfileDataParamsType, AxiosResponse<ResponseUserType>>("/auth/me", data)
    },
}
