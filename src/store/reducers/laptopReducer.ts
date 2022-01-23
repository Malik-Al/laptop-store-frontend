import {LaptopAction, LaptopActionTypes, LaptopState} from "../../types/laptop";

const initialState: LaptopState = {
    laptops: [],
    laptop: {},
    loading: false,
    error: null
}

export const laptopReducer = (state = initialState, action: LaptopAction): LaptopState => {
    switch (action.type){

        // LAPTOPS
        case LaptopActionTypes.FETCH_LAPTOPS:
            return {loading: true, error: null, laptops: []}

        case LaptopActionTypes.FETCH_LAPTOPS_SUCCESS:
            return {loading: false, error: null, laptops: action.payload}

        case LaptopActionTypes.FETCH_LAPTOPS_ERROR:
            return {loading: false, error: action.payload, laptops: []}


        // DELETE
        case LaptopActionTypes.FETCH_LAPTOPS_DELETE:
            return {...state,loading: false, error: null}

        case LaptopActionTypes.FETCH_LAPTOPS_SUCCESS_DELETE:
            return {loading: false, error: null, laptops: state.laptops.filter(item => item.id !== action.payload) }

        case LaptopActionTypes.FETCH_LAPTOPS_ERROR_DELETE:
            return {loading: false, error: action.payload, laptops: []}


        // GET ONE
        case LaptopActionTypes.FETCH_LAPTOPS_ONE:
            return {...state,loading: true, error: null}

        case LaptopActionTypes.FETCH_LAPTOPS_SUCCESS_ONE:
            return {...state,loading: false,error: null, laptop: action.payload}

        case LaptopActionTypes.FETCH_LAPTOPS_ERROR_ONE:
            return {loading: false, error: action.payload, laptops: []}


        // CREATE
        case LaptopActionTypes.FETCH_LAPTOPS_CREATE:
            return {...state,loading: true, error: null}

        case LaptopActionTypes.FETCH_LAPTOPS_SUCCESS_CREATE:
            return {loading: false, error: null, laptops: [...state.laptops, action.payload]}

        case LaptopActionTypes.FETCH_LAPTOPS_ERROR_CREATE:
            return {loading: false, error: action.payload, laptops: []}


        // UPDATE
        case LaptopActionTypes.FETCH_LAPTOPS_UPDATE:
            return {...state,loading: true, error: null}

        case LaptopActionTypes.FETCH_LAPTOPS_SUCCESS_UPDATE:
            return {loading: false, error: null, laptops: [...state.laptops, action.payload]}

        case LaptopActionTypes.FETCH_LAPTOPS_ERROR_UPDATE:
            return {loading: false, error: action.payload, laptops: []}

        default:
            return state
    }
}