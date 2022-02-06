// Name: Amritpal Singh
// File Name: store.js
// Date: 31 January 2022
// Descrition: In this file store for providing overall state access to whole application



import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "../reducers";

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));

