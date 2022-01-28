import axios from "axios";
import {LaptopAction, LaptopActionTypes} from "../../types/laptop";
import {Dispatch} from "redux";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

//Laptop get all
export const fetchLaptop = () => {
    return async (dispatch: Dispatch<LaptopAction>) => {
        try {
            dispatch({type: LaptopActionTypes.FETCH_LAPTOPS})
            const response = await axios.get(`${SERVER_URL}/laptop`)
            dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_SUCCESS, payload: response.data})
        }catch (e){
            console.log(e)
            dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_ERROR, payload: 'Error laptop request'})
        }
    }

}

//Laptop get one
export const fetchGetLaptop = (id: string) => {
    return async (dispatch: Dispatch<LaptopAction>) => {
        try {
            dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_ONE})
            const response = await axios.get(`${SERVER_URL}/laptop/${id}`)
            dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_SUCCESS_ONE, payload: response.data})
        }catch (e){
            console.log(e)
            dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_ERROR_ONE, payload: 'Error laptop get one request'})
        }
    }
}

//Laptop delete
export const fetchDeleteLaptop = (id: string) => {
    return async (dispatch: Dispatch<LaptopAction>) => {
        try {
            dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_DELETE})
            await axios.delete(`${SERVER_URL}/laptop/${id}`)
            dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_SUCCESS_DELETE, payload: id})
        }catch (e){
            console.log(e)
            dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_ERROR_DELETE, payload: 'Error laptop delete request'})
        }
    }

}

//Laptop create
export const fetchCreateLaptop = (name: string, description: string, price: string, picture: string) => {
    return async (dispatch: Dispatch<LaptopAction>) => {
        try {
            dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_CREATE})
                const formData = new FormData()
                formData.append('name', name)
                formData.append('description', description)
                formData.append('price', price)
                formData.append('picture', picture)
                await axios.post(`${SERVER_URL}/laptop/`,formData).then(res => {
                dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_SUCCESS_CREATE, payload: res.data})
            }).catch(error => {
                    dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_ERROR_CREATE, payload: error.message})
                })
        }catch (e){
            console.log(e)
            dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_ERROR_CREATE, payload: 'Error laptop create request'})
        }
    }
}

//Laptop update
export const fetchUpdateLaptop = (id: string, name: string, description: string, price: string, picture: string) => {
    return async (dispatch: Dispatch<LaptopAction>) => {
        try {
            dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_UPDATE})
                const formData = new FormData()
                formData.set('name', name)
                formData.set('description', description)
                formData.set('price', price)
                formData.set('picture', picture)
            await axios.put(`${SERVER_URL}/laptop/update/${id}`,formData ).then(res => {
                dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_SUCCESS_UPDATE, payload: res.data})
            }).catch(err => {
                dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_ERROR_UPDATE, payload: err.message})

            })
        }catch (e){
            console.log(e)
            dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_ERROR_UPDATE, payload: 'Error laptop update request'})
        }
    }
}

export const fetchLaptopSearch = (query: string) => {
    return async (dispatch: Dispatch<LaptopAction>) => {
        try {
            dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_ONE})
            const response = await axios.get(`${SERVER_URL}/laptop/search?query=`+query)
            dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_SUCCESS_ONE, payload: response.data})
        }catch (e){
            console.log(e)
            dispatch({type: LaptopActionTypes.FETCH_LAPTOPS_ERROR_ONE, payload: 'Error laptop get one request'})
        }
    }
}

