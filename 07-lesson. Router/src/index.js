import React from "react";
import ReactDom from "react-dom";

import "./base.css";

import App from "./components/App";

ReactDom.render(
    <App />,

    document.querySelector("#root")
);
