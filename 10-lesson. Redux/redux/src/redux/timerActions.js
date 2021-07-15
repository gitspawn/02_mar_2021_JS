// action creators
export const Type = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    CHANGE_STEP: "CHANGE_STEP",
};

export const increment = (value) => ({
    type: Type.INCREMENT,
    payload: value,
});

export const decrement = (value) => ({
    type: Type.DECREMENT,
    payload: value,
});

export const changeStep = (step) => ({
    type: Type.CHANGE_STEP,
    payload: {
        step: Number(step),
    },
});

// Action example
// const actipn = {
//     type: "ADD_DATA",
//     payload: {
//         name: "Vova",
//     },
// };

// export default {
//     decrement,
//     decrement,
//     changeStep,
// Type
// };

// state = {
//     value: 0,
//     step: 5,
// };

// state = {
//     timer: {
//         value,
//         step,
//     },
// };
