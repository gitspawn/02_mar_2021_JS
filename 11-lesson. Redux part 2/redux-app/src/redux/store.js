// import { createStore, combineReducers } from "redux";

// let rootReducer = combineReducers({});
// const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

import { createStore, combineReducers } from "redux";
import tasksReducer from "./tasks/tesksReducer.js";
let rootReducer = combineReducers({
    tasks: tasksReducer,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
