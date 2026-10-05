import { createStore, combineReducers } from "redux";

import allUcer from "./reducer/allUser";

const rootReducer = combineReducers({
    allUser: allUcer
})

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  ((f) => f);

const store = createStore(rootReducer, composeEnhancers());

export default store;