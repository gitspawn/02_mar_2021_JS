import React from "react";
import { connect } from "react-redux";
import * as timerActions from "../../redux/timerActions";

function StepSelector({ options, step, onChangeStep }) {
    return (
        <label>
            <select onChange={(event) => onChangeStep(event.target.value)}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    );
}

const mapStateToProps = (state) => ({
    step: state.timer.step,
});

const mapDispatchToProps = {
    onChangeStep: timerActions.changeStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepSelector);
