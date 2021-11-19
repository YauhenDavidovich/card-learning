import {Dispatch} from "redux";
import {restorePasswordApi} from "../dal/restorePasswordApi";
import {setAppStatusAC} from "./app-reducer";

let initialState = {
    IsRequestNewPasswordSent: false,
    email: "",
    message: null as string | null

};

export type LoginInitialStateType = typeof initialState;

//Reducer
export const forgotPasswordReducer = (state = initialState, action: ActionTypes): LoginInitialStateType => {
    switch (action.type) {
        case IS_REQUEST_NEW_PASSWORD_SENT :
            return {...state, email: action.email, IsRequestNewPasswordSent: action.IsRequestNewPasswordSent}
        case SET_REQUEST_MESSAGE:
            return {...state, message: action.message}
        default:
            return state;
    }
};

// actions
const IS_REQUEST_NEW_PASSWORD_SENT = 'card-learning/forgot/IS_REQUEST_NEW_PASSWORD_SENT';
const SET_REQUEST_MESSAGE = 'card-learning/forgot/SET_MESSAGE';

// action Creators
export const checkIsRequestNewPasswordSent = (email: string, IsRequestNewPasswordSent: boolean) => ({
    type: IS_REQUEST_NEW_PASSWORD_SENT,
    email,
    IsRequestNewPasswordSent
} as const);
export const setRequestMessage = (message: string | null) => ({type: SET_REQUEST_MESSAGE, message} as const);

//thunks
export const requestForgotPasswordTC = (email: string, from: string, message: string) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    restorePasswordApi.requestForgotPassword({email, from, message})
        .then(res => {
                    dispatch(checkIsRequestNewPasswordSent(email,true))
                    dispatch(setRequestMessage("Check your email please"))
                    dispatch(setAppStatusAC("succeeded"))
            }
        )
        .catch(error => {
            dispatch(setRequestMessage(error.response ? error.response.data.error : error.message + "more details in the console"));
            dispatch(setAppStatusAC("failed"))
        })


}


// type ActionsTypes =
export type CheckIsRequestNewPasswordSentType = ReturnType<typeof checkIsRequestNewPasswordSent>;
export type SetRequestMessageType = ReturnType<typeof setRequestMessage>;
export type ActionTypes = CheckIsRequestNewPasswordSentType | SetRequestMessageType;
