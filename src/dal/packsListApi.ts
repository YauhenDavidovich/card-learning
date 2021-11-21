import axios, {AxiosResponse} from "axios"

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

export type AddPackParamsType = {
    cardsPack: {
        name: string
        path?: string
        grade?: number
        shots?: number
        rating?: number
        deckCover?: string
        private?: boolean
        type?: string
    }
}

export type UpdatePackParamsType = {
    _id: string
    name?: string
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
        debugger
        return instance.get<GetPacksParamsType, AxiosResponse<ResponsePacksType>>('cards/pack', {
            params: {...params}
        })},
    addPack(pack:AddPackParamsType){
        return instance.post<AddPackParamsType, AxiosResponse<ResponsePacksType>>('/cards/pack', {...pack})
    },
    deletePack(packId: string){
        return instance.delete<AxiosResponse<ResponsePacksType>>('/cards/pack', {params: {id: packId}})
    },
    updatePack(params: UpdatePackParamsType) {
        return instance.put<AddPackParamsType, AxiosResponse<ResponsePacksType>>('cards/pack', {cardsPack:{...params}})
    }
}
