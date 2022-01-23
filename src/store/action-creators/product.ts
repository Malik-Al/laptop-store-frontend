import axios from "axios";
import {ProductAction, ProductActionTypes} from "../../types/product";
import {Dispatch} from "redux";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

//Product get all
export const fetchProduct = () => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS})
            const response = await axios.get(`${SERVER_URL}/laptop`)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data})
        }catch (e){
            console.log(e)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR, payload: 'Error laptop request'})
        }
    }

}

//Product get one
export const fetchGetProduct = (id: string) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ONE})
            const response = await axios.get(`${SERVER_URL}/laptop/${id}`)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS_ONE, payload: response.data})
        }catch (e){
            console.log(e)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR_ONE, payload: 'Error laptop get one request'})
        }
    }
}

//Product delete
export const fetchDeleteProduct = (id: string) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_DELETE})
            await axios.delete(`${SERVER_URL}/laptop/${id}`)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS_DELETE, payload: id})
        }catch (e){
            console.log(e)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR_DELETE, payload: 'Error laptop delete request'})
        }
    }

}

//Product create
export const fetchCreateProduct = (name: string, description: string, price: string, picture: string) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_CREATE})
                const formData = new FormData()
                formData.append('name', name)
                formData.append('description', description)
                formData.append('price', price)
                formData.append('picture', picture)
                await axios.post(`${SERVER_URL}/laptop/`, formData).then(res => {
                dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS_CREATE, payload: res.data})
            }).catch(error => {
                    dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR_CREATE, payload: error.message})
                })
        }catch (e){
            console.log(e)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR_CREATE, payload: 'Error laptop create request'})
        }
    }
}

//Product update
export const fetchUpdateProduct = (id: string, name: string, description: string, price: string, picture: string) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_UPDATE})
                const formData = new FormData()
                formData.set('name', name)
                formData.set('description', description)
                formData.set('price', price)
                formData.set('picture', picture)
            await axios.put(`${SERVER_URL}/laptop/update/${id}`,formData ).then(res => {
                dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS_UPDATE, payload: res.data})
            }).catch(err => {
                dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR_UPDATE, payload: err.message})

            })
            // dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS_UPDATE, payload: response.data})
        }catch (e){
            console.log(e)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR_UPDATE, payload: 'Error laptop update request'})
        }
    }
}