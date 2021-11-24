import {CardsPack, GetPacksParamsType, packsListAPI, ResponsePacksType} from "../dal/packsListApi";
import {AppStateType} from "./store";
import {ThunkAction} from "redux-thunk"

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
    packsParams: {
        max: 0,
        min: 0,
        page: 0,
        pageCount: 0,
        sortPacks: "",
    },
}



//types
type InitialStateType = {
    cardPacks: CardsPack[]
    cardPacksTotalCount: number
    packsParams: PacksParamsType
    maxCardsCount: number
    minCardsCount: number
}
export type PacksParamsType = {
    max: number,
    min: number,
    page: number,
    pageCount: number,
    sortPacks: string
}

export const packsReducer = (state = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case GETPACKS:
            return {
                ...state,
                cardPacks: action.data.cardPacks,
                cardPacksTotalCount: action.data.cardPacksTotalCount,
                maxCardsCount: action.data.maxCardsCount,//from here we get max allowed value for slider
                minCardsCount: action.data.minCardsCount,//from here we get min allowed value for slider
                packsParams: {
                    ...state.packsParams,
                    page: action.data.page,
                    pageCount: action.data.pageCount
                }
            }
        case SET_SORT_VALUE:
            return {
                ...state, packsParams: {...state.packsParams, sortPacks: action.sortValue}
            }
        case SET_PACKS_PAGE:
            return {
                ...state, packsParams: {...state.packsParams, page: action.page}
            }
        case SET_PACKS_CARD_RANGE:
            return {
                ...state, packsParams: {...state.packsParams, min: action.min, max: action.max}
            }
        default:
            return state;
    }
}


const GETPACKS = "card-learning/cards/GET-CARDS"
const SET_SORT_VALUE = "card-learning/cards/SET_SORT_VALUE"
const SET_PACKS_PAGE = "card-learning/cards/SET_PACKS_PAGE"
const SET_PACKS_CARD_RANGE = "card-learning/cards/SET_PACKS_CARD_RANGE"


export const GetCardsAC = (data: ResponsePacksType) => ({
    type: GETPACKS,
    data: data,
} as const);

export const SetSortValueAC = (sortValue: string) => ({
    type: SET_SORT_VALUE,
    sortValue
} as const);

export const SetPacksPageAC = (page: number) => ({
    type: SET_PACKS_PAGE,
    page
} as const);

export const SetPacksCardRangeAC = (min: number, max: number) => ({
    type: SET_PACKS_CARD_RANGE,
    min,
    max
} as const);


export const getCardsTC = (data: GetPacksParamsType): GetThunk => (dispatch, getState) => {
    if (data.sortPacks && data.sortPacks !== getState().packs.packsParams.sortPacks) {
        dispatch(SetSortValueAC(data.sortPacks))
    }
    if (data.page) {
        dispatch(SetPacksPageAC(data.page))
    }
    if (data.min && data.max) {
        dispatch(SetPacksCardRangeAC(data.min, data.max))
    }
    const state = getState().packs.packsParams
    packsListAPI.getPacks(state)
        .then(res => {
            dispatch(GetCardsAC(res.data))
        })
}


export type GetPacksType = ReturnType<typeof GetCardsAC>
export type SetSortValueType = ReturnType<typeof SetSortValueAC>
export type SetPacksPageType = ReturnType<typeof SetPacksPageAC>
export type SetPacksCardRangeType = ReturnType<typeof SetPacksCardRangeAC>

type ActionsType = GetPacksType
    | SetSortValueType
    | SetPacksPageType
    | SetPacksCardRangeType


export type GetThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>
