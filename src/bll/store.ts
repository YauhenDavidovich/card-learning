import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({

});

export type AppStateType = ReturnType<typeof rootReducer>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionTypes<T extends {[key: string]: (...args:any)=> any}> = ReturnType<PropertiesType<T>>

const store = createStore(rootReducer, applyMiddleware(thunk));
export default
// @ts-ignore
window.store = store;
