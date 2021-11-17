import axios, {AxiosResponse} from "axios"

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0",
    withCredentials: true,
})


export const authAPI = {
    me(){
        return instance.post('auth/me')
    }
}
