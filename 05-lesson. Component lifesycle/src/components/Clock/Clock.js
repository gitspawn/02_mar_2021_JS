import React, { Component } from "react";
import "./Clock.css";

export default class Clock extends Component {
    constructor() {
        super();
        this.intervalID = null;

        this.state = {
            time: new Date().toLocaleTimeString(),
        };
    }

    // state = {
    //     time: new Date().toLocaleTimeString(),
    // };

    // intervalID = null;

    componentDidMount() {
        console.log("Clock mount");

        this.intervalID = setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() });
        }, 1000);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.intervalID);
    }

    render() {
        console.log("Clock render...", new Date().toLocaleTimeString());
        return <div className="Clockface">{this.state.time}</div>;
    }
}
