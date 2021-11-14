import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {loginReducer} from "./login-reducer";
import {forgotPasswordReducer} from "./forgotPassword-reducer";
import {setNewPasswordReducer} from "./setNewPassword-reducer";
import {registrationReducer} from "./registration-reducer";
import {profileReducer} from "./profile-reducer";

const rootReducer = combineReducers({
    login: loginReducer,
    forgot: forgotPasswordReducer,
    newPassword: setNewPasswordReducer,
    registration: registrationReducer,
    profile: profileReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionTypes<T extends { [key: string]: (...args: any) => any }> = ReturnType<PropertiesType<T>>
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

const store = createStore(rootReducer, applyMiddleware(thunk));
export default // @ts-ignore
window.store = store;
