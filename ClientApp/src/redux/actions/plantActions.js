// Name: Amritpal Singh
// File Name: plantAction.js
// Date: 31 January 2022
// Descrition: This file contains action of redux



import axios from "axios";

import {
    GET_ALL_PLANTS_REQUEST,
    GET_ALL_PLANTS_ERROR,
    GET_ALL_PLANTS_SUCCESS
} from '../constants/plantsConstants';

const getPlantsSuccess = function (payload) {
    return {
        type: GET_ALL_PLANTS_SUCCESS,
        payload
    };
}

const getPlantsError = function (payload) {
    return {
        type: GET_ALL_PLANTS_ERROR,
        payload
    }
}

export const getAllPlants = function () {
    return (function (dispatch) {
        dispatch({ type: GET_ALL_PLANTS_REQUEST })
        return (
            axios.get('api/Plants/GetPlants').then(res => {
                const response = res.data;
                dispatch(getPlantsSuccess(response));
            }).catch(error => {
                dispatch(getPlantsError("Sorry... Something went Wrong!!!"));
                return Promise.reject({});
            })
        )
    });
}