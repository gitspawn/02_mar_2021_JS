import React, { Component } from "react";
import "./TaskEditor.css";
import { connect } from "react-redux";
import tasksActions from "../../redux/tasks/tasksActions";

class TaskEditor extends Component {
    state = {
        text: "",
    };

    handleChange = (event) => {
        this.setState({
            text: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAddTask(this.state.text);
        this.setState({ text: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.text}
                />
                <button type="submit">Добавить заметку</button>
            </form>
        );
    }
}

let mapDispathToProps = {
    onAddTask: tasksActions.addTask,
};

export default connect(null, mapDispathToProps)(TaskEditor);
