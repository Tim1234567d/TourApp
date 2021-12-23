// import { configureStore } from "@reduxjs/toolkit";
// import mainPageReduser from '../mainPage/mainPageSlice'

// export const store = configureStore({
//     reducer:mainPageReduser,
// });


// import {  createStore, applyMiddleware, compose} from "redux"; 

// import thunk from "redux-thunk";

// import rootReducer from "../reducers/rootReducer";


// const store = createStore(rootReducer,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// export default store;    

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;