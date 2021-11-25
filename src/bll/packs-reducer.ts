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
        pageCount: 10,
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
    packName: string,
}

export const packsReducer = (state = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case GET_PACKS:
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
        case SET_PACKS_SEARCH_NAME:
            return {
                ...state, packsParams: {...state.packsParams, packName: action.packName, page: 1}
            }
        case SET_PAGE_COUNT:
            return {
                ...state, packsParams:{...state.packsParams, pageCount:action.pageCount}
            }
        case DELETE_PACK:
            return {
                ...state,
                cardPacks: state.cardPacks.filter((cardPack) => cardPack._id === action.packId)
            }
        default:
            return state;
    }
}


const GET_PACKS = "card-learning/packs/GET-CARDS"
const SET_SORT_VALUE = "card-learning/packs/SET_SORT_VALUE"
const SET_PACKS_PAGE = "card-learning/packs/SET_PACKS_PAGE"
const SET_PACKS_CARD_RANGE = "card-learning/packs/SET_PACKS_CARD_RANGE"
const SET_PACKS_CARD_OWNER_FILTER = "card-learning/packs/SET_PACKS_CARD_OWNER_FILTER"
const SET_PACKS_SEARCH_NAME = "card-learning/packs/SET_PACKS_SEARCH_NAME"
const SET_PAGE_COUNT = 'card-learning/packs/SET-PAGE_COUNT'
const DELETE_PACK = 'card-learning/packs/DELETE_PACK'
const UPDATE_PACK = 'card-learning/packs/UPDATE_PACK'

export const GetCardsAC = (data: ResponsePacksType) => ({
    type: GET_PACKS,
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
export const SetPageCountAC = (pageCount: number) => ({
    type: SET_PAGE_COUNT,
    pageCount,
} as const);

export const SetPacksSearchNameAC = (packName: string) => ({
    type: SET_PACKS_SEARCH_NAME,
    packName
} as const);

export const DeletePackAC = (packId: string) => ({
    type: DELETE_PACK,
    packId
} as const)




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
    if (data.packName || data.packName==="") {
        dispatch(SetPacksSearchNameAC(data.packName))
    }

    if( data.pageCount && data.pageCount !== getState().packs.packsParams.pageCount) {
        dispatch(SetPageCountAC(data.pageCount))
    }
    const state = getState().packs.packsParams
    packsListAPI.getPacks(state)
        .then(res => {
            dispatch(GetCardsAC(res.data))
        })
}

export const deletePackTC = (packId: string):GetThunk => (dispatch, getState: () => AppStateType) => {
    const userId = getState().login.user._id
    packsListAPI.deletePack(packId)
        .then(() => {
            dispatch(DeletePackAC(packId))
            dispatch(getCardsTC({user_id: userId}))
        })
        .catch(error => {
            // dispatch(setErrorMessage(error.message ? error.message :"Network error occurred!"));
            // dispatch(setForgotStatus("failed"))
        })
}

export const updatePackTC = (_id: string, name: string):GetThunk => (dispatch, getState: () => AppStateType) => {
    const userId = getState().login.user._id
    packsListAPI.updatePack({name:name, _id: _id})
        .then(() => {
            dispatch(getCardsTC({user_id: userId}))
        })
        .catch(error => {
            // dispatch(setErrorMessage(error.message ? error.message :"Network error occurred!"));
            // dispatch(setForgotStatus("failed"))
        })
}

export type GetPacksType = ReturnType<typeof GetCardsAC>
export type SetSortValueType = ReturnType<typeof SetSortValueAC>
export type SetPacksPageType = ReturnType<typeof SetPacksPageAC>
export type SetPacksCardRangeType = ReturnType<typeof SetPacksCardRangeAC>
export type SetPacksCardOwnerFilterType = ReturnType<typeof SetPacksCardOwnerFilterAC>
export type SetPacksSearchNameType = ReturnType<typeof SetPacksSearchNameAC>
export type SetPageCountType = ReturnType<typeof SetPageCountAC>
export type DeletePackType = ReturnType<typeof DeletePackAC>


type ActionsType = GetPacksType
    | SetSortValueType
    | SetPacksPageType
    | SetPacksCardRangeType
    | SetPacksCardOwnerFilterType
    | SetPacksSearchNameType
    | SetPageCountType
    | DeletePackType


export type GetThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>
