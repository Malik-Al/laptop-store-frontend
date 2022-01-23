export enum LaptopActionTypes {
    FETCH_LAPTOPS = 'FETCH_LAPTOPS',
    FETCH_LAPTOPS_SUCCESS = 'FETCH_LAPTOPS_SUCCESS',
    FETCH_LAPTOPS_ERROR = 'FETCH_LAPTOPS_ERROR',

    FETCH_LAPTOPS_DELETE = 'FETCH_LAPTOPS_DELETE',
    FETCH_LAPTOPS_SUCCESS_DELETE = 'FETCH_LAPTOPS_SUCCESS_DELETE',
    FETCH_LAPTOPS_ERROR_DELETE = 'FETCH_LAPTOPS_ERROR_DELETE',

    FETCH_LAPTOPS_ONE = 'FETCH_LAPTOPS_ONE',
    FETCH_LAPTOPS_SUCCESS_ONE = 'FETCH_LAPTOPS_SUCCESS_ONE',
    FETCH_LAPTOPS_ERROR_ONE = 'FETCH_LAPTOPS_ERROR_ONE',

    FETCH_LAPTOPS_CREATE = 'FETCH_LAPTOPS_CREATE',
    FETCH_LAPTOPS_SUCCESS_CREATE = 'FETCH_LAPTOPS_SUCCESS_CREATE',
    FETCH_LAPTOPS_ERROR_CREATE = 'FETCH_LAPTOPS_ERROR_CREATE',

    FETCH_LAPTOPS_UPDATE = 'FETCH_LAPTOPS_UPDATE',
    FETCH_LAPTOPS_SUCCESS_UPDATE = 'FETCH_LAPTOPS_SUCCESS_UPDATE',
    FETCH_LAPTOPS_ERROR_UPDATE = 'FETCH_LAPTOPS_ERROR_UPDATE'
}


export interface LaptopState {
    laptops: any[],
    laptop?:any,
    loading: boolean,
    error: null | string
}


// Product get all
interface FetchLaptopsAction {
    type: LaptopActionTypes.FETCH_LAPTOPS
}

interface FetchLaptopsSuccessAction {
    type: LaptopActionTypes.FETCH_LAPTOPS_SUCCESS,
    payload: any[]
}

interface FetchLaptopsErrorAction {
    type: LaptopActionTypes.FETCH_LAPTOPS_ERROR,
    payload: string
}


// Product delete

interface FetchLaptopsActionDelete {
    type: LaptopActionTypes.FETCH_LAPTOPS_DELETE
}

interface FetchLaptopsSuccessActionDelete {
    type: LaptopActionTypes.FETCH_LAPTOPS_SUCCESS_DELETE,
    payload: string
}

interface FetchLaptopsErrorActionDelete {
    type: LaptopActionTypes.FETCH_LAPTOPS_ERROR_DELETE,
    payload: string
}


// Product get one

interface FetchLaptopsActionOne {
    type: LaptopActionTypes.FETCH_LAPTOPS_ONE
}

interface FetchLaptopsSuccessActionOne {
    type: LaptopActionTypes.FETCH_LAPTOPS_SUCCESS_ONE,
    payload: any
}

interface FetchLaptopsErrorActionOne {
    type: LaptopActionTypes.FETCH_LAPTOPS_ERROR_ONE,
    payload: string
}



// create laptop

interface FetchLaptopsActionCreate {
    type: LaptopActionTypes.FETCH_LAPTOPS_CREATE
}

interface FetchLaptopsSuccessActionCreate {
    type: LaptopActionTypes.FETCH_LAPTOPS_SUCCESS_CREATE,
    payload: any[]
}

interface FetchLaptopsErrorActionCreate {
    type: LaptopActionTypes.FETCH_LAPTOPS_ERROR_CREATE,
    payload: string
}

// update laptop

interface FetchLaptopsActionUpdate {
    type: LaptopActionTypes.FETCH_LAPTOPS_UPDATE
}

interface FetchLaptopsSuccessActionUpdate {
    type: LaptopActionTypes.FETCH_LAPTOPS_SUCCESS_UPDATE,
    payload: any
}

interface FetchLaptopsErrorActionUpdate {
    type: LaptopActionTypes.FETCH_LAPTOPS_ERROR_UPDATE,
    payload: string
}

export type LaptopAction =
    FetchLaptopsAction
    | FetchLaptopsSuccessAction
    | FetchLaptopsErrorAction
    | FetchLaptopsActionDelete
    | FetchLaptopsSuccessActionDelete
    | FetchLaptopsErrorActionDelete
    | FetchLaptopsActionOne
    | FetchLaptopsSuccessActionOne
    | FetchLaptopsErrorActionOne
    | FetchLaptopsActionCreate
    | FetchLaptopsSuccessActionCreate
    | FetchLaptopsErrorActionCreate
    | FetchLaptopsActionUpdate
    | FetchLaptopsSuccessActionUpdate
    | FetchLaptopsErrorActionUpdate
