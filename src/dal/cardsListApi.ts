import axios, {AxiosResponse} from "axios";
import {LoginParamsType, ResponseUserType} from "./authApi";
const instance = axios.create({
    // baseURL: "https://neko-back.herokuapp.com/2.0",
    baseURL: process.env.REACT_APP_API_PATH,
    withCredentials: true,
})
export const cardsApi = {
    logIn(data:LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse<ResponseUserType>>('/auth/login',data)
    }
}
