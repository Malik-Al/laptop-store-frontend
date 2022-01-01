import axios from "axios";
import {ProductAction, ProductActionTypes} from "../../types/product";
import {Dispatch} from "redux";

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