import {GetPacksParamsType, packsListAPI, ResponsePacksType} from "../dal/packsListApi";
import {Dispatch} from "redux";
import {setAppStatusAC} from "./app-reducer";

const InitialState = {
        cardPacks: [
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

export const packsReducer=(state=InitialState, action: ActionsType):ResponsePacksType=>{
    switch(action.type){
        case GETPACKS:
            return {
                ...state,
                ...action.data
            }
        case SET_RANGE:
            return {
                ...state,
                maxCardsCount: action.maxCardsCount,
                minCardsCount: action.minCardsCount,

            }

        default:
            return state;
    }
}


const GETPACKS = 'card-learning/cards/GET-CARDS'
const SET_RANGE = 'card-learning/cards/SET-RANGE'



export const GetCardsAC=(data:ResponsePacksType )=>({
    type:GETPACKS,
    data: data,
} as const);

export const SetRangeAC=(min:number, max:number )=>({
    type: SET_RANGE,
    minCardsCount: min,
    maxCardsCount: max,
} as const);


export const getCardsTC=(data:GetPacksParamsType)=>(dispatch:Dispatch)=>{

    dispatch(setAppStatusAC("loading"))
    packsListAPI.getPacks(data)
        .then(res=>{
            dispatch(GetCardsAC(res.data))
            dispatch(setAppStatusAC("succeeded"))
        }).catch(()=> {
        dispatch(setAppStatusAC("failed"))
    })
}

export const setGetPacksParamsTC=(data:any)=>(dispatch:Dispatch)=>{




}


export type GetPacksType = ReturnType<typeof GetCardsAC>
export type SetRangeType = ReturnType<typeof SetRangeAC>

type ActionsType = GetPacksType | SetRangeType
