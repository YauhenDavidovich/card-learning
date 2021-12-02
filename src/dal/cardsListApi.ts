import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    // baseURL: "https://neko-back.herokuapp.com/2.0",
    baseURL: process.env.REACT_APP_API_PATH,
    withCredentials: true,
})

export type GetCardsParamsType = {
    cardsPack_id: string
    cardAnswer?: string
    cardQuestion?: string
    min?: number
    max?: number
    sortCards?: string
    page?: number
    pageCount?: number
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
    _id: string
}
export type ResponseCardsType = {
    cards: Card[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    packUserId: string
    page: number
    pageCount: number
}


export type AddCardParamsType = {
    cardsPack_id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
}

export type UpdateCardParamsType = {
    card: {
        _id: string
        question?: string
        answer?: string
    }

}
export type GradeCardParamsType = {
    card_id: string
    grade: number
}

export const cardsApi = {
    getCards(params: GetCardsParamsType) {
        return instance.get<GetCardsParamsType, AxiosResponse<ResponseCardsType>>("cards/card", {params: {...params}})
    },
    addCard(card: AddCardParamsType) {
        return instance.post<AddCardParamsType, AxiosResponse<ResponseCardsType>>("/cards/card", {card: {...card}})
    },
    deleteCard(cardId: string) {
        return instance.delete<AxiosResponse<ResponseCardsType>>("/cards/card", {params: {id: cardId}})
    },
    updateCard(params: UpdateCardParamsType) {
        return instance.put<UpdateCardParamsType, AxiosResponse<ResponseCardsType>>("cards/card", params)
    },
    gradeCard(card:GradeCardParamsType) {
        return instance.put<AxiosResponse<ResponseCardsType>>("cards/grade", card)
    }
}


