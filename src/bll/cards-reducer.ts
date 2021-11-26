import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {Card, cardsApi, GetCardsParamsType, ResponseCardsType} from "../dal/cardsListApi";


const InitialState = {
    cards: [
        {
            answer: "",
            question: "",
            cardsPack_id: "",
            grade: 0,
            user_id: "",
            shots: 0,
            cardsCount: 0,
            created: "",
            updated: "",
        }],
    cardPacksTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    cardsParams: {
        max: 0,
        min: 0,
        page: 0,
        pageCount: 5,
        sortCards: "",
        cardsName: "",
        cardsPack_id: ""
    },
}

//types
type InitialStateType = {
    cards: Card[]
    cardPacksTotalCount: number
    cardsParams: CardsParamsType
    maxGrade: number
    minGrade: number
}
export type CardsParamsType = {
    max: number,
    min: number,
    page: number,
    pageCount: number,
    sortCards: string,
    cardsName: string,
    cardsPack_id: string
}


export const cardsReducer = (state = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case GET_CARDS:
            return {
                ...state,
                cards: action.data.cards,
                cardPacksTotalCount: action.data.cardsTotalCount,
                maxGrade: action.data.maxGrade,//from here we get max allowed value for slider
                minGrade: action.data.minGrade,//from here we get min allowed value for slider
                cardsParams: {
                    ...state.cardsParams,
                    //cardsPack_id: action.data.packUserId,
                    page: action.data.page,
                    pageCount: action.data.pageCount,
                }
            }
        case SET_CARDS_SORT_VALUE:
            return {
                ...state, cardsParams: {...state.cardsParams, sortCards: action.sortValue}
            }
        case SET_CARDS_PAGE:
            return {
                ...state, cardsParams: {...state.cardsParams, page: action.page}
            }
        case SET_CARDS_SEARCH_NAME:
            return {
                ...state, cardsParams: {...state.cardsParams, cardsName: action.cardsName, page: 1}
            }
        case SET_CARDS_PAGE_COUNT:
            return {
                ...state, cardsParams: {...state.cardsParams, pageCount: action.pageCount}
            }
        case SET_CARDS_PACK_ID:
            return {
                ...state, cardsParams: {...state.cardsParams, cardsPack_id: action.cardsPackId}
            }
        default:
            return state;
    }
}


const GET_CARDS = "card-learning/cards/GET-CARDS"
const SET_CARDS_SORT_VALUE = "card-learning/cards/SET-CARDS-SORT-VALUE"
const SET_CARDS_PAGE = "card-learning/cards/SET-CARDS-PAGE"
const SET_CARDS_SEARCH_NAME = "card-learning/cards/SET-CARDS-SEARCH-NAME"
const SET_CARDS_PAGE_COUNT = "card-learning/cards/SET-CARDS-PAGE_COUNT"
const SET_CARDS_PACK_ID = "card-learning/cards/SET-CARDS-PACK-ID"

export const GetCardsAC = (data: ResponseCardsType) => ({
    type: GET_CARDS,
    data,
} as const);

export const SetCardsSortValueAC = (sortValue: string) => ({
    type: SET_CARDS_SORT_VALUE,
    sortValue
} as const);

export const SetCardsPageAC = (page: number) => ({
    type: SET_CARDS_PAGE,
    page
} as const);


export const SetCardsPageCountAC = (pageCount: number) => ({
    type: SET_CARDS_PAGE_COUNT,
    pageCount,
} as const);

export const SetCardsSearchNameAC = (cardsName: string) => ({
    type: SET_CARDS_SEARCH_NAME,
    cardsName
} as const);

export const SetCardsPackIdAC = (cardsPackId: string) => ({
    type: SET_CARDS_PACK_ID,
    cardsPackId
} as const);

//thunks
export const getCardsTC = (data: GetCardsParamsType): GetThunk => (dispatch, getState) => {
    if (data.sortCards && data.sortCards !== getState().cards.cardsParams.sortCards) {
        dispatch(SetCardsSortValueAC(data.sortCards))
    }
    if (data.page) {
        dispatch(SetCardsPageAC(data.page))
    }
    if (data.cardName || data.cardName === "") {
        dispatch(SetCardsSearchNameAC(data.cardName))
    }

    if (data.pageCount && data.pageCount !== getState().cards.cardsParams.pageCount) {
        dispatch(SetCardsPageCountAC(data.pageCount))
    }
    if (data.user_id) {
        dispatch(SetCardsPackIdAC(data.user_id))
    }
    const state = getState().cards.cardsParams
    cardsApi.getCards(state)
        .then(res => {
            dispatch(GetCardsAC(res.data))
        })
}


export type GetCardsType = ReturnType<typeof GetCardsAC>
export type SetCardsSortValueType = ReturnType<typeof SetCardsSortValueAC>
export type SetCardsPageType = ReturnType<typeof SetCardsPageAC>
export type SetCardsSearchNameType = ReturnType<typeof SetCardsSearchNameAC>
export type SetCardsPageCountType = ReturnType<typeof SetCardsPageCountAC>
export type SetCardsPackIdType = ReturnType<typeof SetCardsPackIdAC>

type ActionsType = GetCardsType
    | SetCardsSortValueType
    | SetCardsPageType
    | SetCardsSearchNameType
    | SetCardsPageCountType
    | SetCardsPackIdType


export type GetThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>