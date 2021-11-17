import {Dispatch} from "redux";
import {authApi, LoginParamsType, ResponseUserType} from "../dal/authApi";

let initialState:LoginInitialStateType = {
    email: "",
    login: "",
    idUser: "",
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
    email: string
    login: string
    idUser:string
    isAuth: boolean
    user: ResponseUserType
}

//Reducer
export const loginReducer = (state:LoginInitialStateType = initialState, action: ActionsTypes): LoginInitialStateType => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                email: action.email,
                idUser: action._id,
                isAuth: action.isAuth,
            }
        case LOGOUT:
            return {
                ...state,
                email: action.email,
                idUser: action._id,
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
const LOGOUT = 'card-learning/login/LOG-OUT';
const SETUSER = 'card-learning/login/SET-USER';

// Action Creators
export const SetIsLoggedIn = (email: string, _id: string,isAuth: boolean) => ({
    type: LOGIN,
    email,
    _id,
    isAuth,
} as const);

export const SetIsLoggedOut = (email: string, _id: string, isAuth: boolean) => ({
    type: LOGOUT,
    email,
    _id,
    isAuth
} as const);

export const SetUserAC = (data:ResponseUserType) => ({
    type: SETUSER,
    data,
} as const);

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
    authApi.logIn(data)

        .then(res => {
            dispatch(SetIsLoggedIn(res.data.email, res.data._id,true))
            dispatch(SetUserAC(res.data))
        })
        .catch(err => {
            // console.log({...err})
            // const error = err.res ?
            //     err.res.data.error :
            //     (err.message + ', more details in the console')
        })
}

export const logOutTC=()=>(dispatch: Dispatch)=>{

    return authApi.logOut()
        .then(res => {
            dispatch(SetIsLoggedOut('','',false))
            return res
        })}


export type SetUserType = ReturnType<typeof SetUserAC>
export type SetIsLoggedInType = ReturnType<typeof SetIsLoggedIn>;
export type SetIsLoggedOutType = ReturnType<typeof SetIsLoggedOut>;
type ActionsTypes = SetIsLoggedOutType | SetIsLoggedInType | SetUserType
