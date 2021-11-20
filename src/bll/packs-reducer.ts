import {CardsPack, packsListAPI} from "../dal/packsListApi";
import {Dispatch} from "redux";

const InitialState={
    cardsPacks:[
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

            }
        default:
            return state;
    }
}


const GETPACKS= 'card-learning/cards/GET-CARDS'

export const GetCardsAC=(cards:InitialCardsStateType )=>({
    type:GETPACKS,
    cards: cards,
} as const);


export const getCardsTC=()=>(dispatch:Dispatch)=>{
    // packsListAPI.getPacks()
    //     .then
}



export type GetPacksType = ReturnType<typeof GetCardsAC>

type ActionsType = GetPacksType