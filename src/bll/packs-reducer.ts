import {CardsPack, GetPacksParamsType, packsListAPI, ResponsePacksType} from "../dal/packsListApi";
import {Dispatch} from "redux";

const InitialState: InitialCardsStateType= {
        cardsPacks: [
            {
                _id: '',
                user_id: '',
                name: '',
                cardsCount: 0,
                created: '',
                updated: ''
            }],
        cardPacksTotalCount: 0,
        maxCardsCount: 0,
        minCardsCount: 0,
        page: 0,
        pageCount: 0,

}

export type InitialCardsStateType={
    cardsPacks: CardsPack[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}




export const packsReducer=(state:InitialCardsStateType=InitialState, action: ActionsType):InitialCardsStateType=>{
    switch(action.type){
        case GETPACKS:
            return {
                ...state,
                cardsPacks: action.data.cardPacks,
                cardPacksTotalCount: action.data.cardPacksTotalCount,
                maxCardsCount: action.data.maxCardsCount,
                minCardsCount: action.data.minCardsCount,
                page: action.data.page,
                pageCount: action.data.pageCount
            }
        default:
            return state;
    }
}


const GETPACKS= 'card-learning/cards/GET-CARDS'



export const GetCardsAC=(data:ResponsePacksType )=>({
    type:GETPACKS,
    data: data,
} as const);




export const getCardsTC=(data:GetPacksParamsType)=>(dispatch:Dispatch)=>{
   debugger
    packsListAPI.getPacks(data)
        .then(res=>{
            dispatch(GetCardsAC(res.data))
        })
}



export type GetPacksType = ReturnType<typeof GetCardsAC>

type ActionsType = GetPacksType