import { createStore, combineReducers } from "redux";

import allUcer from "./reducer/allUser";

const rootReducer = combineReducers({
    allUser: allUcer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__())

export default store