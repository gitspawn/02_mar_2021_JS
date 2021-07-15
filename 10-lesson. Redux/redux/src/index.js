import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import store from "./redux/store";
import { Provider } from "react-redux";

console.log("store", store);
console.log("store", store.getState());
// dispatch: ƒ dispatch(action)
// getState: ƒ getState()
// replaceReducer: ƒ replaceReducer(nextReducer)
// subscribe: ƒ subscribe(listener)
// Symbol(observable): ƒ observable()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
