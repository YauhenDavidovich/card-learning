import {Dispatch} from "redux";
import {restorePasswordApi} from "../dll/restorePasswordApi";

let initialState = {
    IsRequestNewPasswordSent: false,
    message: null as string | null

};

export type LoginInitialStateType = typeof initialState;

//Reducer
export const forgotPasswordReducer = (state = initialState, action: ActionTypes): LoginInitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
};

// actions
const IS_REQUEST_NEW_PASSWORD_SENT   = 'card-learning/forgot/IS_REQUEST_NEW_PASSWORD_SENT ';
const SET_REQUEST_MESSAGE   = 'card-learning/forgot/SET_MESSAGE';

// action Creators
export const checkIsRequestNewPasswordSent = (IsRequestNewPasswordSent: boolean) => ({ type: IS_REQUEST_NEW_PASSWORD_SENT, IsRequestNewPasswordSent } as const);
export const setRequestMessage = (message: string | null) => ({ type: SET_REQUEST_MESSAGE , message } as const);

//thunks
export const requestForgotPasswordTC = (email: string, from: string, message: string) => (dispatch: Dispatch) => {
    restorePasswordApi.requestForgotPassword({ email, from, message })
        .then(res => {
            console.log(res.data)
            if(res.data.success) {
                dispatch(checkIsRequestNewPasswordSent(true))
                dispatch(setRequestMessage("Check your email please"))
            } else {
                dispatch(setRequestMessage("Something went wrong"))
            }
        })
        .catch(error => {
            dispatch(setRequestMessage(error.message ? error.message :"Network error occurred!"));
        })
}


// type ActionsTypes =
export type CheckIsRequestNewPasswordSentType = ReturnType<typeof checkIsRequestNewPasswordSent>;
export type SetRequestMessageType = ReturnType<typeof setRequestMessage>;
export type ActionTypes = CheckIsRequestNewPasswordSentType | SetRequestMessageType;
