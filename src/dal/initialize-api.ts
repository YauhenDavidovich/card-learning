import axios, {AxiosResponse} from "axios"

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    withCredentials: true,
})


export const authAPI = {
    me(){
        return instance.post('auth/me')
    }
}