import {Dispatch} from "redux";
import {authApi, LoginParamsType, ResponseUserType} from "../dal/authApi";
import {setAppStatusAC} from "./app-reducer";

let initialState:LoginInitialStateType = {
    isAuth: false,
    user: {
        _id:'',
        email:'',
        name:'',
        avatar:'',
        publicCardPacksCount: 0,
        created: new Date,
        updated: new Date,
        isAdmin: false,
        verified: false,
        rememberMe: false,
        error: ''
    }
};

export type LoginInitialStateType = {
    isAuth: boolean
    user: ResponseUserType
}

//Reducer
export const loginReducer = (state:LoginInitialStateType = initialState, action: ActionsTypes): LoginInitialStateType => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuth: action.isAuth,
            }
        case SETUSER:
            return {
                ...state,
                user: action.data
            }
        default:
            return state;
    }
};

// actions
const LOGIN = 'card-learning/login/LOG-IN';
const SETUSER = 'card-learning/login/SET-USER';

// Action Creators
export const SetIsLoggedIn = (isAuth: boolean) => ({
    type: LOGIN,
    isAuth,
} as const);

export const SetUserAC = (data:ResponseUserType) => ({
    type: SETUSER,
    data,
} as const);

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    authApi.logIn(data)
        .then(res => {
            dispatch(SetIsLoggedIn(true))
            dispatch(SetUserAC(res.data))
            dispatch(setAppStatusAC("succeeded"))
        })
        .catch(err => {
            dispatch(setAppStatusAC("failed"))
            // console.log({...err})
            // const error = err.res ?
            //     err.res.data.error :
            //     (err.message + ', more details in the console')
        })
}

export const logOutTC=()=>(dispatch: Dispatch)=>{
     authApi.logOut()
        .then(res => {
            dispatch(SetIsLoggedIn(false))
            dispatch(SetUserAC(res.data))
        })}


export type SetUserType = ReturnType<typeof SetUserAC>
export type SetIsLoggedInType = ReturnType<typeof SetIsLoggedIn>;
type ActionsTypes = SetIsLoggedInType | SetUserType
