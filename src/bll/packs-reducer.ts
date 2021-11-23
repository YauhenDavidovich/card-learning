import {GetPacksParamsType, packsListAPI, ResponsePacksType} from "../dal/packsListApi";
import {Dispatch} from "redux";

const InitialState = {
    cardPacks: [
        {
            _id: "",
            user_id: "",
            name: "",
            cardsCount: 0,
            created: "",
            updated: ""
        }],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 0,
    pageCount: 0,
    sortPacks: "",
}

type InitialStateType = typeof InitialState

export const packsReducer = (state = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case GETPACKS:
            return {
                ...state,
                cardPacks: action.data.cardPacks,
                cardPacksTotalCount: action.data.cardPacksTotalCount,
                maxCardsCount: action.data.maxCardsCount,
                minCardsCount: action.data.minCardsCount,
                page: action.data.page,
                pageCount: action.data.pageCount
            }
        case SET_SORT_VALUE:
            return {
                ...state, sortPacks: action.sortValue
            }
        default:
            return state;
    }
}


const GETPACKS = "card-learning/cards/GET-CARDS"
const SET_SORT_VALUE = "card-learning/cards/SET_SORT_VALUE"


export const GetCardsAC = (data: ResponsePacksType) => ({
    type: GETPACKS,
    data: data,
} as const);

export const SetSortValueAC = (sortValue: string) => ({
    type: SET_SORT_VALUE,
    sortValue
} as const);


export const getCardsTC = (data: GetPacksParamsType) => (dispatch: Dispatch) => {
    if(data.sortPacks){
        dispatch(SetSortValueAC(data.sortPacks))
    }
    packsListAPI.getPacks(data)
        .then(res => {
            dispatch(GetCardsAC(res.data))
        })
}


export type GetPacksType = ReturnType<typeof GetCardsAC>
export type SetSortValueType = ReturnType<typeof SetSortValueAC>

type ActionsType = GetPacksType | SetSortValueType
