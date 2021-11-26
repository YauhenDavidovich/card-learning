import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    // baseURL: "https://neko-back.herokuapp.com/2.0",
    baseURL: process.env.REACT_APP_API_PATH,
    withCredentials: true,
})

export type GetCardsParamsType = {
    cardName?: string
    min?: number
    max?: number
    sortCards?: string
    page?: number
    pageCount?: number
    user_id?: string
}

export type Card = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    user_id: string
    shots: number
    cardsCount: number
    created: string
    updated: string
}
export type ResponseCardsType = {
    cards: Card[]
    cardsTotalCount: number
    maxGrade: number
    minGrade:  number
    packUserId: string
    page: number
    pageCount: number





}

export const cardsApi = {
    getCards(params: any) {
        return instance.get<GetCardsParamsType, AxiosResponse<ResponseCardsType>>("cards/card", {
            params: {...params}
        })
    },
}
