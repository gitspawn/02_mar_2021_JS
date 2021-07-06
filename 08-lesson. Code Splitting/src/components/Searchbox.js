import React, { Component } from "react";

export default class Searchbox extends Component {
    state = {
        value: "",
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handldeSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({ value: "" });
    };

    render() {
        return (
            <form onSubmit={this.handldeSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />

                <button type="submit">Search</button>
            </form>
        );
    }
}
