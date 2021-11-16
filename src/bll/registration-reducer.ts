import {Dispatch} from "redux";
import {registrationAPI} from "../dal/registration-api";

let initialState = {
    isRegistered: false
};

export type LoginInitialStateType = typeof initialState;

//Reducer
export const registrationReducer = (state = initialState, action: ActionsType): LoginInitialStateType => {
    switch (action.type) {
        case "REGISTERED":
            return {...state, isRegistered: action.isRegistered}
        default:
            return state;
    }
};

// actions

const isRegisteredAC = (isRegistered: boolean) => ({type: "REGISTERED", isRegistered})

//thunks
export const registrationTC = (email: string, password: string) => (dispatch: Dispatch) => {
    registrationAPI.registration(email, password)
        .then((res)=> {
            dispatch(isRegisteredAC(true))
        })
        .catch((error)=>{
            alert("This email is already registered")
    })
}

// Action Creators
//types

// type ActionsTypes =
type ActionsType = ReturnType<typeof isRegisteredAC>