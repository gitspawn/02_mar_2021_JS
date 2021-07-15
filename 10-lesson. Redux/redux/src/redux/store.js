import { createStore, combineReducers } from "redux";
import timerReducer from "./timerReducer";

// const reducer = (state = {}, action) => state;
// (previousState, action) => newState

const rootReducer = combineReducers({
    timer: timerReducer,
});

// const rootReducer = combineReducers({
//     timer: {
//         value,
//         step,
//     },
// });

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
