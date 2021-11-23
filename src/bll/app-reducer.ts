import {authAPI} from "../dal/initialize-api";
import {Dispatch} from "redux";
import {SetIsLoggedIn, SetUserAC} from "./login-reducer";

const initialState = {
    status: "idle" as RequestStatusType
};

export type AppInitialStateType = typeof initialState;

//Reducer
export const appReducer = (state = initialState, action: ActionsType): AppInitialStateType => {
    switch (action.type) {
        case "APP/SET-STATUS":
            return {...state, status: action.status}

        default:
            return {...state}
    }
};


// Action Creators
export const setAppStatusAC = (status: RequestStatusType) => ({type: "APP/SET-STATUS", status} as const)
export const setIsInitializedAC = (isInitialazed: boolean) => ({type: "APP/INITIALAZE", isInitialazed} as const)

//thunks

export const initializeAppTC = () => (dispatch: Dispatch) => {

    dispatch(setAppStatusAC('loading'))
    authAPI.me()
        .then(res => {
            dispatch(SetIsLoggedIn(true))
            dispatch(SetUserAC(res.data))
            dispatch(setAppStatusAC("succeeded"))
    })
        .catch(()=> {
            dispatch(setAppStatusAC("failed"))
        })
}


//types
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"


type ActionsType =
    | SetAppStatusActionType
    | SetAppInitialazeActionType


export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetAppInitialazeActionType = ReturnType<typeof setIsInitializedAC>


