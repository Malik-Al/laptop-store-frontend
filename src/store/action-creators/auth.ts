import {Dispatch} from "redux";
import axios from "axios";
import {AuthAction, AuthActionTypes} from "../../types/auth";
import jwt_decode from "jwt-decode";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const fetchLoginUser = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.FETCH_AUTH})
            await axios.post(`${SERVER_URL}/auth/login`,{
                email,
                password
            }).then(res => {
                localStorage.setItem('user', JSON.stringify(res.data))
                const local: any = localStorage.getItem('user')
                const tokenName = JSON.parse(local)
                const users = jwt_decode(tokenName.token)
                dispatch({type: AuthActionTypes.FETCH_AUTH_SUCCESS, payload: users})
            }).catch(error => {
                dispatch({type: AuthActionTypes.FETCH_AUTH_ERROR, payload: error.message})
            })
        }catch (e){
            console.log(e)
            dispatch({type: AuthActionTypes.FETCH_AUTH_ERROR, payload: 'Error user login request'})
        }
    }
}

