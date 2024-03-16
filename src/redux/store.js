import { createStore, combineReducers } from "redux";
import reducers from "./reducers";

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//   store: reducers,
// });
export default store;
