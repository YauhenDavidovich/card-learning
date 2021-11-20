import axios, {AxiosResponse} from "axios"
import {LoginParamsType, ResponseUserType} from "./authApi";

const instance = axios.create({
    // baseURL: "https://neko-back.herokuapp.com/2.0",
    baseURL: process.env.REACT_APP_API_PATH,
    withCredentials: true,
})

export type GetPacksParamsType = {
    packName?: string
    min?:number
    max?:number
    sortPacks?:string
    page?:number
    pageCount?:number
    user_id?:string
}

export type CardsPack = {
    _id:string
    user_id:string
    name:string
    cardsCount:number
    created: string
    updated: string
}

export type ResponsePacksType = {
    cardPacks: CardsPack[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}

export const packsListAPI = {
    getPacks(params: GetPacksParamsType){
        return instance.get<GetPacksParamsType, AxiosResponse<ResponsePacksType>>('cards/pack', {
            params: {...params}
        })}

}
