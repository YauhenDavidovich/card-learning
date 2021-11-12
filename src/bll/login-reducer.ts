let initialState = {
    email: "",
    login: "",
    idUser: "",
    isAuth: false
};

export type LoginInitialStateType = typeof initialState;

//Reducer
export const loginReducer = (state = initialState, action: ActionsTypes): LoginInitialStateType => {
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
        default:
            return state;
    }
};

// actions
const LOGIN   = 'card-learning/login/LOG-IN';
const LOGOUT   = 'card-learning/login/LOG-IN';


// Action Creators
export const SetIsLoggedIn = (email: string, _id: string, isAuth: boolean) => ({
    type: LOGIN,
    email,
    _id,
    isAuth
} as const);

export const SetIsLoggedOut = (email: string, _id: string, isAuth: boolean) => ({
    type: LOGOUT,
    email,
    _id,
    isAuth
} as const);

export type SetIsLoggedInType = ReturnType<typeof SetIsLoggedIn>;
export type SetIsLoggedOutType = ReturnType<typeof SetIsLoggedOut>;
type ActionsTypes = SetIsLoggedOutType | SetIsLoggedInType
