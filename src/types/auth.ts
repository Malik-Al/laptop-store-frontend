export enum AuthActionTypes {
    FETCH_AUTH = 'FETCH_AUTH',
    FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS',
    FETCH_AUTH_ERROR = 'FETCH_AUTH_ERROR'
}
export interface AuthState {
    user: any,
    isAuth: boolean
    loading: boolean,
    error: null | string
}

interface FetchAuthActionCreate {
    type: AuthActionTypes.FETCH_AUTH
}

interface FetchAuthSuccessActionCreate {
    type: AuthActionTypes.FETCH_AUTH_SUCCESS,
    payload: any
}

interface FetchAuthErrorActionCreate {
    type: AuthActionTypes.FETCH_AUTH_ERROR,
    payload: string
}

export type AuthAction =
    FetchAuthActionCreate
    | FetchAuthSuccessActionCreate
    | FetchAuthErrorActionCreate
