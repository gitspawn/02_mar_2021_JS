import { combineReducers } from "redux";
import { Type } from "./timerActions";

const valueRducer = (state = 0, action) => {
    switch (action.type) {
        case Type.INCREMENT:
            return state + action.payload;

        case Type.DECREMENT:
            return state - action.payload;

        default:
            return state;
    }
};

let stepRducer = (state = 5, { type, payload }) => {
    switch (type) {
        case Type.CHANGE_STEP:
            return payload.step;

        default:
            return state;
    }
};

export default combineReducers({
    value: valueRducer,
    step: stepRducer,
});

// let store = {
//     value: valueRducer,
//     step: stepRducer,
// };
