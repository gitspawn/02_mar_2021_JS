import React from "react";

// export default function CounterControls({    onHandleIncrement,    onHandleDecrement,}) {
export default function CounterControls(props) {
    let { onHandleIncrement, onHandleDecrement } = props;
    return (
        <div>
            <button type="button" onClick={onHandleIncrement}>
                Increment
            </button>
            <button type="button" onClick={onHandleDecrement}>
                Decrement
            </button>
        </div>
    );
}
