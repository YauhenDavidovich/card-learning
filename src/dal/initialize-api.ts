import axios, {AxiosResponse} from "axios"

const instance = axios.create({
    // baseURL: "https://neko-back.herokuapp.com/2.0",
    baseURL: process.env.REACT_APP_API_PATH,
    withCredentials: true,
})


export const authAPI = {
    me(){
        return instance.post('auth/me')
    }
}
