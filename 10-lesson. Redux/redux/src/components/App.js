import React from "react";
import Timer from "../components/Timer/Timer";
import StepSelector from "../components/StepSelector/StepSelector";

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
};

let stepOptions = [5, 10, 15, 20, 25, 30];

const App = () => (
    <div style={containerStyle}>
        <Timer />
        <StepSelector options={stepOptions} />
    </div>
);

export default App;
