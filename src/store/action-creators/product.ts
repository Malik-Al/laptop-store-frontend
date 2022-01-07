import axios from "axios";
import {ProductAction, ProductActionTypes} from "../../types/product";
import {Dispatch} from "redux";

export const fetchProduct = () => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS})
            // const response = await axios.get('http://localhost:5000/product')
            const response = await {data: [{id: 1, price: 1000, name: '1'}, {id: 2, price: 2000, name: '2'}]}
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data})
        }catch (e){
            console.log(e)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR, payload: 'Error product request'})
        }
    }

}

export const fetchGetProduct = (id: string) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS})
            const response = await axios.get(`http://localhost:5000/product/${id}`).then(res => res)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data})
        }catch (e){
            console.log(e)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR, payload: 'Error product get one request'})
        }
    }
}

export const fetchDeleteProduct = (id: string) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_DELETE})
            // const response = await axios.delete(`http://localhost:5000/product/${id}`)
            const response = await {data: parseInt(id,10)}
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS_DELETE, payload: response.data})
        }catch (e){
            console.log(e)
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR_DELETE, payload: 'Error product get one request'})
        }
    }

}
