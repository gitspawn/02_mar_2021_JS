import { combineReducers } from "redux";
import actionTypes from "./tasksActionTypes";

// state = {
//     tasks: [],
//     filter: "",
// };

// state = {
//     tasks: {
//         items: [],
//         filter: "",
//     },

//     users: {
//         items: [],
//     },

//     acticles: {
//         items: [],
//     },
// };

// let itemsReducer = (state = [], action) => state;
// let filterReducer = (state = "", action) => state;

let itemsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case actionTypes.ADD:
            return [...state, payload.task];

        case actionTypes.REMOVE:
            return state.filter(({ id }) => id !== payload.taskId);

        case actionTypes.TOGGLE_COMPLETED:
            return state.map((task) => {
                return task.id === payload.taskId
                    ? { ...task, completed: !task.completed }
                    : task;
            });

        default:
            return state;
    }
};

let filterReducer = (state = "", { type, payload }) => {
    switch (type) {
        case actionTypes.CHANGE_FILTER:
            return payload.filter;

        default:
            return state;
    }
};

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});
