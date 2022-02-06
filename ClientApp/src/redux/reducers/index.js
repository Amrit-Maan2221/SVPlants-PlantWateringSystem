// Name: Amritpal Singh
// File Name: index.js
// Date: 31 January 2022
// Descrition: In this file all the reducers combines to make a single root reducer



import { combineReducers } from 'redux';
import plantReducers from './plantReducers';

const rootReducer = combineReducers({
    plants: plantReducers
});

export default rootReducer;