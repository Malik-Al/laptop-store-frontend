import {Dispatch} from "redux";
import axios from "axios";
import {AuthAction, AuthActionTypes} from "../../types/auth";
import jwt_decode from "jwt-decode";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;


export const fetchLoginLocalStorage = (email: string, password: string) => {
    return async () => {
        try {
            await axios.post(`${SERVER_URL}/auth/login`,{
                email,
                password
            }).then(res => {
                localStorage.setItem('user', JSON.stringify(res.data))
            })
        }catch (e){
            console.log(e)
        }
    }
}

export const fetchRegister = (email: string, password: string, firstname: string, lastname: string) => {
    return async () => {
        try {
           return await axios.post(`${SERVER_URL}/auth/registration`,{
                email,
                password,
                firstname,
                lastname
            })
        }catch (e){
            console.log(e)
        }
    }
}


export const fetchLoginUser = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const local: any = localStorage.getItem('user')
            const tokenName = JSON.parse(local)
            const users: any = jwt_decode(tokenName.token)
            console.log('user', local)
            dispatch({type: AuthActionTypes.FETCH_AUTH})
            dispatch({type: AuthActionTypes.FETCH_AUTH_SUCCESS, payload: users})

        }catch (e){
            console.log(e)
            dispatch({type: AuthActionTypes.FETCH_AUTH_ERROR, payload: 'Error user login request'})
        }
    }
}
