import {CardsPack, GetPacksParamsType, packsListAPI, ResponsePacksType} from "../dal/packsListApi";
import {AppStateType} from "./store";
import {ThunkAction} from "redux-thunk"
import {setAppStatusAC} from "./app-reducer";

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
        user_id: "",
        packName: "",
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
    sortPacks: string,
    user_id: string,
    packName: string
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
        case SET_PACKS_CARD_OWNER_FILTER:
            return {
                ...state, packsParams: {...state.packsParams, user_id: action.owner}
            }
        case SET_PACKS_NAME:
            return {
                ...state, packsParams: {...state.packsParams, packName: action.packName}
            }
        default:
            return state;
    }
}


const GETPACKS = "card-learning/cards/GET-CARDS"
const SET_SORT_VALUE = "card-learning/cards/SET_SORT_VALUE"
const SET_PACKS_PAGE = "card-learning/cards/SET_PACKS_PAGE"
const SET_PACKS_CARD_RANGE = "card-learning/cards/SET_PACKS_CARD_RANGE"
const SET_PACKS_CARD_OWNER_FILTER = "card-learning/cards/SET_PACKS_CARD_OWNER_FILTER"
const SET_PACKS_NAME = "card-learning/cards/SET_PACKS_NAME"

//Actions
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

export const SetPacksCardOwnerFilterAC = (owner: string) => ({
    type: SET_PACKS_CARD_OWNER_FILTER,
    owner
} as const);
export const SetPacksNameAC = (packName: string) => ({
    type: SET_PACKS_NAME,
    packName
} as const);


//thunks
export const getCardsTC = (data: GetPacksParamsType): GetThunk => (dispatch, getState) => {
    if (data.sortPacks && data.sortPacks !== getState().packs.packsParams.sortPacks) {
        dispatch(SetSortValueAC(data.sortPacks))
    }
    if (data.page) {
        dispatch(SetPacksPageAC(data.page))
    }
    if (data.min !== undefined && data.max !== undefined) {
        dispatch(SetPacksCardRangeAC(data.min, data.max))
    }
    if (data.user_id) {
        if (data.user_id === "all") {
            dispatch(SetPacksCardOwnerFilterAC(""))
        } else {
            dispatch(SetPacksCardOwnerFilterAC(data.user_id))
        }
    }
    if (data.packName) {
        dispatch(SetPacksNameAC(data.packName))
    }
    const state = getState().packs.packsParams
    packsListAPI.getPacks(state)
        .then(res => {
            dispatch(GetCardsAC(res.data))
        })
}

//types
export type GetPacksType = ReturnType<typeof GetCardsAC>
export type SetSortValueType = ReturnType<typeof SetSortValueAC>
export type SetPacksPageType = ReturnType<typeof SetPacksPageAC>
export type SetPacksCardRangeType = ReturnType<typeof SetPacksCardRangeAC>
export type SetPacksCardOwnerFilterType = ReturnType<typeof SetPacksCardOwnerFilterAC>
export type SetPacksNameType = ReturnType<typeof SetPacksNameAC>


type ActionsType = GetPacksType
    | SetSortValueType
    | SetPacksPageType
    | SetPacksCardRangeType
    | SetPacksCardOwnerFilterType
    | SetPacksNameType


export type GetThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>
