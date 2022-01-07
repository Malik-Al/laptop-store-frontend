import axios from "axios";
import {ProductAction, ProductActionTypes} from "../../types/product";
import {Dispatch} from "redux";

//Product get all
export const fetchProduct = () => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS})
            const response = await axios.get('http://localhost:5000/product')
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data})
        }catch (e){
            console.log(e)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR, payload: 'Error product request'})
        }
    }

}

//Product get one
export const fetchGetProduct = (id: string) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ONE})
            const response = await axios.get(`http://localhost:5000/product/${id}`)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS_ONE, payload: response.data})
        }catch (e){
            console.log(e)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR_ONE, payload: 'Error product get one request'})
        }
    }
}

//Product delete
export const fetchDeleteProduct = (id: string) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_DELETE})
            await axios.delete(`http://localhost:5000/product/${id}`)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS_DELETE, payload: id})
        }catch (e){
            console.log(e)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR_DELETE, payload: 'Error product delete request'})
        }
    }

}

//Product create
export const fetchCreateProduct = (id: string) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_DELETE})
            const response = await axios.post(`http://localhost:5000/product/`)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS_DELETE, payload: response.data})
        }catch (e){
            console.log(e)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR_DELETE, payload: 'Error product delete request'})
        }
    }

}