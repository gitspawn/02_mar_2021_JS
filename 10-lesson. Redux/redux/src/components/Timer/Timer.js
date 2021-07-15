import React from "react";
import { connect } from "react-redux";
import * as timerActions from "../../redux/timerActions";

function Timer({ value, step, onIcrement, onDecrement }) {
    return (
        <div>
            <button type="button" onClick={() => onIcrement(step)}>
                Increment (+)
            </button>
            <div>{value}</div>
            <button type="button" onClick={() => onDecrement(step)}>
                Decrement (-)
            </button>
        </div>
    );
}
const mapStateToProps = (state) => ({
    value: state.timer.value,
    step: state.timer.step,
});

// const mapDispatchToProps = (dispatch) => ({
//     onIcrement: (step) => dispatch(timerActions.increment(step)),
//     onDecrement: (step) => dispatch(timerActions.decrement(step)),
// });

const mapDispatchToProps = {
    onIcrement: timerActions.increment,
    onDecrement: timerActions.decrement,
};

// Карирование
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
