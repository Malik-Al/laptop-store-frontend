export enum ProductActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',

    FETCH_PRODUCTS_DELETE = 'FETCH_PRODUCTS_DELETE',
    FETCH_PRODUCTS_SUCCESS_DELETE = 'FETCH_PRODUCTS_SUCCESS_DELETE',
    FETCH_PRODUCTS_ERROR_DELETE = 'FETCH_PRODUCTS_ERROR_DELETE'
}


export interface ProductState {
    products: any[],
    loading: boolean,
    error: null | string
}

interface FetchProductsAction {
    type: ProductActionTypes.FETCH_PRODUCTS
}

interface FetchProductsSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: any[]
}

interface FetchProductsErrorAction {
    type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
    payload: string
}
/////////////////////////////////////////////////////////////

interface FetchProductsActionDelete {
    type: ProductActionTypes.FETCH_PRODUCTS_DELETE
}

interface FetchProductsSuccessActionDelete {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS_DELETE,
    payload: number
}

interface FetchProductsErrorActionDelete {
    type: ProductActionTypes.FETCH_PRODUCTS_ERROR_DELETE,
    payload: string
}
export type ProductAction =
    FetchProductsAction
    | FetchProductsSuccessAction
    | FetchProductsErrorAction
    | FetchProductsActionDelete
    | FetchProductsSuccessActionDelete
    | FetchProductsErrorActionDelete
