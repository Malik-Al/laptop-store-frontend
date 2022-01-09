export enum ProductActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',

    FETCH_PRODUCTS_DELETE = 'FETCH_PRODUCTS_DELETE',
    FETCH_PRODUCTS_SUCCESS_DELETE = 'FETCH_PRODUCTS_SUCCESS_DELETE',
    FETCH_PRODUCTS_ERROR_DELETE = 'FETCH_PRODUCTS_ERROR_DELETE',

    FETCH_PRODUCTS_ONE = 'FETCH_PRODUCTS_ONE',
    FETCH_PRODUCTS_SUCCESS_ONE = 'FETCH_PRODUCTS_SUCCESS_ONE',
    FETCH_PRODUCTS_ERROR_ONE = 'FETCH_PRODUCTS_ERROR_ONE',

    FETCH_PRODUCTS_CREATE = 'FETCH_PRODUCTS_CREATE',
    FETCH_PRODUCTS_SUCCESS_CREATE = 'FETCH_PRODUCTS_SUCCESS_CREATE',
    FETCH_PRODUCTS_ERROR_CREATE = 'FETCH_PRODUCTS_ERROR_CREATE'
}


export interface ProductState {
    products: any[],
    loading: boolean,
    error: null | string
}


// Product get all
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


// Product delete

interface FetchProductsActionDelete {
    type: ProductActionTypes.FETCH_PRODUCTS_DELETE
}

interface FetchProductsSuccessActionDelete {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS_DELETE,
    payload: string
}

interface FetchProductsErrorActionDelete {
    type: ProductActionTypes.FETCH_PRODUCTS_ERROR_DELETE,
    payload: string
}


// Product get one

interface FetchProductsActionOne {
    type: ProductActionTypes.FETCH_PRODUCTS_ONE
}

interface FetchProductsSuccessActionOne {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS_ONE,
    payload: any[]
}

interface FetchProductsErrorActionOne {
    type: ProductActionTypes.FETCH_PRODUCTS_ERROR_ONE,
    payload: string
}



// create product

interface FetchProductsActionCreate {
    type: ProductActionTypes.FETCH_PRODUCTS_CREATE
}

interface FetchProductsSuccessActionCreate {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS_CREATE,
    payload: any[]
}

interface FetchProductsErrorActionCreate {
    type: ProductActionTypes.FETCH_PRODUCTS_ERROR_CREATE,
    payload: string
}


export type ProductAction =
    FetchProductsAction
    | FetchProductsSuccessAction
    | FetchProductsErrorAction
    | FetchProductsActionDelete
    | FetchProductsSuccessActionDelete
    | FetchProductsErrorActionDelete
    | FetchProductsActionOne
    | FetchProductsSuccessActionOne
    | FetchProductsErrorActionOne
    | FetchProductsActionCreate
    | FetchProductsSuccessActionCreate
    | FetchProductsErrorActionCreate
