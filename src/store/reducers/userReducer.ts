import {AuthAction, AuthActionTypes, AuthState} from "../../types/auth";


const initialState: AuthState = {
    user: {},
    isAuth: false,
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.FETCH_AUTH:
            return {...state,loading: true, error: null, isAuth: true }

        case AuthActionTypes.FETCH_AUTH_SUCCESS:
            return {...state, user: action.payload, isAuth: true }

        case AuthActionTypes.FETCH_AUTH_ERROR:
            return {loading: false, error: action.payload, user: [], isAuth: false }

        default:
            return state
    }
}