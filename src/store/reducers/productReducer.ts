import {ProductAction, ProductActionTypes, ProductState} from "../../types/product";

const initialState: ProductState = {
    products: [],
    product: {},
    loading: false,
    error: null
}

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
    switch (action.type){

        // PRODUCTS
        case ProductActionTypes.FETCH_PRODUCTS:
            return {loading: true, error: null, products: []}

        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {loading: false, error: null, products: action.payload}

        case ProductActionTypes.FETCH_PRODUCTS_ERROR:
            return {loading: false, error: action.payload, products: []}


        // DELETE
        case ProductActionTypes.FETCH_PRODUCTS_DELETE:
            return {...state,loading: false, error: null}

        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS_DELETE:
            return {loading: false, error: null, products: state.products.filter(item => item.id !== action.payload) }

        case ProductActionTypes.FETCH_PRODUCTS_ERROR_DELETE:
            return {loading: false, error: action.payload, products: []}


        // GET ONE
        case ProductActionTypes.FETCH_PRODUCTS_ONE:
            return {...state,loading: true, error: null}

        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS_ONE:
            return {...state,loading: false,error: null, product: action.payload}

        case ProductActionTypes.FETCH_PRODUCTS_ERROR_ONE:
            return {loading: false, error: action.payload, products: []}


        // CREATE
        case ProductActionTypes.FETCH_PRODUCTS_CREATE:
            return {...state,loading: true, error: null}

        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS_CREATE:
            return {loading: false, error: null, products: [...state.products, action.payload]}

        case ProductActionTypes.FETCH_PRODUCTS_ERROR_CREATE:
            return {loading: false, error: action.payload, products: []}


        // UPDATE
        case ProductActionTypes.FETCH_PRODUCTS_UPDATE:
            return {...state,loading: true, error: null}

        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS_UPDATE:
            return {loading: false, error: null, products: [...state.products, action.payload]}

            // return {loading: false, error: null, products: state.products.map((product) => {
            //     if(product.id === action.payload.id){
            //         return {
            //             ...product,
            //             ...action.payload
            //         }
            //     }else {
            //         return product
            //     }
            //     }
            // )}

        case ProductActionTypes.FETCH_PRODUCTS_ERROR_UPDATE:
            return {loading: false, error: action.payload, products: []}


        default:
            return state
    }
}