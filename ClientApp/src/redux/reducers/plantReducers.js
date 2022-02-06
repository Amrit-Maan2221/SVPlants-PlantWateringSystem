// Name: Amritpal Singh
// File Name: plantReducers.js
// Date: 31 January 2022
// Descrition: This file contains reducers of redux



import {
    GET_ALL_PLANTS_REQUEST,
    GET_ALL_PLANTS_ERROR,
    GET_ALL_PLANTS_SUCCESS
} from '../constants/plantsConstants';


const INITIAL_STATE = {
    loading: false,
    hasError: false,
    error: null,
    data: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_PLANTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_ALL_PLANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                hasError: false,
                data: action.payload
            };
        case GET_ALL_PLANTS_ERROR:
            return {
                ...state,
                loading: false,
                hasError: true,
                error: action.payload
            };
        default:
            return state;
    }
}