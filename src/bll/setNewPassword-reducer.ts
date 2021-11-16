import {Dispatch} from "redux";
import {restorePasswordApi} from "../dal/restorePasswordApi";
import {Params} from "react-router-dom";

const initialState = {
    isNewPasswordSet: false,
    message: null as string | null
}

export type InitialStateType = typeof initialState
//reducer
export const setNewPasswordReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch(action.type) {
        case SET_NEW_PASSWORD:
            return {...state, isNewPasswordSet: action.isPasswordSet}
        case SET_REQUEST_MESSAGE:
            return {...state, message: action.message}
        default:
            return state;
    }
}

// actions
const  SET_NEW_PASSWORD  = "card-learning/newPassword/SET_NEW_PASSWORD";
const SET_REQUEST_MESSAGE   = 'card-learning/newPassword/SET_MESSAGE';

//action creators
export const setNewPassword = (isPasswordSet: boolean) => ({ type: "card-learning/newPassword/SET_NEW_PASSWORD", isPasswordSet } as const);
export const setRequestMessage = (message: string | null) => ({ type: SET_REQUEST_MESSAGE , message } as const);
//thunk
export const setNewPasswordTC = (password: string, resetPasswordToken: string) => (dispatch: Dispatch) => {
    restorePasswordApi.setNewPassword({ password, resetPasswordToken })
        .then(res => {
            if(res.data.info) {
                dispatch(setNewPassword(true))
            } else if(res.data.error) {
                dispatch(setRequestMessage(res.data.error))
            } else {
                dispatch(setRequestMessage("Some error occurred!"))
            }
        })
        .catch(error => {
            dispatch(setRequestMessage(error.message ? error.message :"Network error occurred!"));
        })
}

//action types
export type SetNewPasswordType = ReturnType<typeof setNewPassword>;
type SetRequestMessageType = ReturnType<typeof setRequestMessage>;
export type ActionTypes = SetRequestMessageType | SetNewPasswordType;
