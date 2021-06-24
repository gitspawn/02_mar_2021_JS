import React, { Component } from "react";

export default class SearchForm extends Component {
    state = {
        inputValue: "",
    };

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputValue);
        this.setState({ inputValue: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        value={this.state.inputValue}
                    />
                </label>
                <button type="submit">Search</button>
            </form>
        );
    }
}
