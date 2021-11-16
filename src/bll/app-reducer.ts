import { authAPI } from "../dal/initialize-api";
import {Dispatch} from "redux";

const initialState = {
    status: "idle",
    isInitialized: false
};

export type AppInitialStateType = typeof initialState;

//Reducer
export const appReducer = (state = initialState, action: any): AppInitialStateType => {
    switch (action.type) {
        case "APP/SET-STATUS":
            return {...state, status: action.status}
        case "APP/INITIALAZE":
            return {...state, isInitialized: action.isInitialazed}
        default:
            return {...state}
    }
};


// Action Creators
export const setAppStatusAC = (status: RequestStatusType) => ({type: "APP/SET-STATUS", status} as const)
export const setIsInitializedAC = (isInitialazed: boolean) => ({type: "APP/INITIALAZE", isInitialazed} as const)

//thunks

export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(res => {
    })
        .catch(()=> {
            alert('you are not authorized')
        }).finally(()=>{
        dispatch(setIsInitializedAC(true))
    })
}


//types
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"


type ActionsType =
    | SetAppStatusActionType
    | SetAppInitialazeActionType


export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetAppInitialazeActionType = ReturnType<typeof setIsInitializedAC>


